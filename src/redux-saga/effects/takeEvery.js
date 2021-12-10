import { fork, take } from './effects';

export function* takeEvery(actionType, saga) {
  const task = yield fork(function* () {
    while (true) {
      const action = yield take(actionType);
      const nextTask = yield fork(saga, action);
      nextTask();
    }
  });
  yield task();
}
