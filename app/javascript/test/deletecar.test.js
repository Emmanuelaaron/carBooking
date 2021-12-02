/**
 * @jest-environment jsdom
 */

require('jest-fetch-mock').enableMocks();
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../Redux/ConfigureStore';
import carsMock from './mocks/casrMocks';
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

describe('Delete car page', () => {
  beforeEach(() => {
  fetchMock.mockOnce(JSON.stringify({code: 0}));
  store.dispatch(saveCars(carsMock()));
  store.dispatch(newSession({ token: 'fdfdfdfdasdwe', session: true, level: 1 }));
  sessionStorage.setItem('CarBooking', JSON.stringify({ token: 'fdfdfdfdasdwe', session: true, level: 1 }));
  });

  test('will display all the cars added', () => {
    renderWithRedux(<Session />);
    userEvent.click(screen.getByText('REMOVE CAR'));
    expect(screen.getByTestId('delete-car-container').childNodes.length).toBe(7);
  });
});