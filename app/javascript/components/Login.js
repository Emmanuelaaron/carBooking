import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../Redux/Session/Session';

const Login = () => {
  const [userInp, setUserInp] = useState('');
  const dispatch = useDispatch();
  const loginUserAction = bindActionCreators(loginUser, dispatch);

  const UpdateUserInp = (value) => {
    setUserInp(value);
  };

  const loginUserBtnHandler = () => {
    loginUserAction(userInp);
  };

  return (
    <div>
      <h1>Login:</h1>
      <input placeholder="Enter Username:" onChange={(e) => UpdateUserInp(e.target.value)} />
      <button type="button" onClick={loginUserBtnHandler}>Login User</button>
    </div>
  );
};

export default Login;
