const ADD_CAR = 'CARS/ADD_CAR'
const CAR_ADDED = 'CARS/CAR_ADDED'


export const addCar = (form, addNotification) => async (dispatch) => {
  console.log('fetchj');
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch('http://127.0.0.1:3000/api/v1/newcar', {
    method: 'POST',
    headers: {
        Authorization: token
    },
    body: form,
  }).then((response) => response.json())
  .then((data) => {
    if(data.code === 201){
      addNotification('Car addded succesfully!');
    } else {
      addNotification('UInable to add car!');
    }
  }).catch((error) => {
    console.log(error);
  })
}
