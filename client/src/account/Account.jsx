import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createAccount } from './account-ducks';
import { isAuthenticatedSelector } from '../auth/selectors/auth-selectors';

import AccountForm from './AccountForm'
import AccountDetails from './AccountDetails'
import Page from '../components/Page';

const Account = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(isAuthenticatedSelector);

    const submitCreateAccount = ({username, email, password }) => {
        dispatch(
            createAccount({
                username: username.value,
                email: email.value,
                password: password.value
            })
        );
    }

    return (
        <Page gridArea="accountForm">
            {
                isAuthenticated ?
                    <AccountDetails /> :
                    <AccountForm onSubmit={submitCreateAccount} />
            }
        </Page>
    )
}

export default Account;