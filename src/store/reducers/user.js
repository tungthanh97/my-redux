import { UPDATE_USER_SUCCESS, FETCH_USER_SUCCESS, RESETNAME } from '../actions';

const initialState = { name: '', id: 0, address: '' };

export const userReducer = (state = initialState, { type, payload }) => {
  if (type === FETCH_USER_SUCCESS) {
    return {
      ...state,
      name: payload.hoTen,
      id: payload.id,
      address: payload.diaChi,
    };
  }

  if (type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      name: payload.hoTen,
      id: payload.id,
      address: payload.diaChi,
    };
  }

  if (type === RESETNAME) {
    return initialState;
  }

  return state;
};
