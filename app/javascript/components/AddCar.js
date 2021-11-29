import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Container, Button } from 'react-bootstrap';
import addCar from '../Redux/Car/addCar';

const AddCar = () => {
  const dispatch = useDispatch();
  const addCarAction = bindActionCreators(addCar, dispatch);

  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgInp, setImgInput] = useState(new FormData());

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeModel = (e) => {
    setModel(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const setImgInp = (img) => {
    setImgInput(img.files[0]);
  };

  const submitCar = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', name);
    form.append('model', model);
    form.append('description', description);
    form.append('price', price);
    form.append('image', imgInp);

    addCarAction(form);
    setName('');
    setModel('');
    setDescription('');
    setPrice('');
    setPrice('');
  };

  return (
    <Container>
      <Form onSubmit={submitCar}>
        <Form.Label className="fs-1 text-center">Add Car:</Form.Label>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Car name"
            onChange={changeName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Car model"
            onChange={changeModel}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Car description"
            onChange={changeDescription}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Car price"
            onChange={changePrice}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            placeholder="Enter Car name"
            onChange={(e) => setImgInp(e.target)}
          />
        </Form.Group>
        <Button
          variant="success"
          type="submit"
        >
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default AddCar;
