import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './SignUp';

const Session = () => {
  const currentSession = useSelector((state) => state.session);
  const [logNsign, setlogNsign] = useState(true);

  let ans = (
    <>
      {
        logNsign ?
          <SignUp />
        :
          <p></p>
      }
      <button>
        { logNsign ? "Sign In" : "Log In" }
      </button>
    </>
  );

  if (currentSession.session) {
    ans = (
      <Router>
          <Routes>
            <Route exact path="/" element={ <p>Home Page!!</p> } />
          </Routes>
        </Router>
    );
  }

  return ans;
}

export default Session;
