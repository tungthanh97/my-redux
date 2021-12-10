export const RESETNAME = 'RESETNAME';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const resetNameAction = () => ({ type: RESETNAME });
export const fetchUserSuccess = (payload) => ({
  type: FETCH_USER_SUCCESS,
  payload,
});
export const updateUserSuccess = (payload) => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});

export const fetchUser = (id) => ({ type: FETCH_USER, payload: { id } });
export const updateUser = (id, user) => ({
  type: UPDATE_USER,
  payload: { id, user },
});
