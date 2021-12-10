import { combineReducers, createStore, applyMiddleware } from '../my-redux';
import { userReducer } from './reducers';
import { counterReducer } from './counterSlice';
import createSagaMiddleware from '../redux-saga';
import postsSaga from './saga';

const rootReducer = combineReducers({
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(postsSaga);
