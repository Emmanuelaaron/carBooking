import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button } from 'react-bootstrap';
import { loginUser } from '../Redux/Session/Session';
import logo from '../Img/logo.jpg';
import styles from './Login.module.css';
import Loading from './Loading';

const Login = () => {
  const [userInp, setUserInp] = useState('');
  const dispatch = useDispatch();
  const loginUserAction = bindActionCreators(loginUser, dispatch);
  const [ loggin, setLoggin ] = useState(false);

  const UpdateUserInp = (value) => {
    setUserInp(value);
  };

  const loginUserBtnHandler = () => {
    setLoggin(true);
    loginUserAction(userInp, setLoggin);
  };

  const inputEnterSubmit = (e) => {
    if (e.key === 'Enter') {
      setLoggin(true);
      loginUserAction(userInp, setLoggin);
    }
  };

  return (
    <div className={styles.container}>
      <Loading status={loggin} />
      <img src={logo} className={styles.img} alt="logo" />
      <Form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
        <Form.Label className={styles.logLabel}>Login:</Form.Label>
        <Form.Group className={styles.inputContainer}>
          <Form.Control
            type="text"
            placeholder="Enter Username:"
            onChange={(e) => UpdateUserInp(e.target.value)}
            onKeyUp={(e) => inputEnterSubmit(e)}
            bsPrefix={styles.logInput}
            data-testid="user-login-inp"
          />
          <Button bsPrefix={styles.logBtn} type="button" onClick={loginUserBtnHandler}>
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
