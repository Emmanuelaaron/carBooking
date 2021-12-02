/**
 * @jest-environment jsdom
 */

require('jest-fetch-mock').enableMocks();
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import store from '../Redux/ConfigureStore';
import carsMock from './mocks/casrMocks';
import cityMock from './mocks/cityMocks';
import reservationMock from './mocks/reservationMock';
import { saveData } from '../Redux/Reservation/Reservation';
import { saveCars } from '../Redux/Home/Cars';
import HomePage from '../components/Home/HomePage';
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
        JSON.stringify( { code: 0 })
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
    store.dispatch(newSession({ token: 'fdfdfdfdasdwe', session: true, level: 1 }));
    sessionStorage.setItem('CarBooking', JSON.stringify({ token: 'fdfdfdfdasdwe', session: true, level: 1 }));
  });

  test('When clicking on the resrve now button on home page this will open the reservation form and have the car loaded', () => {
    const { getByText, getByTestId } = renderWithRedux(<Session />);
    fireEvent.click(getByTestId('car-container').childNodes[0].childNodes[0].childNodes[0]);
    fireEvent.click(getByText('Reserve It'));
    expect(getByTestId('cardid-select').value).toBe("24");
  });

  test('car drop down must containt all the cars added', () => {
    const { getByText, getByTestId } = renderWithRedux(<Session />);
    expect(getByTestId('cardid-select').childNodes.length).toBe(8);
  });

  test('city drop down must containt all the citites added', () => {
    const { getByText, getByTestId } = renderWithRedux(<Session />);
    expect(getByTestId('citydid-select').childNodes.length).toBe(8);
  });
});