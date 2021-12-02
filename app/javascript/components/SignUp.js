import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Button, Container, Row, Col,
} from 'react-bootstrap';
import { fetchCreateUser } from '../Redux/Session/Session';
import logo from '../Img/logo.jpg';
import styles from './Login.module.css'

const SignUp = () => {
  const [userInp, setUserInp] = useState('');
  const dispatch = useDispatch();
  const createUserAction = bindActionCreators(fetchCreateUser, dispatch);

  const UpdateUserInp = (value) => {
    setUserInp(value);
  };

  const createUserBtnHandler = () => {
    createUserAction(userInp);
  };

  const inputEnterSubmit = (e) => {
    if (e.key === 'Enter') {
      createUserAction(userInp);
    }
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.img} alt="logo" />
      <Form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
        <Form.Label className={styles.logLabel}>Sign Up User:</Form.Label>
        <Form.Group className={styles.inputContainer}>
          <Form.Control
            type="username"
            placeholder="Enter Username:"
            onChange={(e) => UpdateUserInp(e.target.value)}
            onKeyUp={(e) => inputEnterSubmit(e)}
            bsPrefix={styles.logInput}
          />
          <Button bsPrefix={styles.logBtn} type="button" onClick={createUserBtnHandler}>
            SignUp
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUp;
