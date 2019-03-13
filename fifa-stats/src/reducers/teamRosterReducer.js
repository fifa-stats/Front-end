import {
  GET_TEAM_ROSTER_START,
  GET_TEAM_ROSTER_SUCCESS,
  GET_TEAM_ROSTER_FAILURE,
} from '../actions/statsaction';

const initialState = {
  error: null,
  gettingRoster: false,
  teamRoster: [],
}

const teamRosterReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TEAM_ROSTER_START: 
      return {
        ...state,
        gettingRoster: true,
      };
    case GET_TEAM_ROSTER_SUCCESS:
      return {
        ...state,
        gettingRoster: false,
        teamRoster: action.payload
      };
    case GET_TEAM_ROSTER_FAILURE:
      return {
        ...state,
        gettingRoster: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default teamRosterReducer;