import { SET_AUTH, UNSET_AUTH } from '../actions/actionTypes';
import * as initialValues from './initialValues';

export default function authReducer(state = initialValues.auth, action) {
    switch (action.type) {
        case SET_AUTH:
            return action.payload;
        case UNSET_AUTH:
            return initialValues.auth;
        default:
            return state;
    }
}
