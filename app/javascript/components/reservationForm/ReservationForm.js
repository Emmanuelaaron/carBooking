import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './reservationForm.module.css';
import { Form, Button, Alert } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { fetchCarsNCities, createReservation } from '../../Redux/Reservation/Reservation'
import CircularProgress from "react-cssfx-loading/lib/CircularProgress";

const ReservationForm = () =>{ 
  const { cars, cities } = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const loadCarsNCities = bindActionCreators(fetchCarsNCities, dispatch);
  const sendFormData = bindActionCreators(createReservation, dispatch);
  const [message, setMessage] = useState(null);

  const [reservationData, setReservationData]  = useState({
    date: new Date(),
    car_id: "",
    city_id: "",
  });
  
  const updateDate = (date) => {
    setReservationData((prevState) => ({
      ...prevState,
      date: date
    }))
  }

  const updateCarId = (value) => {
    setReservationData((prevState) => ({
      ...prevState,
      car_id: parseInt(value)
    }))
  }

  const updateCityId = (value) => {
    setReservationData((prevState) => ({
      ...prevState,
      city_id: parseInt(value)
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    sendFormData(reservationData, setMessage);
  }

  useEffect(() => {
    loadCarsNCities();
  }, []);

  let result = (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      < CircularProgress 
        color="#97bf11" 
        width="100px" 
        height="100px" 
      />
      <h2>Loading...</h2>
    </div>
  )

  if (cars && cities) {
    result = 
    <div className={styles.container} id="reservationForm-container">
      { message != null &&
        <Alert variant="success" className="text-center">
          <Alert.Heading>{message}</Alert.Heading>
          <p>Your car was successfully reserved.</p>
        </Alert>
      }
      <h1 className="w-100 text-center mt-5">Reserve a Car</h1>

      <Form className="w-75 mx-auto my-5" onSubmit={handleSubmit}>
        <Form.Select aria-label="select a car" className="my-3" onChange={(e) => updateCarId(e.target.value)}>
          <option>Select a Car</option>
          {
            cars.map(car => (
              <option key={car.id} value={car.id}>
                {car.name}: {car.model}
              </option>
            ))
          }
        </Form.Select>

        <Form.Select aria-label="Select a city" className="my-3" onChange={(e) => updateCityId(e.target.value)}>
          <option>Select a City</option>
          {
            cities.map(city => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))
          }
        </Form.Select>

        <DatePicker selected={reservationData.date} onChange={(date) => updateDate(date)} className="my-3" />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>;
  }
  return result;
}

export default ReservationForm;