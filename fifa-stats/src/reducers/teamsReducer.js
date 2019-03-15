import {
  GET_TEAMS_START,
  GET_TEAMS_SUCCESS,
  GET_TEAMS_FAILURE,
} from '../actions/statsaction';
import {
  COPY_TEAM_START,
  COPY_TEAM_SUCCESS,
  COPY_TEAM_FAILURE,
  CREATE_CUSTOM_TEAM_START,
  CREATE_CUSTOM_TEAM_SUCCESS,
  CREATE_CUSTOM_TEAM_FAILURE,
  DELETE_CUSTOM_TEAM_START,
  DELETE_CUSTOM_TEAM_SUCCESS,
  DELETE_CUSTOM_TEAM_FAILURE,
} from '../actions/customactions';

const initialState = {
  error: null,
  gettingTeams: false,
  copyingTeam: false,
  creatingTeam: false,
  deletingTeam: false,
  addingPlayer: false,
  deletingPlayer: false,
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
        gettingTeams: false,
        teamList: action.payload
      };
    case GET_TEAMS_FAILURE:
      return {
        ...state,
        gettingTeams: false,
        error: action.payload
      };
    case COPY_TEAM_START:
      return {
        ...state,
        copyingTeam: true
      };
    case COPY_TEAM_SUCCESS:
      return {
        ...state,
        copyingTeam: false,
        teamList: [...state.teamList, action.payload]
      };
    case COPY_TEAM_FAILURE:
      return {
        ...state,
        copyingTeam: false,
        error: action.payload
      };
    case CREATE_CUSTOM_TEAM_START: 
      return {
        ...state,
        createTeam: true,
      };
    case CREATE_CUSTOM_TEAM_SUCCESS:
      return {
        ...state,
        createTeam:false,
        teamList: [...state.teamList, action.payload]
      };
    case CREATE_CUSTOM_TEAM_FAILURE:
      return {
        ...state,
        createTeam: false,
        error: action.payload
      };
    case DELETE_CUSTOM_TEAM_START:
     return {
       ...state,
       deletingTeam: true,
     }
    case DELETE_CUSTOM_TEAM_SUCCESS:
     return {
       ...state,
       deletingTeam: false,
     }
    case DELETE_CUSTOM_TEAM_FAILURE:
     return {
       ...state,
       deletingTeam: false,
       error: action.payload
     }
    default:
      return state;
  }
};

export default teamsReducer;