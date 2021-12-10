/* eslint-disable no-loop-func */
import {
  CALL_EFFECT,
  FORK,
  PUT_EFFECT,
  SELECT_EFFECT,
  TAKE_EFFECT,
  CANCEL,
} from './effects';
import { isGeneratorFunction } from './utils';

export function createRunSaga() {
  let isCancelled = false;
  async function runSaga(store, saga, ...args) {
    const it = saga(...args);
    let result = it.next();
    while (!result.done) {
      if (isCancelled) return;
      const effect = result.value;
      console.log('effect', effect);
      switch (effect?.type) {
        case CALL_EFFECT:
          result = it.next(await effect.fn(...effect.args));
          break;
        case PUT_EFFECT:
          store.dispatch(effect.action);
          result = it.next();
          break;
        case SELECT_EFFECT:
          result = it.next(store.getState(effect.selector));
          break;
        case TAKE_EFFECT:
          const action = await new Promise((resolve) =>
            store.actionsEmitter.once(effect.actionType, resolve),
          );
          result = it.next(action);
          break;
        case FORK:
          const task = createRunSaga();
          const newRunSaga = task.bind(
            null,
            store,
            effect.saga,
            ...effect.args,
          );
          newRunSaga.cancel = task.cancel;
          result = it.next(newRunSaga);
          break;
        case CANCEL:
          const cancelAction = effect.action;
          if (isGeneratorFunction(cancelAction)) cancelAction.return();
          else if (cancelAction.cancel) cancelAction.cancel();
          result = it.next();
          break;

        default:
          result = it.next();
      }
    }
  }
  runSaga.cancel = () => {
    isCancelled = true;
  };

  return runSaga;
}

export const runSaga = createRunSaga();
