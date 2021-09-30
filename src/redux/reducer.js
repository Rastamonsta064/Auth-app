import {LOGOUT, SET_ERROR, SET_TOKEN, SET_USER} from "./actions";

const initialState = {isError: true}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user:action.payload};
        case SET_ERROR:
            return {...state, isError: action.payload};
        case LOGOUT:
            return {isError: true};
        case SET_TOKEN:
        default:
            return state;
    }
}