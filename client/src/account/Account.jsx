import React from 'react';
import { useDispatch } from 'react-redux';

import { createAccount } from './account-ducks';

import AccountForm from './AccountForm'
import Page from '../components/Page';

const Account = () => {
    const dispatch = useDispatch();

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
            <AccountForm onSubmit={submitCreateAccount} />
        </Page>
    )
}

export default Account;