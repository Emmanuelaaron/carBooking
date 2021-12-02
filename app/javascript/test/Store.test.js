import React from 'react';
import store from '../Redux/ConfigureStore';
import carsMock from './mocks/casrMocks';
import { saveCars } from '../Redux/Home/Cars';
require('jest-fetch-mock').enableMocks();

describe('Store', () => {
  beforeEach(() => {
    store.dispatch(saveCars(carsMock()));
    sessionStorage.setItem('CarBooking', JSON.stringify({ token: '', session: true, level: 0 }));
  });

  test('Store must have the cars loaded', () => {
    const { cars } = store.getState();
    expect(cars.length).toBe(7);
  });
});