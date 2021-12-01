const CREATE_RESERVATION = 'CARS/RESERVATION/CREATE';
const DELETE_RESERVATION = 'CARS/RESERVATION/DELETE';
const FETCH_CARS_N_CITIES = 'CARS/RESERVATION/FETCH_CARS_CITIES';

const initialState = {};

export const saveData = (payload) => ({
  type: FETCH_CARS_N_CITIES,
  payload,
});

export const deleteData = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

export const fetchCarsNCities = () => async (dispatch) => {
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch('http://127.0.0.1:3000/api/v1/cars-and-cities', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 200) {
        dispatch(saveData(data));
      }
    });
};

export const createReservation = (formData, setMessage) => async () => {
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch('http://127.0.0.1:3000/api/v1/reservations/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 201) {
        setMessage('Reservation created');
      }
    });
};

export const deleteReservation = (id) => async () => {
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch(`http://127.0.0.1:3000/api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 202) {
        dispatch(deleteData(id));
      }
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_N_CITIES:
      return {
        cars: action.payload.cars,
        cities: action.payload.cities,
        myReservations: action.payload.myReservations,
      };
    case CREATE_RESERVATION:
      return state;
    case DELETE_RESERVATION:
      return {
        cars: state.cars,
        cities: state.cities,
        myReservations: [
          ...state.myReservations.filter((reservation) => (reservation.id !== action.payload))
        ]
      };
    default:
      return state;
  }
};

export default reducer;
