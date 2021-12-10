import { call, put } from '../../redux-saga/effects';
import { getOrderById, updateOrder } from '../../Services';
import { fetchUserSuccess, updateUserSuccess } from '../actions';

const defaultID = 'ww2sgNbZBq';

export function* fetchNameId({ payload }) {
  console.log('fetchNameId');
  yield call(() => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  });
  const response = yield call(
    getOrderById,
    payload.id ? payload.id : defaultID,
  );
  console.log('fetchNameId2');
  yield put(fetchUserSuccess(response));
}

export function* changeUserName({ payload }) {
  const response = yield call(updateOrder, payload.id, payload.user);
  yield put(updateUserSuccess(response));
}
