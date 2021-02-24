import { combineReducers } from 'redux'

import authentication from '../auth/auth-ducks';
import account from '../account/account-ducks';

const rootReducer = combineReducers({
    authentication,
    account,
});

export default rootReducer;