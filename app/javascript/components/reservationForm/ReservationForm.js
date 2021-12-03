import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from './reservationForm.module.css';
import { fetchCarsNCities, createReservation } from '../../Redux/Reservation/Reservation';
import Loading from '../Loading';

const ReservationForm = () => {
  const { id } = useParams();
  let carid = parseInt(id, 10);
  if (id === 'new') {
    carid = '';
  }
  const { cars, cities } = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const loadCarsNCities = bindActionCreators(fetchCarsNCities, dispatch);
  const sendFormData = bindActionCreators(createReservation, dispatch);
  const [message, setMessage] = useState(null);

  const [reservationData, setReservationData] = useState({
    date: new Date().toISOString().slice(0, 10),
    car_id: carid,
    city_id: '',
  });

  const updateDate = (date) => {
    setReservationData((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const updateCarId = (value) => {
    setReservationData((prevState) => ({
      ...prevState,
      car_id: parseInt(value, 10),
    }));
  };

  const updateCityId = (value) => {
    setReservationData((prevState) => ({
      ...prevState,
      city_id: parseInt(value, 10),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormData(reservationData, setMessage);
  };

  useEffect(() => {
    loadCarsNCities();
  }, []);

  return (
    <div className="container-fluid position-relative p-0">
      {
        (cars && cities) ?
        <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center h-100`} id="reservationForm-container">
          { message != null
          && (
          <Alert variant="success" className="text-center">
            <Alert.Heading>{message}</Alert.Heading>
            <p>Your car was successfully reserved.</p>
          </Alert>
          )}
          <h1 className="w-75 text-center mt-5 text-white fs-3 border-bottom border-white pb-2">RESERVE A CAR WITH JDE MOTORS</h1>
          <p className={`${styles.textFont} text-center text-white mb-3 mt-2`}>
            Rent with confidence with JDE MOTORS. Find your city&apos;s closest reservation
            location and hit the road! We provide service for over
            {' '}
            {cities.length}
            {' '}
            cities. No hidden fees.
          </p>
          <Form className={`${styles.form} mx-auto mt-4`} onSubmit={handleSubmit}>
            <Form.Select
              value={reservationData.car_id}
              bsPrefix={styles.selection}
              aria-label="select a car"
              className={`${styles.textFont} mx-1 text-center`}
              onChange={(e) => updateCarId(e.target.value)}
              data-testid="cardid-select"
            >
              <option className={styles.textFont}>Select a Car</option>
              {
                cars.map((car) => (
                  <option key={car.id} value={car.id} className={styles.textFont}>
                    {car.model}
                  </option>
                ))
              }
            </Form.Select>
    
            <Form.Select
              bsPrefix={styles.selection}
              value={reservationData.city_id}
              aria-label="Select a city"
              className={`${styles.textFont} mx-1 text-center`}
              onChange={(e) => updateCityId(e.target.value)}
              data-testid="citydid-select"
            >
              <option>Select a City</option>
              {
                cities.map((city) => (
                  <option key={city.id} value={city.id} className={styles.textFont}>
                    {city.name}
                  </option>
                ))
              }
            </Form.Select>
    
            <Form.Control bsPrefix={styles.selection} className={`${styles.date} mx-1 px-4 text-center`} type="date" value={reservationData.date} onChange={(e) => updateDate(e.target.value)} />
    
            <Button bsPrefix={styles.button} className={`${styles.textFont}px-3`} type="submit">
              Submit
            </Button>
          </Form>
        </div>
        :
        <Loading status={true}/>
      }
    </div>
  );
};

export default ReservationForm;
