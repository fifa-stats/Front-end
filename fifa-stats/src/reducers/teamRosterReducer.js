import {
  GET_TEAMS_START,
  GET_TEAMS_SUCCESS,
  GET_TEAMS_FAILURE,
} from '../actions/statsaction';

const initialState = {
  error: null,
  gettingRoster: false,
  teamRoster: [],
}

const teamRosterReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TEAMS_START: 
      return {
        ...state,
        gettingRoster: true,
      };
    case GET_TEAMS_SUCCESS:
      return {
        ...state,
        gettingRoster: false,
        teamRoster: action.payload
      };
    case GET_TEAMS_FAILURE:
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