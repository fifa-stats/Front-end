import {
  GET_TEAMS_START,
  GET_TEAMS_SUCCESS,
  GET_TEAMS_FAILURE,
} from '../actions/statsaction';

import { initialState } from './index';

// hard-coding a player here until endpoint is ready
const initialRosterState = {
  ...initialState,
  teamRoster: [158023]
};

export default teamRosterReducer = (state = initialRosterState, action) => {
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
        teamRoster: action.payload
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