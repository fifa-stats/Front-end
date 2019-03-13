import {
  GET_PLAYER_DATA_START,
  GET_PLAYER_DATA_SUCCESS,
  GET_PLAYER_DATA_FAILURE,
} from '../actions/statsaction';

const initialState = {
  error: null,
  gettingPlayerData: false,
  playerData: []
};

const playerDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PLAYER_DATA_START: 
      return {
        ...state,
        gettingPlayerData: true,
      };
    case GET_PLAYER_DATA_SUCCESS:
      return {
        ...state,
        gettingPlayerData:false,
        playerData: action.payload
      };
    case GET_PLAYER_DATA_FAILURE:
      return {
        ...state,
        gettingPlayerData: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default playerDataReducer;