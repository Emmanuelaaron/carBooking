import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Navbar from './Navbar';
import ReservationForm from './reservationForm/ReservationForm';
import HomePage from './Home/HomePage';
import AddCar from './AddCar';
import MyReservations from './Reservations/MyReservations';
import DeleteCars from './Cars/deleteCar';

const Session = () => {
  const currentSession = useSelector((state) => state.session);
  const [logNsign, setlogNsign] = useState(true);

  const buttonActionHandle = () => {
    setlogNsign(!logNsign);
  };

  return (
    (currentSession.session ) ?
    <Router>
        <div className="m-0 p-0 d-flex flex-column flex-md-row page-container">
          <Navbar />
          <Routes>
            <Route path="/reservation/:id" element={<ReservationForm />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="/reservations" element={<MyReservations />} />
            <Route path="/newcar" element={<AddCar />} />
            <Route path="/deletecar" element={<DeleteCars />} />
          </Routes>
        </div>
      </Router>
      :
      <div className="bg-session m-0 position-relative p-0 page-container border-red">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div
            className="p-2 bg-dark-transparent text-white rounded-3 d-flex flex-column align-items-center"
          >
            {
              logNsign
                ? <Login />
                : <SignUp />
            }
            <button className="text-white bg-transparent border-0" type="button" onClick={buttonActionHandle}>
              { logNsign ? 'Sign Up' : 'Log In' }
            </button>
          </div>
        </div>
      </div>
  );
};

export default Session;
