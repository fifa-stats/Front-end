import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import playerDataReducer from './playerDataReducer';
import teamsReducer from './teamsReducer';
import teamRosterReducer from './teamRosterReducer';


export const initialState = {
    signUp: false,
    loggingIn: false,
    loggedIn: false,
    gettingStats: false,
    gettingPlayerStats: false,
    err: null,
    playerData: {},
    teamRoster: [],
    token: localStorage.getItem('token')
};

export default combineReducers({
    loginReducer,
    playerDataReducer,
    teamsReducer,
    teamRosterReducer
});