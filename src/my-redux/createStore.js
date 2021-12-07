import { cloneDeep } from "lodash-es";

export const createStore = (rootReducer) => {
  //Observer Patern
  let state = rootReducer({}, {});
  let listeners = [];

  const getState = () => cloneDeep(state);

  const dispatch = (action) => {
    state = rootReducer(cloneDeep(state), action);
    console.log("listener", listeners);
    listeners.forEach((listener) => listener(state));
    return action;
  };

  const subscribe = (func) => {
    if (typeof func === "function") listeners.push(func);
  };

  const unsubscribe = (func) => {
    listeners.forEach((listener, index) =>
      listener === func ? listeners.splice(index, 1) : listener,
    );
  };

  return { getState, dispatch, subscribe, unsubscribe };
};
