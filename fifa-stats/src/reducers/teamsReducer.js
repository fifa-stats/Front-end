import {
  GET_TEAMS_START,
  GET_TEAMS_SUCCESS,
  GET_TEAMS_FAILURE,
} from '../actions/statsaction';

const initialState = {
  error: null,
  gettingTeams: false,
  teamList: []
};

const teamsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TEAMS_START: 
      return {
        ...state,
        gettingTeams: true,
      };
    case GET_TEAMS_SUCCESS:
      return {
        ...state,
        gettingTeams:false,
        teamList: action.payload
      };
    case GET_TEAMS_FAILURE:
      return {
        ...state,
        gettingTeams: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default teamsReducer;