import {
LOGIN_START,
LOGIN_SUCCESS,
} from  '../actions/loginactions';
const initialState = {
    stats: [],
    loggingIn: false,
    err: null
};



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            }
        default:
            return state;
    }
}
export default reducer;