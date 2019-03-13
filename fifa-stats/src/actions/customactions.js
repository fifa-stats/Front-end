//import axios;
import axios from 'axios';

// url link to api
const url = 'https://fifa19.herokuapp.com/api';

//CUSTOM TEAM literals and actions 

//GET CUSTOM TEAM
// export const GET_CUSTOM_TEAMS_START = 'GET_CUSTOM_TEAMS_START';
// export const GET_CUSTOM_TEAMS_SUCCESS = 'GET_CUSTOM_TEAMS_SUCCESS';
// export const GET_CUSTOM_TEAMS_FAILURE = 'GET_CUSTOM_TEAMS_FAILURE';

// export const getCustom = () => dispatch => {
//     dispatch({type: GET_CUSTOM_TEAMS_START});
//      return axios
//         .get(`${url}/teams`, {
//         headers:{Authorization: localStorage.getItem("token")}
//         })
//         .then(res=> {
//             console.log(res);
//             dispatch({type: GET_CUSTOM_TEAMS_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             console.log(err.message)
//            dispatch({type: GET_CUSTOM_TEAMS_FAILURE, payload: err.data})

//         })
// };

// CREATE NEW CUSTOM TEAM 

export const CREATE_CUSTOM_TEAM_START = 'CREATE_CUSTOM_TEAM_START';
export const CREATE_CUSTOM_TEAM_SUCCESS = 'CREATE_CUSTOM_TEAM_SUCCESS';
export const CREATE_CUSTOM_TEAM_FAILURE = 'CREATE_CUSTOME_TEAM_FAILURE';

export const createTeam = (newTeam) => dispatch => {
    dispatch({type: CREATE_CUSTOM_TEAM_START});
    return axios
       .post(`${url}/teams`, {
       headers:{Authorization: localStorage.getItem("token")}
       } , newTeam)
       .then(res=> {
           console.log(res);
           dispatch({type: CREATE_CUSTOM_TEAM_SUCCESS, payload: res.data})
       })
       .catch(err => {
           console.log(err.message)
           dispatch({type: CREATE_CUSTOM_TEAM_FAILURE, payload: err.data})

       })
}

// COPY DEFAULT TEAM TO NEW CUSTOM TEAM

export const COPY_TEAM_START = 'COPY_TEAM_START';
export const COPY_TEAM_SUCCESS = 'COPY_TEAM_SUCCESS';
export const COPY_TEAM_FAILURE = 'COPY_TEAM_FAILURE';

export const copyDefaultTeamToCustom = (defaultTeamName) => dispatch => {
    dispatch({ type: COPY_TEAM_START});
    return axios
        .post(`${url}/teams/copy`, {
            headers: {Authorization: localStorage.getItem("token")},
        }, {name: defaultTeamName})
        .then(res => {
            console.log(res);
            dispatch({type: COPY_TEAM_SUCCESS, payload: res.data})
        })
}

//DELETE CUSTOM TEAM

export const DELETE_CUSTOM_TEAM_START = 'DELETE_CUSTOM_TEAM_START';
export const DELETE_CUSTOM_TEAM_SUCCESS = 'DELETE_CUSTOM_TEAM_SUCCESS';
export const DELETE_CUSTOM_TEAM_FAILURE = 'DELETE_CUSTOME_TEAM_FAILURE';

export const deleteTeam = (id) => dispatch => {
    dispatch({type: DELETE_CUSTOM_TEAM_START});
    return axios
       .delete(`${url}/teams/${id}`, {
       headers:{Authorization: localStorage.getItem("token")}
       })
       .then(res=> {
           console.log(res);
           dispatch({type: DELETE_CUSTOM_TEAM_SUCCESS, payload: res.data})
       })
       .catch(err => {
           console.log(err.message)
           dispatch({type: DELETE_CUSTOM_TEAM_FAILURE, payload: err.data})
       })
}

//CUSTOM Players literals and actions

//ADD PLAYER

export const ADD_PLAYER_START = 'ADD_PLAYER_START';
export const ADD_PLAYER_SUCCESS = 'ADD_PLAYER_SUCCESS';
export const ADD_PLAYER_FAILURE = 'ADD_PLAYER_FAILURE';

export const addPlayer = (id) => dispatch => {
    dispatch({type: ADD_PLAYER_START});
    return axios
       .post(`${url}/teams/${id}/add`, {
       headers:{Authorization: localStorage.getItem("token")}
       })
       .then(res=> {
           console.log(res);
           dispatch({type: ADD_PLAYER_SUCCESS, payload: res.data})
       })
       .catch(err => {
           console.log(err.message)
           dispatch({type: ADD_PLAYER_FAILURE, payload: err.data})
       })
}

//DELETE PLAYER

export const DELETE_PLAYER_START = 'DELETE_PLAYER_START';
export const DELETE_PLAYER_SUCCESS = 'DELETE_PLAYER_SUCCESS';
export const DELETE_PLAYER_FAILURE = 'DELETE_PLAYER_FAILURE';

export const deletePlayer = (id1, id2) => dispatch => {
    dispatch({type: DELETE_PLAYER_START});
    return axios
       .delete(`${url}/teams/${id1}/delete/${id2}`, {
       headers:{Authorization: localStorage.getItem("token")}
       })
       .then(res=> {
           console.log(res);
           dispatch({type: DELETE_PLAYER_SUCCESS, payload: res.data})
       })
       .catch(err => {
           console.log(err.message)
           dispatch({type: DELETE_PLAYER_FAILURE, payload: err.data})
       })
}


