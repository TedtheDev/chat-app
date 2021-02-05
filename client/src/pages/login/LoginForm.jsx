import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Div = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
    ". . ."
    ". loginForm ."
    ". . .";
`;


const StyledTextField = styled(TextField)`
    margin-bottom: 1rem;
`;

const EmailTextField = styled(StyledTextField)`
    grid-area: email;
`;

const PasswordTextField = styled(StyledTextField)`
    grid-area: password;
`;

const StyledButton = styled(Button)`
    min-width: 2rem;
    max-width: 8rem;
`;

const CreateAccountButton = styled(StyledButton)`
    grid-area: createAccount;
`;

const LoginButton = styled(StyledButton)`
    grid-area: login;
`;

const Form = styled.form`
  grid-area: loginForm;
  display: grid;
  grid-template-rows: repeat(3, minmax(4rem, min-content));
  grid-template-columns: repeat(2, minmax(10rem, min-content));
  grid-template-areas: 
    "email email"
    "password password"
    "login createAccount";
`;

const LoginForm = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);

    const validateForm = (event) => {
        event.preventDefault();
        if (!email.includes("@")) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }

        if(email && password){
            handleLogin({email, password});
        }
    }

    return (
        <Div>
            <Form onSubmit={validateForm}>
                <EmailTextField
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    label="Email"
                    variant="outlined"
                    error={isValidEmail}
                />
                <PasswordTextField
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <LoginButton
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Login
                </LoginButton>
                <CreateAccountButton
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Create Account
                </CreateAccountButton>
            </Form>
        </Div>
    );
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func,
};

export default LoginForm;