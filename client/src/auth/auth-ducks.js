import axios from 'axios';
import CookieUtils from '../utils/cookie-utils';

import {
    IS_AUTHENTICATING,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_FAILURE,
} from './auth-types';

const isAuthenticating = () => {
    return {
        type: IS_AUTHENTICATING,
        isAuthenticating: true,
    }
}

const authenticateSuccess = (authDetails) => {
    return {
        type: AUTHENTICATE_SUCCESS,
        authDetails,
        isAuthenticated: true,
        isAuthenticating: false,
    }
}

const authenticateFailure = (errorMessage) => {
    return {
        type: AUTHENTICATE_FAILURE,
        errorMessage,
        isAuthenticating: false,
    }
}

export const authenticateOnLoad = () => {
    return (dispatch) => {
        const token = CookieUtils.getCookie('chat-app-token');
        console.log({token})
        return axios.post('http://localhost:3001/v1/authenticate/verify', { token })
            .then((response) => {
                const { data } = response
                const { decodedToken } = data;

                dispatch(authenticateSuccess(decodedToken))
            },
            () => {
                CookieUtils.removeCookie('chat-app-token');
                dispatch(authenticateFailure());
            });
    }
};

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(isAuthenticating());

        return axios.post('http://localhost:3001/v1/authenticate/create', { email, password})
            .then((response) => {
                const { data } = response
                const { token } = data;

                return axios.post('http://localhost:3001/v1/authenticate/verify', { token })
                    .then((response) => {
                        const decodedToken = response?.data;
                        CookieUtils.setCookie('chat-app-token', token)
                        dispatch(authenticateSuccess(decodedToken));
                    },
                    (error) => {
                        const errorMessage = error?.response?.data?.message;
                        dispatch(authenticateFailure(errorMessage));
                    });
            },
            (error) => {
                const errorMessage = error?.response?.data?.message;
                dispatch(authenticateFailure(errorMessage));
            });
    }
}

const INITIAL_STATE = {
    isAuthenticated: false,
    isAuthenticating: false,
};

const authentication = (
    state = INITIAL_STATE,
    {
        type,
        isAuthenticating,
        isAuthenticated,
        authDetails,
        errorMessage
}) => {
    switch(type){
        case IS_AUTHENTICATING:
            return { ...state, isAuthenticating};
        case AUTHENTICATE_SUCCESS:
            return { ...state, authDetails, isAuthenticating, isAuthenticated};
        case AUTHENTICATE_FAILURE:
            return {...state, errorMessage, isAuthenticating};
        default:
            return state;
    }
}

export default authentication;