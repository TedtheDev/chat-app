import React from "react";

import LoginForm from "./LoginForm";
import Page from '../components/Page';

const Login = () => {

  const handleLogin = ({ email, password }) => {
    console.log({ email, password });
  };

  return (
    <Page>
      <LoginForm handleLogin={handleLogin} />
    </Page>
  );
};

export default Login;
