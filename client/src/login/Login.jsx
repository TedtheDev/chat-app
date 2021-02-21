import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../auth/auth-ducks';
import {
  isAuthenticatingSelector,
  authenticateErrorSelector,
  isAuthenticatedSelector
} from '../auth/selectors/auth-selectors';
import { Redirect } from 'react-router-dom';

import LoginForm from "./LoginForm";
import Page from '../components/Page';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticating = useSelector(isAuthenticatingSelector)
  const isAuthenticated = useSelector(isAuthenticatedSelector)
  const authErrorMessage = useSelector(authenticateErrorSelector);

  const handleLogin = ({ email, password }) => {
    dispatch(login(email, password))
  };

  if(isAuthenticated){
    return <Redirect to='/' />
  }

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