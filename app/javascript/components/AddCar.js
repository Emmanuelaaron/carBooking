import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Container, Button } from 'react-bootstrap';
import addCar from '../Redux/Car/addCar';

const AddCar = () => {
  const dispatch = useDispatch();
  const addCarAction = bindActionCreators(addCar, dispatch);

  const [carData, setCarData] = useState({
    name: '',
    model: '',
    description: '',
    price: '',
    imgInp: new FormData(),
  });

  // const [name, setName] = useState('');
  // const [model, setModel] = useState('');
  // const [description, setDescription] = useState('');
  // const [price, setPrice] = useState('');
  // const [imgInp, setImgInput] = useState(new FormData());

  const changeName = (e) => {
    setCarData((prevState) => ({
      ...prevState,
      name: e.target.value
    }));
  };

  const changeModel = (e) => {
    setCarData((prevState) => ({
      ...prevState,
      model: e.target.value
    }));
  };

  const changeDescription = (e) => {
    setCarData((prevState) => ({
      ...prevState,
      description: e.target.value
    }));
  };

  const changePrice = (e) => {
    setCarData((prevState) => ({
      ...prevState,
      price: e.target.value
    }));
  };

  const setImgInp = (img) => {
    setCarData((prevState) => ({
      ...prevState,
      imgInp: img.files[0]
    }));
  };

  const submitCar = (e) => {
    e.preventDefault();
    const form = new FormData()
    form.append('name', carData.name)
    form.append('model', carData.model)
    form.append('description', carData.description)
    form.append('price', carData.price)
    form.append('image', carData.imgInp)
    console.log('cardata.name', carData.name);
    console.log('form', form);
    addCarAction(form);
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
