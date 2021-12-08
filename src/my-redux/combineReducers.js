export function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  return (state = {}, action) => {
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

// const combineReducers = (reducers) => {
//   const nextState = {};
//   const reducerFunctions = {};
//   const reducersKeys = Object.keys(reducers);
//   reducersKeys.forEach((reducerKey) => {
//     if (typeof reducers[reducerKey] === "function") {
//       reducerFunctions[reducerKey] = reducers[reducerKey];
//     }
//   });
//   const reducerFunctionsKeys = Object.keys(reducerFunctions);

//   return (state = {}, action) => {
//     reducerFunctionsKeys.forEach((reducerKey) => {
//       const reducer = reducerFunctions[reducerKey];
//       nextState[reducerKey] = reducer(state[reducerKey], action);
//     });

//     return nextState;
//   };
// };
