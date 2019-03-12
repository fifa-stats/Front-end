import {
  GET_PLAYER_DATA_START,
  GET_PLAYER_DATA_SUCCESS,
  GET_PLAYER_DATA_FAILURE,
} from '../actions/statsaction';

import { initialState } from './index';

// hard-coding a player here until endpoint is ready
const initialPlayerState = {
  ...initialState,
  playerData: {
    row: 1,
    id: 158023,
    name: 'L. Messi',
    age: 31,
    photo: 'https://cdn.sofifa.org/players/4/19/158023.png',
    nationality: 'Argentina',
    flag: 'https://cdn.sofifa.org/flags/52.png',
    overall: 94,
    potential: 94,
    club: 'FC Barcelona',
    clubLogo: 'https://cdn.sofifa.org/teams/2/light/241.png',
    value: '€110.5M',
    wage: '€565K',
    special: 2202,
    preferredFoot: 'Left',
    internationalReputation: 5,
    weakFoot: 4,
    skillMoves:	4,
    workRate: 'Medium/ Medium',
  }
};

export default teamRosterReducer = (state = initialPlayerState, action) => {
  switch(action.type) {
    case GET_PLAYER_DATA_START: 
      return {
        ...state,
        gettingPlayerStats: true,
      };
    case GET_PLAYER_DATA_SUCCESS:
      return {
        ...state,
        gettingPlayerStats:false,
        playerData: action.payload
      };
    case GET_PLAYER_DATA_FAILURE:
      return {
        ...state,
        gettingStats: false,
        err: action.payload
      };
    default:
      return state;
  }
};