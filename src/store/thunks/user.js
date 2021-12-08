import { getOrderById, updateOrder } from '../../Services';
import { fetchUserSuccess, updateUserSuccess } from '../actions';

const defaultID = 'ww2sgNbZBq';

export function fetchNameId(id) {
  return async function (dispatch) {
    const response = await getOrderById(id ? id : defaultID);
    dispatch(fetchUserSuccess(response));
  };
}

export function changeUserName(id, user) {
  return async function (dispatch) {
    const response = await updateOrder(id, user);
    dispatch(updateUserSuccess(response));
  };
}
