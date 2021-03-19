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
        //TODO: create service to handle this route
        try {
            const userDetails = await AuthService.verify();
    
            dispatch(authenticateSuccess(userDetails));
        }
        catch(error){
            console.log(error?.response?.data?.message);
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