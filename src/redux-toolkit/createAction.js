export function createAction(type) {
  function actionCreator(...args) {
    return { type, payload: args[0] };
  }
  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = (action) => action.type === type;
  return actionCreator;
}
