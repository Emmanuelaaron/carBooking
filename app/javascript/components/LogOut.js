import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOut } from '../Redux/Session/Session.js';

const LogOut = (props) => {
  const { text } = props;
  const dispatch = useDispatch();
  const loggOff = bindActionCreators(logOut, dispatch);

  const logginOutBtnHandle = () => {
    loggOff();
  };

  return (
    <button
      type="button"
      className="ps-3 fs-5 px-4 border-0 bg-transparent"
      onClick={logginOutBtnHandle}
    >
      {text}
    </button>
  );
};

export default LogOut;