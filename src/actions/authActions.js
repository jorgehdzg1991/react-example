import * as actionTypes from './actionTypes';
import axios from 'axios';

const { proto, host, port } = require('../config/api.json');

const authServiceEndpoint = `${proto}://${host}:${port}/api/v1/auth`;

export const login = (username, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${authServiceEndpoint}/login`, { username, password });
            const auth = response.data;
            dispatch({
                type: actionTypes.SET_AUTH,
                payload: auth
            });
        } catch (e) {
            dispatch({
                type: actionTypes.LOGIN_ERROR
            });
        }
    };
};

export const logout = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.UNSET_AUTH
        });
    };
}
