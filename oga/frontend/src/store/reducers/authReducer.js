import * as actionTypes from "../actions/actionTypes";

const initialState = {
    authenticated: null,
    justLoggedIn: null,
    profile: null
};

const authReducer = (state = initialState, action = "") => {
    switch (action.type) {
        case actionTypes.SIGN_UP: //nothing to do, really or show some success message?
            return { ...state };
        case actionTypes.AUTHENTICATED:
            //const userid = action.userid;
            return {
                ...state,
                authenticated: action.authenticated,
                justLoggedIn: action.justLoggedIn
            };
        case actionTypes.UNAUTHENTICATED:
            console.log(action);
            return { ...state, authenticated: false };
        case actionTypes.GET_PROFILE:
            const payload = {
                id: action.id,
                username: action.username,
                location: action.location,
                coordinates: action.coordinates,
                todayAnswerCount: action.todayAnswerCount,
                todayQuestionCount: action.todayQuestionCount,
                reliability: action.reliability,
                rankNum: action.rankNum,
            };
            return { ...state, profile: payload };
        default:
            break;
    }
    return state;
};

export default authReducer;
