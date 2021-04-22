import CookieUtils from '../utils/cookie-utils';
import AuthService from './auth-service';

import {
    IS_AUTHENTICATING,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_FAILURE,
    IS_LOGGING_OUT,
    IS_LOGGING_OUT_SUCCESS,
} from './auth-types';

const isAuthenticating = () => {
    return {
        type: IS_AUTHENTICATING,
        isAuthenticating: true,
        authenticateOnLoadFailure: false,
    }
}

const isLoggingOut = () => {
    return {
        type: IS_LOGGING_OUT
    }
}

const isLoggingOutSuccess = () => {
    return {
        type: IS_LOGGING_OUT_SUCCESS,
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

const authenticateOnLoadFailure = (errorMessage) => {
    return {
        type: AUTHENTICATE_FAILURE,
        authenticateOnLoadFailure: true,
        isAuthenticating: false,
        errorMessage,
    }
}

export const authenticateOnLoad = () => {
    return async (dispatch) => {
        try {
            const userDetails = await AuthService.verify();
    
            dispatch(authenticateSuccess(userDetails));
        }
        catch(error){
            CookieUtils.removeCookie('chat-app-token');
            dispatch(authenticateOnLoadFailure());
        }
    }
};

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isAuthenticating());

        try{
            await AuthService.create(email, password);

            const userDetails = await AuthService.verify();
            
            dispatch(authenticateSuccess(userDetails));
        }
        catch(error){
            const errorMessage = error?.response?.data?.message;
            dispatch(authenticateFailure(errorMessage));
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(isLoggingOut());

        const results = CookieUtils.removeCookie('chat-app-token');
        console.log({results})
        dispatch(isLoggingOutSuccess());
    }
}

const INITIAL_STATE = {
    isAuthenticated: false,
    isAuthenticating: false,
    authenticateOnLoadFailure: false,
    isLoggingOut: false,
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
        case IS_LOGGING_OUT:
            return {...state, isLoggingOut: true };
        case IS_LOGGING_OUT_SUCCESS:
            return {...state, isLoggingOut: false, isAuthenticated: false, authDetails: null };
        default:
            return state;
    }
}

export default authentication;