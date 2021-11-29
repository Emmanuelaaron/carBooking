import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Button, Container, Row, Col,
} from 'react-bootstrap';
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

  const inputEnterSubmit = (e) => {
    if (e.key === 'Enter') {
      createUserAction(userInp);
    }
  };

  return (
    <Container>
      <Row className="m-0">
        <Col md="6" className="p-3">
          <img src={logo} className="w-100" />
        </Col>
        <Col md="6">
          <Form className="p-3 d-flex flex-column justify-content-center h-100" onSubmit={(e) => e.preventDefault()}>
            <Form.Label className="fs-1 text-center">Sign Up User:</Form.Label>
            <Form.Group className="mb-3 d-flex flex-row">
              <Form.Control
                type="username"
                placeholder="Enter Username:"
                onChange={(e) => UpdateUserInp(e.target.value)}
                onKeyUp={(e) => inputEnterSubmit(e)}
              />
              <Button variant="success" type="button" onClick={createUserBtnHandler}>
                SignUp
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
