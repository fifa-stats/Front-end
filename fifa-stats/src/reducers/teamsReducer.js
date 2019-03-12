import {
  GET_TEAMS_START,
  GET_TEAMS_SUCCESS,
  GET_TEAMS_FAILURE,
} from '../actions/statsaction';

import { initialState } from './index';

export default teamsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TEAMS_START: 
      return {
        ...state,
        gettingStats: true,
      };
    case GET_TEAMS_SUCCESS:
      return {
        ...state,
        gettingStats:false,
        teamList: action.payload
      };
    case GET_TEAMS_FAILURE:
      return {
        ...state,
        gettingStats: false,
        err: action.payload
      };
    default:
      return state;
  }
};