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

export const GET_ANALYSIS_START = 'GET_ANALYSIS_START';
export const GET_ANALYSIS_SUCCESS = 'GET_ANALYSIS_SUCCESS';
export const GET_ANALYSIS_FAILURE = 'GET_ANALYSIS_FAILURE';

export const getAnalysis = teamRoster => dispatch => {
    console.log('teamRoster: ', teamRoster);
    dispatch({type: GET_ANALYSIS_START});
    axios
        .post(`${url}/teams/suggestion`,
        {players: teamRoster},
        {headers:{Authorization: localStorage.getItem("token")}}
        )
        .then(res => {
            dispatch({type: GET_ANALYSIS_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: GET_ANALYSIS_FAILURE, payload: err}));
};

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
export const getCustomTeams = () => dispatch => {
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

// retrieve list of Player IDs for a given default `teamName`
export const getDefaultTeamRoster = (teamName) => dispatch => {
    dispatch({type: GET_TEAM_ROSTER_START});
    // console.log('statsaction', teamName);
    axios
        .get(`${url}/teams/default/${teamName}`)
        .then(res => {
            dispatch({type: GET_TEAM_ROSTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_TEAM_ROSTER_FAILURE, payload: err});
        });
};


// retrieve list of Player IDs for a given custom `teamID`
export const GET_CUSTOM_TEAM_ROSTER_START = 'GET_CUSTOM_TEAM_ROSTER_START';
export const GET_CUSTOM_TEAM_ROSTER_SUCCESS = 'GET_CUSTOM_TEAM_ROSTER_SUCCESS';
export const GET_CUSTOM_TEAM_ROSTER_FAILURE = 'GET_CUSTOM_TEAM_ROSTER_FAILURE';

export const getCustomTeamRoster = (teamID) => dispatch => {
    dispatch({type: GET_CUSTOM_TEAM_ROSTER_START});
    // console.log('statsaction', teamName);
    axios
        .get(`${url}/teams/${teamID}`, {
            headers:{Authorization: localStorage.getItem("token")}
        })
        .then(res => {
            console.log(res);
            dispatch({type: GET_CUSTOM_TEAM_ROSTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_CUSTOM_TEAM_ROSTER_FAILURE, payload: err});
        });
};