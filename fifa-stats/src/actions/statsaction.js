import axios from 'axios';

//FETCHING FIFA 19 stats literals and actions

export const GET_PLAYER_DATA_START = 'GET_PLAYER_DATA_START';
export const GET_PLAYER_DATA_SUCCESS = 'GET_PLAYER_DATA_START';
export const GET_PLAYER_DATA_FAILURE = 'GET_PLAYER_DATA_START';

export const GET_TEAMS_START = 'GET_TEAMS_START';
export const GET_TEAMS_SUCCESS = 'GET_TEAMS_SUCCESS';
export const GET_TEAMS_FAILURE = 'GET_TEAMS_FAILURE';

export const GET_TEAM_ROSTER_START = 'GET_TEAM_ROSTER_START';
export const GET_TEAM_ROSTER_SUCCESS = 'GET_TEAM_ROSTER_SUCCESS';
export const GET_TEAM_ROSTER_FAILURE = 'GET_TEAM_ROSTER_FAILURE';

const url = 'https://fifa19.herokuapp.com/api';


// return stats and props of a player given the `playerID`
// @TODO: There isn't an endpoint for this yet
export const getPlayerData = (playerID) => dispatch => {
    dispatch({type: GET_PLAYER_DATA_START});
    axios
        // @TODO: Need to update the URL once we have the appropriate endpoint
        .get(`${url}/`)
        .then(res => {
            dispatch({type: GET_PLAYER_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_PLAYER_DATA_FAILURE, payload: err})
        });
};

// return list of teams for current user
export const getTeams = () => dispatch => {
    dispatch({type: GET_TEAMS_START});
    axios
        .get(`${url}/teams`, {
            headers:{Authorization: localStorage.getItem("token")}
        })
        .then(res => {
            console.log(res);
            dispatch({type: GET_TEAMS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_TEAMS_FAILURE, payload: err});
        });
};

// retrieve list of Player IDs for a given `teamID`
export const getTeamRoster = (teamName) => dispatch => {
    dispatch({type: GET_TEAM_ROSTER_START});
    // console.log('statsaction', teamName);
    axios
        .get(`${url}/teams/default/${teamName.toLowerCase()}`)
        .then(res => {
            dispatch({type: GET_TEAM_ROSTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_TEAM_ROSTER_FAILURE, payload: err});
        });
};