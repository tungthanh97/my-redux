export function createReducer(initialState, actionsMap) {
  return function (state = initialState, action) {
    const caseReducers = [actionsMap[action.type]];
    return caseReducers.reduce((previousState, caseReducer) => {
      if (caseReducer) {
        const result = caseReducer(previousState, action);
        return result;
      }
      return previousState;
    }, state);
  };
}
