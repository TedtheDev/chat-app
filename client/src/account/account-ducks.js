import axios from 'axios';
import config from '../config/config';

import { 
    CREATE_ACCOUNT_FAILURE,
    CREATE_ACCOUNT_SUCCESS,
    CREATING_ACCOUNT
} from './account-ducks-types';

const isCreatingAccount = () => {
    return {
        type: CREATING_ACCOUNT,
    }
};

const createAccountSuccess = () => {
    return {
        type: CREATE_ACCOUNT_SUCCESS,
    }
};

const createAccountFailure = (error) => {
    return {
        type: CREATE_ACCOUNT_FAILURE,
        error
    }
};

export const createAccount = ({username, email, password}) => {
    return (dispatch) => {
        dispatch(isCreatingAccount());

        //api here
        // TODO: maybe reuse login function from auth ducks
        axios.post('https://api.chat-app.com:8443/v1/account/create', { username, email, password})
            .then((response) => {
                const { status } = response;
                const { token } = response.data;

                if(status === 201 && token){
                    dispatch(createAccountSuccess());

                    window.location.replace(config.domain);
                } else {
                    dispatch(createAccountFailure({message: 'Failed to create account'}))
                }
            },
            (error) => {
                dispatch(createAccountFailure(error))
            })

        setTimeout(() => {
            dispatch(createAccountSuccess())
        })
    }
};

const INITIAL_STATE = {
    isCreatingAccount: false
};

const account = (
    state = INITIAL_STATE,
    {
        type,
        error,
    }
) => {
    switch(type){
        case CREATING_ACCOUNT:
            return {...state, isCreatingAccount: true };
        case CREATE_ACCOUNT_FAILURE:
            return {...state, isCreatingAccount: false, error };
        case CREATE_ACCOUNT_SUCCESS:
            return {...state, isCreatingAccount: false };
        default:
            return state;
    }
}

export default account;