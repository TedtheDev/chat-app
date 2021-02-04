import React from "react";

import LoginForm from "./login/LoginForm";

const Login = () => {

  const handleLogin = ({ email, password }) => {
    console.log({ email, password });
  };

  return (
    <LoginForm handleLogin={handleLogin} />
  );
};

export default Login;
