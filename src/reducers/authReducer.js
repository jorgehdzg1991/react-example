import { SET_AUTH, UNSET_AUTH, LOGIN_ERROR } from '../actions/actionTypes';
import * as initialValues from './initialValues';

export default function authReducer(state = initialValues.auth, action) {
    switch (action.type) {
        case SET_AUTH:
            return action.payload;
        case UNSET_AUTH:
        case LOGIN_ERROR:
            return initialValues.auth;
        default:
            return state;
    }
}
