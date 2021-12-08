import React from 'react';
import { useSelector, useDispatch } from '../my-redux';
import { incrementAction, decrementAction } from '../store';

export const Counter = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inc = () => dispatch(incrementAction());
  const dec = () => dispatch(decrementAction());

  return (
    <div>
      <p>
        <b>{counter}</b>
      </p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};
