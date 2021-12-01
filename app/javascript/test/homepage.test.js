/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import store from '../Redux/ConfigureStore';
import carsMock from './mocks/casrMocks';
import { saveCars } from '../Redux/Home/Cars';
import Session from '../components/Session'
import HomePage from '../components/Home/HomePage';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <Router>
        {component}
      </Router>
    </Provider>,
  ),
});

describe('home Page', () => {
  beforeEach(() => {
    store.dispatch(saveCars(carsMock()));
    sessionStorage.setItem('CarBooking', JSON.stringify({ token: '', session: true, level: 0 }));
  });

  test('Store must have the cars loaded', () => {
    const { cars } = store.getState();
    expect(cars.length).toBe(7);
  });

  test('home page must show all the cars', () => {
    const { getByTestId  } = renderWithRedux(<HomePage />);
    expect(getByTestId('car-container').childNodes.length).toBe(7);
  });

  test('cars must have image url, model, name and description', () => {
    const { getByTestId  } = renderWithRedux(<HomePage />);
    expect(getByTestId('car-container').childNodes[0].childNodes[0].childNodes[0].childNodes[0].src).toBe('https://res.cloudinary.com/jaar/image/upload/v1/test_app/466ff30ffa1c6d96e380e4cc1fa576fe.jpg');
    expect(getByTestId('car-container').childNodes[0].childNodes[1].textContent).toBe('GT500');
    expect(getByTestId('car-container').childNodes[0].childNodes[2].textContent).toBe('Shelby');
    expect(getByTestId('car-container').childNodes[0].childNodes[3].textContent).toBe('1971 card, perfect conditions');
  });

  test('clicking on each car image must show the car information and a button to reserve then', () => {
    const { getByText, getByTestId } = renderWithRedux(<HomePage />);
    fireEvent.click(getByTestId('car-container').childNodes[0].childNodes[0].childNodes[0]);
    expect(getByText('Reserve It') !== null).toBe(true);
  });
});