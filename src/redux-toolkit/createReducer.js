import createNextState, { isDraft, isDraftable } from 'immer';

export function createReducer(initialState, actionsMap) {
  return function (state = initialState, action) {
    const caseReducers = [actionsMap[action.type]];
    return caseReducers.reduce((previousState, caseReducer) => {
      if (caseReducer) {
        // const result = caseReducer(previousState, action);
        // return result;
        if (isDraft(previousState)) {
          const draft = previousState; // We can assume this is already a draft
          const result = caseReducer(draft, action);

          return result;
        } else if (!isDraftable(previousState)) {
          // If state is not draftable (ex: a primitive, such as 0)
          const result = caseReducer(previousState, action);

          return result;
        } else {
          return createNextState(previousState, (draft) => {
            return caseReducer(draft, action);
          });
        }
      }
      return previousState;
    }, state);
  };
}
