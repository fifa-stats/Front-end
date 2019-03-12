import axios from 'axios';

//FETCHING FIFA 19 stats  literals and actions

export const GET_TEAMS_START = 'GET_TEAMS_START';
export const GET_TEAMS_SUCCESS = 'GET_TEAMS_SUCCESS';
export const GET_TEAMS_FAILURE = 'GET_TEAMS_FAILURE';

 const url = 'https://fifa19.herokuapp.com/api';
 

export const getTeams =  () => dispatch => {
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
            console.log(err);
        })
}