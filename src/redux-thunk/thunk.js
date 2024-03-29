function createThunkMiddleware() {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      // If the "action" is actually a function instead...
      if (typeof action === 'function') {
        // then call the function and pass `dispatch` and `getState` as arguments
        return action(dispatch, getState);
      }

      // Otherwise, it's a normal action - send it onwards
      return next(action);
    };
}

const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
