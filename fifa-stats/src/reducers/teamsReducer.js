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
  ADD_PLAYER_START,
  ADD_PLAYER_SUCCESS,
  ADD_PLAYER_FAILURE,
  DELETE_PLAYER_START,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_FAILURE,
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
        gettingTeams:false,
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
        teamList: [...state.teamList, action.payload.id]
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
       teamList: action.payload
     }
    case DELETE_CUSTOM_TEAM_FAILURE:
     return {
       ...state,
       deletingTeam: false,
       error: action.payload
     }
    case ADD_PLAYER_START: 
      return {
        ...state,
        addingPlayer: true,
      }
    case ADD_PLAYER_SUCCESS:
      return {
        ...state,
        addingPlayer: false,
        teamList: action.payload
      }
    case ADD_PLAYER_FAILURE:
      return {
        ...state,
        addingPlayer: false,
        error: action.payload
      }
    case DELETE_PLAYER_START:
      return {
        ...state,
        deletingPlayer: true,
      }
    case DELETE_PLAYER_SUCCESS:
      return {
        ...state,
        deletingPlayer: false,
        teamList: action.payload,
      }
    case DELETE_PLAYER_FAILURE:
      return {
        ...state,
        deletingPlayer: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default teamsReducer;