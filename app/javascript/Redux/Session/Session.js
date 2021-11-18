const LOGIN_USER = 'CARS/SESSION/LOGIN_USER';

const savedSession = JSON.parse(sessionStorage.getItem('CarBooking'));
let initialState = { token: '', session: false, level: 0 };
if (savedSession) {
  initialState = { token: savedSession.token, session: true, level: savedSession.level };
}

export const newSession = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const fetchCreateUser = (username) => async (dispatch) => {
  const res = await fetch('http://127.0.0.1:3000/api/v1/newuser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
    }),
    redirect: 'follow',
  });
  const data = await res.json();
  dispatch(newSession(data));
};

const saveSessionLocally = (data) => {
  sessionStorage.setItem('CarBooking', JSON.stringify({ totken: data.token, level: data.level }));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      saveSessionLocally(action.payload);
      return {
        token: action.payload.token,
        session: true,
        level: action.payload.level,
      };
    default:
      return state;
  }
};

export default reducer;
