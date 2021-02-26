import axios from 'axios';
import CookieUtils from '../utils/cookie-utils';
import AuthService from './auth-service';

import {
    IS_AUTHENTICATING,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_FAILURE,
} from './auth-types';

const isAuthenticating = () => {
    return {
        type: IS_AUTHENTICATING,
        isAuthenticating: true,
        authenticateOnLoadFailure: false,
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

const authenticateOnLoadFailure = () => {
    return {
        type: AUTHENTICATE_FAILURE,
        authenticateOnLoadFailure: true,
        isAuthenticating: false,
    }
}

export const authenticateOnLoad = () => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/v1/authenticate/verify')
            .then((response) => {
                const { data } = response
                const { decodedToken } = data;

                dispatch(authenticateSuccess(decodedToken))
            },
            () => {
                CookieUtils.removeCookie('chat-app-token');
                dispatch(authenticateOnLoadFailure());
            });
    }
};

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isAuthenticating());

        try{
            const token = await AuthService.create(email, password);

            const userDetails = await AuthService.verify(token);
            
            dispatch(authenticateSuccess(userDetails));
        }
        catch(error){
            const errorMessage = error?.response?.data?.message;
            dispatch(authenticateFailure(errorMessage));
        }
    }
}

const INITIAL_STATE = {
    isAuthenticated: false,
    isAuthenticating: false,
    authenticateOnLoadFailure: false,
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