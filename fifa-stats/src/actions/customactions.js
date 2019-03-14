//import axios;
import axios from 'axios';
import { GET_TEAMS_SUCCESS, GET_TEAMS_FAILURE } from '../actions/statsaction';

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
export const CREATE_CUSTOM_TEAM_FAILURE = 'CREATE_CUSTOM_TEAM_FAILURE';

export const createTeam = (newTeam) => dispatch => {
    dispatch({type: CREATE_CUSTOM_TEAM_START});
   // console.log(localStorage.getItem('token'))
    return axios({
        url: "/teams",
        method: "post",
        baseURL: "https://fifa19.herokuapp.com/api/",
        headers: {Authorization:  localStorage.getItem("token")},
        data: {name:newTeam}
      })
      .then(res => {
          console.log(res.data);
          dispatch({type: CREATE_CUSTOM_TEAM_SUCCESS, payload: res.data})
      })
    
    // axios
    //    .post(`${url}/teams`, newTeam , 
    //    {headers:{Authorization: localStorage.getItem("token")}} 
    //    ) 
    //    .then(res=> {
    //        console.log(res);
           
    //        dispatch({type: CREATE_CUSTOM_TEAM_SUCCESS, payload: res.data})
    //    })
    //    .catch(err => {
    //        console.log(err.message)
    //        dispatch({type: CREATE_CUSTOM_TEAM_FAILURE, payload: err.data})

    //    })
}

// COPY DEFAULT TEAM TO NEW CUSTOM TEAM

export const COPY_TEAM_START = 'COPY_TEAM_START';
export const COPY_TEAM_SUCCESS = 'COPY_TEAM_SUCCESS';
export const COPY_TEAM_FAILURE = 'COPY_TEAM_FAILURE';

export const copyDefaultTeamToCustom = (defaultTeamName) => dispatch => {
    dispatch({ type: COPY_TEAM_START});
    return axios
        .post(`${url}/teams/copy`,
        {name: defaultTeamName},
        {headers: {Authorization: localStorage.getItem("token")},
        })
        .then(res => {
            console.log(res);
            dispatch({type: COPY_TEAM_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: COPY_TEAM_FAILURE, payload: err}));
}

//DELETE CUSTOM TEAM

export const DELETE_CUSTOM_TEAM_START = 'DELETE_CUSTOM_TEAM_START';
export const DELETE_CUSTOM_TEAM_SUCCESS = 'DELETE_CUSTOM_TEAM_SUCCESS';
export const DELETE_CUSTOM_TEAM_FAILURE = 'DELETE_CUSTOME_TEAM_FAILURE';

// axios({
//     url: "/teams/${id}",
//     method: "delete",
//     baseURL: "https://fifa19.herokuapp.com/api/",
//     headers: {Authorization:  localStorage.getItem("token")},
//     data: {id: id}
//   })



// export const deleteTeam = (id) => dispatch => {
//     dispatch({type: DELETE_CUSTOM_TEAM_START});
//     return axios
//        .delete(`${url}/teams/${id}`, {
//        headers:{Authorization: localStorage.getItem("token")}
//        })
//        .then(res=> {
//            console.log(res.data);
//            dispatch({type: DELETE_CUSTOM_TEAM_SUCCESS, payload: res.data})
//        })
//        .catch(err => {
//            console.log(err.message)
//            dispatch({type: DELETE_CUSTOM_TEAM_FAILURE, payload: err.data})
//        })
// }
export const deleteTeam = id => dispatch => {
    dispatch({ type: DELETE_CUSTOM_TEAM_START });

    axios
        .delete(`${url}/teams/${id}`, {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_CUSTOM_TEAM_SUCCESS, payload: id });

            return axios
                .get(`${url}/teams`, {
                    headers: { Authorization: localStorage.getItem('token') }
                })
                .then(res => {
                    console.log(res);
                    dispatch({ type: GET_TEAMS_SUCCESS, payload: res.data });
                })
                .catch(err => {
                    dispatch({ type: GET_TEAMS_FAILURE, payload: err });
                });
        })
        .catch(error => {
            console.log(error.message);
            dispatch({ type: DELETE_CUSTOM_TEAM_FAILURE, payload: error.data });
        });
};

//CUSTOM Players literals and actions

//ADD PLAYER

export const ADD_PLAYER_START = 'ADD_PLAYER_START';
export const ADD_PLAYER_SUCCESS = 'ADD_PLAYER_SUCCESS';
export const ADD_PLAYER_FAILURE = 'ADD_PLAYER_FAILURE';

export const addPlayer = (teamID, playerID) => dispatch => {
    dispatch({type: ADD_PLAYER_START});
    return axios
        .post(`${url}/teams/${teamID}/add`,
            { player_id: playerID },
            { headers: {Authorization: localStorage.getItem("token")} }
        )
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

export const deletePlayer = (teamID, playerID) => dispatch => {
    dispatch({type: DELETE_PLAYER_START});
    return axios
       .delete(`${url}/teams/${teamID}/delete/${playerID}`, {
       headers:{Authorization: localStorage.getItem("token")}
       })
       .then(res=> {
           console.log(res);
           dispatch({type: DELETE_PLAYER_SUCCESS, payload: res.data})
       })
       .catch(err => {
           console.log(err.message)
           dispatch({type: DELETE_PLAYER_FAILURE, payload: err.data})
       });
}


