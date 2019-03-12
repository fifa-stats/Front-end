//import axios 
import axios from 'axios';

//store api url into a const



const url = 'https://fifa19.herokuapp.com/api'
//https://fifa19.herokuapp.com/api/users/signup


//SIGNup literals and actions

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const  signup = creds => dispatch => {
    dispatch({type: SIGNUP_START});
        return axios
                .post(`${url}/users/signup`, creds)
                .then(res => {
                    console.log(res.data);
                    //storage set item token
                    localStorage.setItem('token', res.data.payload)
                    dispatch({type: SIGNUP_SUCCESS, payload: res.data.payload})
                    //getStats(dispatch)
                })
                .catch(err => {
                    console.log(err.response.data)
                })
}

//Login literals and actions

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
//export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const  login = creds => dispatch => {
    dispatch({type: LOGIN_START});
        return axios
                .post(`${url}/users/login`, creds)
                .then(res => {
                    console.log(res);
                    //storage set item token
                    localStorage.setItem('token', res.data.payload);
                    dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
                    //getStats(dispatch)
                })
                .catch(err => {
                    console.log(err.response.data)  
                })
}
