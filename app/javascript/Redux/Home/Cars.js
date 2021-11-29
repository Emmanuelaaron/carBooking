const LOAD_CARS = 'CARS/HOME/LOAD_CARS';
const DELETE_CAR = 'CARS/DELETE_CAR';

const initialState = [];

export const saveCars = (payload) => ({
  type: LOAD_CARS,
  payload,
});

export const deleteCar = (id) => ({
  type: DELETE_CAR,
  id,
});

export const fetchCars = () => async (dispatch) => {
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch('http://localhost:3000/api/v1/home', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.code === 200) {
        dispatch(saveCars(data.cars));
      }
    }).catch((error) => {
      console.log(error);
    });
};

export const removeCar = (id) => async (dispatch) => {
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch(`http://localhost:3000/api/v1/cars/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 202) {
        dispatch(deleteCar(id));
      }
    });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARS:
      return action.payload;
    case DELETE_CAR:
      const newSstate = state.filter((car) => car.id !== action.id);
      return newSstate;
    default:
      return state;
  }
};

export default reducer;
