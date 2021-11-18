import React from 'react';
import { Provider } from 'react-redux';
import Store from '../Redux/ConfigureStore';
import Session from './Session';

const App = () => (
  <Provider store={Store}>
    <Session />
  </Provider>
);

export default App;
