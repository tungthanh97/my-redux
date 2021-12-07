import React, { useRef } from "react";
import { useSelector, useDispatch } from "../my-redux";
import { changeNameAction, resetNameAction } from "../store";

export const User = () => {
  console.log("user rerender");
  const user = useSelector("user");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const changeName = () => dispatch(changeNameAction(inputRef.current.value));
  const resetName = () => dispatch(resetNameAction());

  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" name="name" ref={inputRef} />
        <button onClick={changeName}>CHANGE</button>
        <button onClick={resetName}>RESET</button>
      </div>
      <p>UserName:{user.name}</p>
    </div>
  );
};
