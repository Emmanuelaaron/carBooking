/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import store from '../Redux/ConfigureStore';
import carsMock from './mocks/casrMocks';
import { saveCars } from '../Redux/Home/Cars';
import HomePage from '../components/Home/HomePage';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      {component}
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
});