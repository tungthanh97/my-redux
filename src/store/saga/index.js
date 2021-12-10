import { takeEvery, takeLastest } from '../../redux-saga/effects';
import { FETCH_USER, UPDATE_USER } from '../actions';
import { changeUserName, fetchNameId } from './user';

export default function* postsSaga() {
  yield* takeLastest(FETCH_USER, fetchNameId);
  yield* takeEvery(UPDATE_USER, changeUserName);
}
