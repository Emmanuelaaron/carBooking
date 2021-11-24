import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './reservationForm.module.css';
import { Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { fetchCarsNCities } from '../../Redux/Reservation/Reservation'

const ReservationForm = () =>{ 
  const [startDate, setStartDate] = useState(new Date());
  
  const { cars, cities } = useSelector((state) => state.reservations);

  const dispatch = useDispatch();
  const loadCarsNCities = bindActionCreators(fetchCarsNCities, dispatch);

  useEffect(() => {
    loadCarsNCities();
  }, []);

  console.log(cars)
  console.log(cities)

  let result = (<p>LOADING...</p>)

  if (cars && cities) {
    result = 
    <div className={styles.container} id="reservationForm-container">
      <h1 className="w-100 text-center mt-5">Reserve a Car</h1>

      <Form className="w-75 mx-auto my-5">
        <Form.Select aria-label="select a car" className="my-3">
          <option>Select a Car</option>
          {
            cars.map(car => (
              <option key={car.id} value={car.id}>
                {car.name}: {car.model}
              </option>
            ))
          }
        </Form.Select>

        <Form.Select aria-label="Select a city" className="my-3">
          <option>Select a City</option>
          {
            cities.map(city => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))
          }
        </Form.Select>

        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="my-3" />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>;
  }
  return result;
}

export default ReservationForm;