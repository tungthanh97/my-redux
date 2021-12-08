import { createAction } from './createAction';
import { createReducer } from './createReducer';

function getType(name, reducerName) {
  return `${name}/${reducerName}`;
}

export function createSlice(options) {
  const { name, initialState, reducers = {} } = options;
  if (!name) {
    throw new Error('`name` is a required option for createSlice');
  }
  const reducerNames = Object.keys(reducers);
  const sliceCaseReducersByType = {};
  const actionCreators = {};
  reducerNames.forEach((reducerName) => {
    const caseReducer = reducers[reducerName];
    const type = getType(name, reducerName);
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = createAction(type);
  });

  const finalCaseReducers = { ...sliceCaseReducersByType };
  const reducer = createReducer(initialState, finalCaseReducers);
  return {
    name,
    reducer,
    actions: actionCreators,
  };
}
