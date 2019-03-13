import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    } from  '../actions/loginactions';
import {
    GET_TEAMS_START,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_FAILURE,
    } from '../actions/statsaction';


    const initialState = {
        user: [],
        playerList: [],
        signUp: false,
        userExist: false,
        loggingIn: false,
        loggedIn: false,
        gettingStats: false,
        err: null,
        token: localStorage.getItem('token')
    };
    
    
    
    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case SIGNUP_START:
            return {
                ...state,
                signUp: true,
            }
            case SIGNUP_SUCCESS: 
            return {
                ...state,
                signUp: false,
                userExist: true,
                token: action.payload
            }
            case LOGIN_START:
                return {
                    ...state,
                    loggingIn: true,
                }
            case LOGIN_SUCCESS: 
                return {
                    ...state,
                    loggingIn: false,
                    loggedIn: true,
                    token: action.payload
                }
            case GET_TEAMS_START: 
                return {
                    ...state,
                    gettingStats: true,
                }
            case GET_TEAMS_SUCCESS:
                return {
                    ...state,
                    gettingStats:false,
                    playList: action.payload
                }
            case GET_TEAMS_FAILURE:
                return {
                    ...state,
                    gettingStats: false,
                    err: action.payload
                }
            default:
                return state;
        }
    }
    export default reducer;