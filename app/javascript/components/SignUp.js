import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, Button, Container} from 'react-bootstrap';
import { fetchCreateUser } from '../Redux/Session/Session';

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
      <Form className="border">
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Create User</Form.Label>
          <Form.Control type="username" placeholder="Enter Username:" onChange={(e) => UpdateUserInp(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={createUserBtnHandler}>
          Create User
        </Button>
      </Form>
    </ Container>
  );
};

export default SignUp;
