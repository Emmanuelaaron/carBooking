import React, { useState } from "react";
import styles from './reservationForm.module.css';
import { Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";

const ReservationForm = () =>{ 
  const [startDate, setStartDate] = useState(new Date());
  const cars = [
    {
      "name": "car-1",
      "model": "model-1",
      "description": "description-1",
      "price": "price-1"
    },
    {
      "name": "car-2",
      "model": "model-2",
      "description": "description-2",
      "price": "price-2"
    },
    {
      "name": "car-3",
      "model": "model-3",
      "description": "description-3",
      "price": "price-3"
    },
  ]
  const cities = ["Medellin", "Bogota", "Cali", "Cartagena"]


  return(
  <div className={styles.container} id="reservationForm-container">
    <h1 className="w-100 text-center mt-5">Reserve a Car</h1>

    <Form className="w-75 mx-auto my-5">
      <Form.Select aria-label="select a car" className="my-3">
        <option>Select a Car</option>
        {
          cars.map(car => (
            <option key={car.name+car.model} value={car.name}>
              {car.name}: {car.model}
            </option>
          ))
        }
      </Form.Select>

      <Form.Select aria-label="Select a city" className="my-3">
        <option>Select a City</option>
        {
          cities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))
        }
      </Form.Select>

      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="my-3" />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
)};

export default ReservationForm;