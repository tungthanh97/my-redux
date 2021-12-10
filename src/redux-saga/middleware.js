import { runSaga } from './runSaga';
import { EventEmitter } from 'events';

const createSagaMiddleware = () => {
  let boundRunSaga;
  const actionsEmitter = new EventEmitter();
  function sagaMiddleware({ dispatch, getState }) {
    boundRunSaga = runSaga.bind(null, { dispatch, getState, actionsEmitter });
    return (next) => (action) => {
      const result = next(action);
      actionsEmitter.emit(action.type, action);
      return result;
    };
  }
  sagaMiddleware.run = (...args) => {
    return boundRunSaga(...args);
  };
  return sagaMiddleware;
};

export default createSagaMiddleware;
