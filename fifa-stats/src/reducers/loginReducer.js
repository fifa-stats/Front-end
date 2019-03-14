import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
} from  '../actions/loginactions';

const initialState = {
  error: null,
  loggingIn: false,
  loggedIn: false,
  signUp: false,
  token: localStorage.getItem('token')
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP_START:
      return {
        ...state,
        signUp: true,
      };
    case SIGNUP_SUCCESS: 
      return {
        ...state,
        signUp: false,
        token: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        signUp: false,
      };
    case LOGIN_SUCCESS: 
      return {
        ...state,
        loggingIn: false,
        //loggedIn: true,
        token: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
