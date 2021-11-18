import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCreateUser } from "../Redux/Session/Session";

const SignUp = () => {
  const [ userInp, setUserInp ] = useState('');
  const dispatch = useDispatch();
  const createUserAction = bindActionCreators(fetchCreateUser, dispatch);

  const UpdateUserInp = (value) => {
    setUserInp(value);
  };

  const createUserBtnHandler = () => {
    createUserAction(userInp);
  };
  
  return (
    <div>
      <label>Create new User:</label>
      <input placeholder="Enter Username:" onChange={(e) => UpdateUserInp(e.target.value)} />
      <button onClick={createUserBtnHandler}>Create User</button>
    </div>
  );
};
  

export default SignUp
