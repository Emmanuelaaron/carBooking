import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';

const Session = () => {
  const currentSession = useSelector((state) => state.session);
  const [logNsign, setlogNsign] = useState(true);

  const buttonActionHandle = () => {
    setlogNsign(!logNsign);
  };

  let ans = (
    <>
      {
        logNsign
          ? <Login />
          : <SignUp />
      }
      <button type="button" onClick={buttonActionHandle}>
        { logNsign ? 'Sign Up' : 'Log In' }
      </button>
    </>
  );

  if (currentSession.session) {
    ans = (
      <Router>
        <Routes>
          <Route exact path="/" element={<p>Home Page!!</p>} />
        </Routes>
      </Router>
    );
  }

  return ans;
};

export default Session;
