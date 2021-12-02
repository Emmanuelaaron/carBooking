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
import MyReservations from '../components/Reservations/MyReservations';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>,
  ),
});
 
describe('Reservation Page', () => {
  beforeEach(() => {
    fetchMock.mockOnce(JSON.stringify({code: 0}));
    store.dispatch(saveData({
      cities: cityMock(),
      cars: carsMock(),
      myReservations: reservationMock()
    }));
    sessionStorage.setItem('CarBooking', JSON.stringify({ token: '', session: true, level: 0 }));
  });

  test('Reservation page must show all the reservations', () => {
    const { getByTestId  } = renderWithRedux(<MyReservations />);
    expect(getByTestId('reservations-container').childNodes.length).toBe(8);
  });

  test('Reservation must have a car model, name and description', () => {
    const { getByTestId  } = renderWithRedux(<MyReservations />);
    expect(getByTestId('reservations-container').childNodes[0].childNodes[0].childNodes[0].textContent).toBe('ford');
    expect(getByTestId('reservations-container').childNodes[0].childNodes[0].childNodes[1].textContent).toBe('MUSTANG');
    expect(getByTestId('reservations-container').childNodes[0].childNodes[0].childNodes[2].textContent).toBe('NY');
    expect(getByTestId('reservations-container').childNodes[0].childNodes[1].childNodes[0].src).toBe('https://res.cloudinary.com/jaar/image/upload/v1/test_app/8c996139d385b0d4ad611380b9ba17cb.jpg');
    expect(getByTestId('reservations-container').childNodes[0].childNodes[2].childNodes[0].textContent).toBe('1974 CLASSIC GREY WITH A BLACK LINE OVER IT, RESTORED MOTOR .');
    expect(getByTestId('reservations-container').childNodes[0].childNodes[2].childNodes[1].textContent).toBe('2021-11-29');
  });
});