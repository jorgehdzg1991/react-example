import * as actionTypes from './actionTypes';

export const login = (username, password) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_AUTH,
            payload: {
                username: 'fake-user',
                refreshToken: 'fake-token'
            }
        });
    };
};

export const logout = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.UNSET_AUTH
        });
    };
}
