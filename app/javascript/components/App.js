import React from 'react';
import { Provider } from 'react-redux';
import Store from '../Redux/ConfigureStore';
import Session from './Session';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Style.css';

const App = () => (
  <Provider store={Store} className="m-0 p-0">
    <Session />
  </Provider>
);

export default App;
