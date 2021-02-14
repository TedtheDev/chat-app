import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../auth/auth-ducks';
import { isAuthenticatingSelector, authenticateErrorSelector } from '../auth/selectors/auth-selectors';

import LoginForm from "./LoginForm";
import Page from '../components/Page';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticating = useSelector(isAuthenticatingSelector)
  const authErrorMessage = useSelector(authenticateErrorSelector);

  const handleLogin = ({ email, password }) => {
    console.log({ email, password });
    dispatch(authenticate(email, password))
  };

  return (
    <Page>
      <LoginForm
        isAuthenticating={isAuthenticating}
        errorMessage={authErrorMessage}
        handleLogin={handleLogin}
        />
    </Page>
  );
};

export default Login;