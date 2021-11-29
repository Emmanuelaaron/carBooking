const LOGIN_USER = 'CARS/SESSION/LOGIN_USER';
const LOGIN_OUT = 'CARS/SESSION/LOGIN_OUT';

const savedSession = JSON.parse(sessionStorage.getItem('CarBooking'));
let initialState = { token: '', active: false, level: 0 };
if (savedSession) {
  initialState = { token: savedSession.token, active: true, level: savedSession.level };
}

export const newSession = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const logOut = (payload) => ({
  type: LOGIN_OUT,
  payload,
});

export const fetchCreateUser = (username, addNotification) => async (dispatch) => {
  await fetch('http://127.0.0.1:3000/api/v1/newuser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
    }),
    redirect: 'follow',
  }).then((response) => response.json())
  .then((data) => {
    if (data.code === 200){
      addNotification('Looged succesfully, Welcome back ' + username + '!');
      dispatch(newSession(data));
    }
  }).catch((error) => {
    console.log(error);
  });
};

export const loginUser = (username, addNotification) => async (dispatch) => {
  await fetch('http://127.0.0.1:3000/api/v1/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
    }),
    redirect: 'follow',
  }).then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data.code === 200){
      addNotification('Loged succesfully, Welcome back ' + username + '!');
      dispatch(newSession(data));
    }
  }).catch((error) => {
    console.log(error);
  });
};

const saveSessionLocally = (data) => {
  sessionStorage.setItem('CarBooking', JSON.stringify({ token: data.token, level: data.level }));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      saveSessionLocally(action.payload);
      return {
        token: action.payload.token,
        active: true,
        level: action.payload.level,
      };
    case LOGIN_OUT:
      sessionStorage.removeItem('CarBooking');
      return { token: '', active: false, level: 0 };
    default:
      return state;
  }
};

export default reducer;
