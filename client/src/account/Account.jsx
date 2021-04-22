import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createAccount } from './account-ducks';
import { isAuthenticatedSelector } from '../auth/selectors/auth-selectors';
import { isCreatingAccountSelector } from '../account/selectors/account-selectors';

import AccountForm from './AccountForm'
import Page from '../components/Page';

const Account = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const isCreatingAccount = useSelector(isCreatingAccountSelector);

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
            <AccountForm onSubmit={submitCreateAccount} isCreatingAccount={isCreatingAccount} />
        </Page>
    )
}

export default Account;