import { INC, DEC } from "../actions";

export const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === INC) {
    return { counter: state.counter + 1 };
  }

  if (action.type === DEC) {
    return { counter: state.counter - 1 };
  }

  return state;
};
