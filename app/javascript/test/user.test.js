/**
 * @jest-environment jsdom
 */

 require('jest-fetch-mock').enableMocks();
 import React from 'react';
 import { Provider } from 'react-redux';
 import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 import store from '../Redux/ConfigureStore';
 import carsMock from './mocks/casrMocks';
 import cityMock from './mocks/cityMocks';
 import reservationMock from './mocks/reservationMock';
 import { saveData } from '../Redux/Reservation/Reservation';
 import { saveCars } from '../Redux/Home/Cars';
 import Session from '../components/Session';
 import { newSession } from '../Redux/Session/Session';
 
 const renderWithRedux = (component) => ({
   ...render(
     <Provider store={store}>
       {component}
     </Provider>,
   ),
 });
  
 describe('Reservation Page', () => {
   beforeEach(() => {
     fetch.mockResponses(
       [
         JSON.stringify( { token: 'fdfdfdfdasdwe', code: 200, level:1 })
       ],
       [
         JSON.stringify( { code: 0 })
       ],
       [
         JSON.stringify( { code: 0 })
       ],
       [
         JSON.stringify( { code: 0 })
       ]
     );
     store.dispatch(saveData({
       cities: cityMock(),
       cars: carsMock(),
       myReservations: reservationMock()
     }));
     store.dispatch(saveCars(carsMock()));
     sessionStorage.setItem('CarBooking', JSON.stringify({ token: 'fdfdfdfdasdwe', session: false, level: 1 }));
   });
 
   test('user can log in', () => {
     renderWithRedux(<Session />);
     userEvent.type(screen.getByTestId('user-login-inp'), 'jaar');
     userEvent.click(screen.getByText('Login'));
     store.dispatch(newSession({ token: 'fdfdfdfdasdwe', session: true, level: 1 }));
     expect(screen.getByText('JDE MOTORS') !== null).toBe(true);
   });
 });