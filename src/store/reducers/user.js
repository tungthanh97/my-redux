import { CHANGENAME, RESETNAME } from "../actions";

const initialState = { name: "", age: 0, id: 0, address: "" };

export const userReducer = (state = initialState, action) => {
  if (action.type === CHANGENAME) {
    return { ...state, name: action.name };
  }

  if (action.type === RESETNAME) {
    return initialState;
  }

  return state;
};
