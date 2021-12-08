import { combineReducers, createStore, applyMiddleware } from '../my-redux';
import thunk from '../redux-thunk';
import { userReducer } from './reducers';
import { counterReducer } from './counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
