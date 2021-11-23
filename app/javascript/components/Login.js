import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
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
    <Col md="6">
      <Form className="p-3" onSubmit={(e) => e.preventDefault()} >
        <Form.Group className="mb-3">
          <Form.Label className="fs-1">Login:</Form.Label>
          <Form.Control type="username" placeholder="Enter Username:" onChange={(e) => UpdateUserInp(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={loginUserBtnHandler}>
          Login
        </Button>
      </Form>
    </Col>

  );
};

export default Login;
