import React from 'react';
import { useSelector, useDispatch } from '../my-redux';
import { incCounter, decCounter } from '../store';

export const Counter = () => {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const inc = () => dispatch(incCounter());
  const dec = () => dispatch(decCounter());

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
