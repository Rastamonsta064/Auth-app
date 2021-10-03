import {LOGOUT, SET_TOKEN} from "./actions";

export const tokenEnhancer = ({dispatch, getState}) => (next) => (action) => {
    switch (action.type) {
        case LOGOUT:
            localStorage.removeItem('token');
            break;
        case SET_TOKEN:
            localStorage.setItem('token', action.payload);
            break;
        default:
            break;
    }
    return next(action);
}