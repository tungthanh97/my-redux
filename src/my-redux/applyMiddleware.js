export const applyMiddleware = (middleware) => (createStore) => (reducer) => {
  const store = createStore(reducer);
  let dispatch = () => {
    throw new Error(
      'Dispatching while constructing your middleware is not allowed.',
    );
  };
  // @ if we set dispatch: store.dispatch, thunk dispatch will be the dispatch without middleware
  const middlewareApi = {
    getState: store.getState,
    //when use thunk dispatch here has updated newDispatch
    dispatch: (action, ...args) => dispatch(action, ...args),
  };
  //newDispatch from middleware
  dispatch = middleware(middlewareApi)(store.dispatch);
  return { ...store, dispatch };
};
