import React, { useRef } from 'react';
import { useSelector, useDispatch } from '../my-redux';
import { resetNameAction, fetchNameId, changeUserName } from '../store';
import {} from '../store/thunks';

export const User = () => {
  const user = useSelector('user');
  const idRef = useRef();
  const nameRef = useRef();
  const dispatch = useDispatch();
  const changeName = () =>
    dispatch(changeUserName(user.id, { hoTen: nameRef.current.value }));
  const resetName = () => dispatch(resetNameAction());
  const getName = () => dispatch(fetchNameId(idRef.current.value));
  const didGetName = user.id !== 0;

  return (
    <div>
      <div>
        <div>
          <label>Id</label>
          <input
            type="text"
            name="id"
            ref={idRef}
            placeholder="Input an id here"
          />
          <button onClick={getName}>GETNAME</button>
        </div>
        <label>Name</label>
        <input
          disabled={didGetName ? false : true}
          type="text"
          name="name"
          ref={nameRef}
          placeholder="Input new name here"
        />
        <button disabled={didGetName ? false : true} onClick={changeName}>
          CHANGE
        </button>
      </div>
      <p>UserName:{user.name}</p>
      <button onClick={resetName}>RESET</button>
    </div>
  );
};
