import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Container, Button } from 'react-bootstrap';
import addCar from '../Redux/Car/addCar';
import styles from './reservationForm/reservationForm.module.css'

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
    addCarAction(form);
  };

  return (
    <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center`}>
      <h1 className="text-center mt-5 text-white w-100 fs-3 border-bottom border-white pb-2">Add Car:</h1>
      <Form className={`${styles.form} mx-auto mt-4 text-center`} onSubmit={submitCar}>
        <div>
          <Form.Control
            type="text"
            placeholder="Enter Car name"
            onChange={changeName}
            bsPrefix={styles.selection}
            className="m-2"
          />
               
          <Form.Control
            type="text"
            placeholder="Enter Car model"
            onChange={changeModel}
            bsPrefix={styles.selection}
            className="m-2"
          />
        
          <Form.Control
            type="text"
            placeholder="Enter Car description"
            onChange={changeDescription}
            bsPrefix={styles.selection}
            className="m-2"
          />
                
          <Form.Control
            type="text"
            placeholder="Enter Car price"
            onChange={changePrice}
            bsPrefix={styles.selection}
            className="m-2"
          />
          <div className="d-flex justify-content-center">
            <Form.Control
              type="file"
              placeholder="Enter Car name"
              onChange={(e) => setImgInp(e.target)}
              className="m-2 w-50 rounded-pill text-center"
            />
          </div>
        </div>
        <div className="w-100 text-center">
          <Button
            variant="success"
            type="submit"
            bsPrefix={styles.button}
            className="w-50 mt-3"
          >
            Create
          </Button>

        </div>
      </Form>
    </div>
  );
};

export default AddCar;