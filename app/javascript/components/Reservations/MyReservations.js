import React, { useEffect } from 'react';
import styles from './Reservations.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCarsNCities } from '../../Redux/Reservation/Reservation';
import CircularProgress from "react-cssfx-loading/lib/CircularProgress";

function MyReservations() {
  const { cars, cities, myReservations } = useSelector((state) => state.reservations)
  const dispatch = useDispatch();
  const loadCarsNCities = bindActionCreators(fetchCarsNCities, dispatch);

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

  if ( myReservations && cars && cities ) {
    result =
      <div className={styles.container}>
        <h2 className={styles.title}>My Cars Reservations</h2>
        <ul className={styles.list}>
          { myReservations.map(reservation => {
            const car = cars.find((car) => car.id === reservation.car_id);
            const city = cities.find((city) => city.id === reservation.city_id);
            const date = reservation.date;
            return (
              <li key={reservation.id} className={styles.rows}>
                <div className={styles.imageContainer}>
                  <img className={styles.carImg} src={car.image_data}/>
                  <p className={styles.carName}>{car.name}: {car.model}</p>
                </div>
                <div className={styles.infoContainer}>
                    <p className={styles.header}>Date of reservation</p>
                    <p className={styles.info}>{date}</p>
                    <p className={styles.header}>City of reservation</p>
                    <p className={styles.info}>{city.name}</p>
                </div>
              </li>
              )
            }
          )}
        </ul>
        <p className={styles.subtitle}>This is a list of all the cars you have reserve</p>
      </div>
  }

  return result;
}

export default MyReservations;
