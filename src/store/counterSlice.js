import { createSlice } from '../redux-toolkit';

// export const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === INC) {
//     return { counter: state.counter + 1 };
//   }

//   if (action.type === DEC) {
//     return { counter: state.counter - 1 };
//   }

//   return state;
// };
export const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    incCounter(state) {
      return { counter: state.counter + 1 };
    },
    decCounter(state) {
      return { counter: state.counter - 1 };
    },
  },
});
const { actions, reducer } = counterSlice;
export const { incCounter, decCounter } = actions;
export { reducer as counterReducer };
