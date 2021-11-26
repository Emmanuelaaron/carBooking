import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './reservationForm.module.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { fetchCarsNCities, createReservation } from '../../Redux/Reservation/Reservation'
import CircularProgress from "react-cssfx-loading/lib/CircularProgress";

const ReservationForm = () =>{ 
  const { cars, cities } = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const loadCarsNCities = bindActionCreators(fetchCarsNCities, dispatch);
  const sendFormData = bindActionCreators(createReservation, dispatch);
  const [message, setMessage] = useState(null);

  const [reservationData, setReservationData]  = useState({
    date: new Date().toISOString().slice(0, 10),
    car_id: "",
    city_id: "",
  });

  console.log(reservationData)
  
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
    <div className={styles.container + " d-flex flex-column justify-content-center align-items-center"} id="reservationForm-container">
      { message != null &&
        <Alert variant="success" className="text-center">
          <Alert.Heading>{message}</Alert.Heading>
          <p>Your car was successfully reserved.</p>
        </Alert>
      }
      <h1 className="w-75 text-center mt-5 text-white fs-3 border-bottom border-white pb-2">RESERVE A CAR WITH JDE MOTORS</h1>
      <p className= {styles.textFont + " text-center text-white mb-3 mt-2"}>
        Rent with confidence with JDE MOTORS. Find your city's closest reservation location and hit the road! We provide service for over {cities.length} cities. No hidden fees.
      </p>
      <Form className= "mx-auto my-2 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <div className="my-3">
          <Form.Select bsPrefix={styles.selection} aria-label="select a car" className={styles.textFont + " mx-1 text-center"}  onChange={(e) => updateCarId(e.target.value)}>
            <option className={styles.textFont}>Select a Car</option>
            {
              cars.map(car => (
                <option key={car.id} value={car.id} className={styles.textFont}>
                  {car.model}
                </option>
              ))
            }
          </Form.Select>

          <Form.Select bsPrefix={styles.selection} aria-label="Select a city" className={styles.textFont + " mx-1 text-center"} onChange={(e) => updateCityId(e.target.value)}>
            <option>Select a City</option>
            {
              cities.map(city => (
                <option key={city.id} value={city.id} className={styles.textFont}>
                  {city.name}
                </option>
              ))
            }
          </Form.Select>

          <Form.Control bsPrefix={styles.selection} className=" mx-1 px-4 text-center" type="date" value={reservationData.date} onChange={(e) => updateDate(e.target.value)} />

        <Button bsPrefix={styles.button} className={styles.textFont + "px-3"} type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>;
  }
  return result;
}

export default ReservationForm;