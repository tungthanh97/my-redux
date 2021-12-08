import { cloneDeep } from 'lodash-es';

export const createStore = (rootReducer, enhancer) => {
  //Observer Patern
  let state = rootReducer({}, {});
  let listeners = [];

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error(
        `Expected the enhancer to be a function. Instead, received: '${typeof enhancer}'`,
      );
    }
    return enhancer(createStore)(rootReducer);
  }

  const getState = () => cloneDeep(state);

  const dispatch = (action) => {
    state = rootReducer(cloneDeep(state), action);
    listeners.forEach((listener) => listener(state));
    return action;
  };

  const subscribe = (func) => {
    if (typeof func === 'function') listeners.push(func);
  };

  const unsubscribe = (func) => {
    listeners.forEach((listener, index) =>
      listener === func ? listeners.splice(index, 1) : listener,
    );
  };

  return { getState, dispatch, subscribe, unsubscribe };
};
