import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import { fetchCreateUser } from '../Redux/Session/Session';
import logo from '../Img/logo.jpg';

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

  return (
    <Container>
      <Row className="m-0">
        <Col md="6" className="p-3">
          <img src={logo} className="w-100" />
        </Col>
        <Col md="6">
          <Form className="p-3" onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Label className="fs-1">Sign Up User:</Form.Label>
              <Form.Control type="username" placeholder="Enter Username:" onChange={(e) => UpdateUserInp(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="button" onClick={createUserBtnHandler}>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </ Container>
  );
};

export default SignUp;
