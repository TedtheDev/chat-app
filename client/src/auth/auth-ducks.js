import axios from 'axios';

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
    }
}

const authenticateFailure = ({error}) => {
    return {
        type: AUTHENTICATE_FAILURE,
        errorMessage: error,
        isAuthenticating: false,
    }
}

export const authenticate = (email, password) => {
    return (dispatch) => {
        dispatch(isAuthenticating());

        // return setTimeout(() => {
        //     // dispatch(authenticateSuccess({userId: 123, username: 'Ted'}));

        //     dispatch(authenticateFailure({error: 'An Error'}));
        // }, 3000);

        return axios.post('/v1/authenticate', { email, password})
            .then((response) => {
                const { data } = response;

                dispatch(authenticateSuccess(data));
            },
            (error) => {
                dispatch(authenticateFailure(error));
            })
    }
}

const INITIAL_STATE = {
    isAuthenticated: false,
    isAuthenticating: false,
};

const authentication = (state = INITIAL_STATE, { type, isAuthenticating, authDetails, errorMessage}) => {
    switch(type){
        case IS_AUTHENTICATING:
            return { ...state, isAuthenticating};
        case AUTHENTICATE_SUCCESS:
            return { ...state, authDetails, isAuthenticating};
        case AUTHENTICATE_FAILURE:
            return {...state, errorMessage, isAuthenticating };
        default:
            return state;
    }
}

export default authentication;