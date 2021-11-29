import React, { useEffect } from 'react';
import styles from './Reservations.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCarsNCities } from '../../Redux/Reservation/Reservation';
import CircularProgress from "react-cssfx-loading/lib/CircularProgress";

function Reservations() {
  const { cars, cities, myReservations } = useSelector((state) => state.reservations)
  const dispatch = useDispatch();
  const loadCarsNCities = bindActionCreators(fetchCarsNCities, dispatch);

  useEffect(() => {
    loadCarsNCities();
  }, []);

  console.log("Cars", cars);
  console.log("Cities", cities);
  console.log("myReservations", myReservations);

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

  if ( myReservations && cars && cities ) {
    result =
      <div className={styles.container}>
        <h2 className={styles.title}>My Cars Reservations</h2>

        <table>
          <caption className={styles.subtitle}>This is a list of all the cars you have reserve</caption>
          <thead>
            <tr>
              <th>Car Model</th>
              <th>Date of Reservation</th>
              <th>City of Reservation</th>
            </tr>
          </thead>
          <tbody>
            {
              myReservations.map(reservation => {
                const car = cars.find((car) => car.id === reservation.car_id);
                const city = cities.find((city) => city.id === reservation.city_id);
                const date = reservation.date;
                return (
                  <tr key={reservation.id}>
                    <th>{car.model}</th>
                    <th>{date}</th>
                    <th>{city.name}</th>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
  }

  return result;
}

export default Reservations;
