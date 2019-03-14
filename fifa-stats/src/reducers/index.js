import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import playerDataReducer from './playerDataReducer';
import teamsReducer from './teamsReducer';
import teamRosterReducer from './teamRosterReducer';

export default combineReducers({
    loginReducer,
    playerDataReducer,
    teamsReducer,
    teamRosterReducer
});