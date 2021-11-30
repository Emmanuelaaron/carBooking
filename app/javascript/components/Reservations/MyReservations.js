import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCarsNCities } from '../../Redux/Reservation/Reservation';
import styles from './Reservations.module.css';
import Loading from '../Loading';

function MyReservations() {
  const { cars, cities, myReservations } = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const loadCarsNCities = bindActionCreators(fetchCarsNCities, dispatch);

  useEffect(() => {
    loadCarsNCities();
  }, []);

  return (
    (myReservations && cars && cities) ?
    <div className={styles.container}>
        <h2 className={styles.title}>My Cars Reservations</h2>
        <ul className={styles.list}>
          { myReservations.map((reservation) => {
            const car = cars.find((car) => car.id === reservation.car_id);
            const city = cities.find((city) => city.id === reservation.city_id);
            const { date } = reservation;
            return (
              <li key={reservation.id} className={styles.rows}>
                <div className={styles.imageContainer}>
                  <img className={styles.carImg} src={car.imageData} alt={car.name} />
                  <p className={styles.carName}>
                    {car.name}
                    :
                    {' '}
                    {car.model}
                  </p>
                </div>
                <div className={styles.infoContainer}>
                  <p className={styles.header}>Date of reservation</p>
                  <p className={styles.info}>{date}</p>
                  <p className={styles.header}>City of reservation</p>
                  <p className={styles.info}>{city.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className={styles.subtitle}>This is a list of all the cars you have reserve</p>
      </div>
      :
      <Loading />
  );
}

export default MyReservations;
