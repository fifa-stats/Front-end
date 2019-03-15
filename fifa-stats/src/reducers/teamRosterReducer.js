import {
  GET_CUSTOM_TEAM_ROSTER_START,
  GET_CUSTOM_TEAM_ROSTER_SUCCESS,
  GET_CUSTOM_TEAM_ROSTER_FAILURE,
  GET_TEAM_ROSTER_START,
  GET_TEAM_ROSTER_SUCCESS,
  GET_TEAM_ROSTER_FAILURE,
} from '../actions/statsaction';
import {
  ADD_PLAYER_START,
  ADD_PLAYER_SUCCESS,
  ADD_PLAYER_FAILURE,
  DELETE_PLAYER_START,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_FAILURE,
} from '../actions/customactions';

const initialState = {
  error: null,
  gettingRoster: false,
  teamRoster: [],
}

const teamRosterReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLAYER_START: 
      return {
        ...state,
        addingPlayer: true,
      }
    case ADD_PLAYER_SUCCESS:
      return {
        ...state,
        addingPlayer: false
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
      }
    case DELETE_PLAYER_FAILURE:
      return {
        ...state,
        deletingPlayer: false,
        error: action.payload
      }
    case GET_CUSTOM_TEAM_ROSTER_START:
      return {
        ...state,
        gettingRoster: true,
      };
    case GET_CUSTOM_TEAM_ROSTER_SUCCESS:
      return {
        ...state,
        gettingRoster: false,
        teamRoster: action.payload
      };
    case GET_CUSTOM_TEAM_ROSTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingRoster: false
      };
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