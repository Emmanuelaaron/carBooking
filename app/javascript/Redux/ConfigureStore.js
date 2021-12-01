import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import sessionReducer from './Session/Session';
import carsReducer from './Home/Cars';
import reservationReducer from './Reservation/Reservation';

const reducer = combineReducers({
  session: sessionReducer,
  cars: carsReducer,
  reservations: reservationReducer,
});
const middleWare = applyMiddleware(thunkMiddleware);

const Store = createStore(reducer, middleWare);

export default Store;
