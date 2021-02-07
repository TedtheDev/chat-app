import React from "react";
import styled from 'styled-components';

import LoginForm from "./login/LoginForm";

const Div = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  grid-template-areas:
    ". . ."
    ". loginForm ."
    ". . .";
`;

const Login = () => {

  const handleLogin = ({ email, password }) => {
    console.log({ email, password });
  };

  return (
    <Div>
      <LoginForm handleLogin={handleLogin} />
    </Div>
  );
};

export default Login;
