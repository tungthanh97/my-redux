import { combineReducers, createStore, applyMiddleware } from '../my-redux';
import thunk from '../redux-thunk';
import { counterReducer, userReducer } from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
