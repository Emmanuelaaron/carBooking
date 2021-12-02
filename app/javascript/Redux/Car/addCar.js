const CAR_NOT_ADDED = 'CARS/CAR_NOT_ADDED';
const CAR_ADDED = 'CARS/CAR_ADDED';

const addCar = (form) => async () => {
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch('http://127.0.0.1:3000/api/v1/new-car', {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: form,
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 201) {
        //dispatch({ type: CAR_ADDED });
      }
    }).catch((error) => {
      if (error.code === 417) {
        //dispatch({ type: CAR_NOT_ADDED });
      }
    });
};
export default addCar;
