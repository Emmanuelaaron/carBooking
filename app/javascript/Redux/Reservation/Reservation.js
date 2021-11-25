const CREATE_RESERVATION = 'CARS/RESERVATION/CREATE';
const FETCH_CARS_N_CITIES = 'CARS/RESERVATION/FETCH_CARS_CITIES';

const initialState = {};

export const saveData = (payload) => ({
  type: FETCH_CARS_N_CITIES,
  payload,
});

export const fetchCarsNCities = () => async (dispatch) => {
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch('http://127.0.0.1:3000/api/v1/carsNcities', {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: token
    },
  }).then((response) => response.json())
  .then((data) => {
    if (data.code === 200){
      dispatch(saveData(data));
    }
  })
};

export const createReservation = (formData) => async (dispatch) => {
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch('http://127.0.0.1:3000/api/v1/reservations/new', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_N_CITIES:
      return {
        cars: action.payload.cars,
        cities: action.payload.cities
      };
    case CREATE_RESERVATION:
      return state;
    default:
      return state;
  }
};

export default reducer;