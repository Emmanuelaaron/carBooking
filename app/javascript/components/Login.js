import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import { loginUser } from '../Redux/Session/Session';
import logo from '../Img/logo.jpg';

const Login = (props) => {
  const { addNotification } = props;
  const [userInp, setUserInp] = useState('');
  const dispatch = useDispatch();
  const loginUserAction = bindActionCreators(loginUser, dispatch);

  const UpdateUserInp = (value) => {
    setUserInp(value);
  };

  const loginUserBtnHandler = () => {
    loginUserAction(userInp, addNotification);
  };

  const inputEnterSubmit = (e) => {
    if (e.key === 'Enter'){
      loginUserAction(userInp, addNotification);
    }
  };

  return (
    <Container>
      <Row>
        <Col md="6" className="p-4">
          <img src={logo} className="w-100" />
        </Col>
        <Col md="6">
          <Form className="p-3 d-flex flex-column justify-content-center h-100" onSubmit={(e) => e.preventDefault()} >
            <Form.Label className="fs-1 text-center">Login:</Form.Label>
            <Form.Group className="mb-3 d-flex">
              <Form.Control
                type="username"
                placeholder="Enter Username:"
                onChange={(e) => UpdateUserInp(e.target.value)}
                onKeyUp={(e) => inputEnterSubmit(e)}
              />
              <Button variant="success" className="align-self-end" type="button" onClick={loginUserBtnHandler}>
              Login
            </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  addNotification: PropTypes.func
};

export default Login;
