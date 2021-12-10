import { fork, take, cancel } from './effects';

export function* takeLastest(actionType, saga) {
  const task = yield fork(function* () {
    let lastTask;
    while (true) {
      const action = yield take(actionType);
      if (lastTask) {
        yield cancel(lastTask);
      }
      lastTask = yield fork(saga, action);
      yield lastTask();
    }
  });
  yield task();
}
