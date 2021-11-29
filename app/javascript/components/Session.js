import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Navbar from './Navbar';
import ReservationForm from './reservationForm/ReservationForm';
import HomePage from './Home/HomePage';
import AddCar from './AddCar';
import NotificationContainer from './notifications/NotificationsContainer';

const Session = () => {
  const { session } = useSelector((state) => state);
  const [logNsign, setlogNsign] = useState(true);
  const [ notifications, setNotifications ] = useState([]);

  const addNotification = (message) => {
    setNotifications([...notifications, { id:notifications.length, message }]);
  }

  const closeNotification = (id) => {
    setNotifications([...notifications.filter((notification) => notification.id !== id)]);
  };

  const buttonActionHandle = () => {
    setlogNsign(!logNsign);
  };

  let ans = (
    <div className="bg-session m-0 position-relative p-0 border">
      <div className="position-absolute top-50 start-50 translate-middle session-container">
        <div
          className="p-2 bg-dark-transparent text-white rounded-3 d-flex flex-column align-items-center"
        >
          {
            logNsign
              ? <Login addNotification={addNotification} />
              : <SignUp addNotification={addNotification}/>
          }
          <button className="link-info bg-transparent border-0" type="button" onClick={buttonActionHandle}>
            { logNsign ? 'Sign Up' : 'Log In' }
          </button>
        </div>
      </div>
    </div>
  );

  if (session.active) {
    ans = (
      <Router>
        <div className="cotainer-fluid m-0 p-0 d-flex flex-column flex-md-row">
          <Navbar/>
          <Routes >
            <Route path="/reservation/:id" element={< ReservationForm />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="/reservations" element={<p>Reservations!!</p>} />
            <Route path="/newcar" element={<AddCar />} />
            <Route path="/deletecar" element={<p>Delete Car!!</p>} />
          </Routes>
          <NotificationContainer notifications={notifications} closeNotification={closeNotification} />
        </div>
      </Router>
    );
  }

  return ans;
};

export default Session;
