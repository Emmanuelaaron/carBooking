import React from "react";
import { Provider } from 'react-redux';
import Store from "../Redux/ConfigureStore";
import Session from "./Session";

class App extends React.Component {
  render () {
    return (
      <Provider store={Store}>
        <Session />
      </Provider>
    );
  }
}

export default App
