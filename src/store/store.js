import { combineReducers, createStore } from "../my-redux";
import { counterReducer, userReducer } from "./reducers";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);
