const LOAD_CARS = 'CARS/HOME/LOAD_CARS';

let initialState = [];

export const saveCars = (payload) => ({
  type: LOAD_CARS,
  payload,
});

export const fetchCars = () => async (dispatch) => {

  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch('http://localhost:3000/api/v1/home', {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: token
    },
  }).then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data.code === 1){
      dispatch(saveCars(data.cars));
    }
  }).catch((error) => {
    console.log(error);
  });
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
