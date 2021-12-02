import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCarsNCities, deleteReservation } from '../../Redux/Reservation/Reservation';
import styles from './Reservations.module.css';
import Loading from '../Loading';

function MyReservations() {
  const { cars, cities, myReservations } = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const loadCarsNCities = bindActionCreators(fetchCarsNCities, dispatch);
  const removeReservation = bindActionCreators(deleteReservation, dispatch)

  useEffect(() => {
    loadCarsNCities();
  }, []);

  const handleClick = (id) => {
    removeReservation(id)
  }

  return (
    <div className="container-fluid p-0 position-relative">
    {
      (myReservations && cars && cities) ?
      <div className={styles.container + ' bg-white'}>
        <h2 className={styles.title}>My Cars Reservations</h2>
        <ul className={styles.list} data-testid="reservations-container">
          { 
            myReservations.length > 0 ?
            myReservations.map((reservation) => {
              const car = cars.find((car) => car.id === reservation.car_id);
              const city = cities.find((city) => city.id === reservation.city_id);
              const { date } = reservation;
              return (
                <li key={reservation.id} className={styles.card}>
                  <div className={styles.lefftInfo}>
                    <p className={styles.carName}>{car.name}</p>
                    <p className={styles.carModel}>{car.model.toUpperCase()}</p>
                    <p className={styles.city}>{city.name}</p>                  
                  </div>
                  <div className={styles.imageContainer}>
                    <img className={styles.carImg} src={car.imageData} alt={car.name} />
                  </div>
                  <div className={styles.rightInfo}>
                    <p className={styles.carDescription}>{car.description.toUpperCase()}</p>
                    <p className={styles.date}>{date}</p>
                    <button type="button" className={styles.button} onClick={() => handleClick(reservation.id)}>DELETE RESERVATION</button>
                  </div>
                </li>
              );
            })
            :
              <li className={styles.card}>
                <p className={styles.noReservation}>No</p>
                <p className={styles.noReservation}>Reservations</p>
                <p className={styles.noReservation}>Found</p>
              </li>
          }
        </ul>
        <p className={styles.subtitle}>This is a list of all the cars you have reserve</p>
      </div>
      :
      <Loading status={true} />
    }
    </div>
  );
}

export default MyReservations;
