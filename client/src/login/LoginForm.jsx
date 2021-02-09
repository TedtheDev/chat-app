import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    height: 3rem;
`;

const CreateAccountButton = styled(StyledButton)`
    grid-area: createAccount;
`;

const LoginButton = styled(StyledButton)`
    grid-area: login;
    height: 3rem;
`;

const Form = styled.form`
    grid-area: ${({gridArea}) => gridArea};
    display: grid;
    grid-template-rows: repeat(3, minmax(4rem, min-content));
    grid-template-columns: repeat(2, minmax(10rem, min-content));
    grid-template-areas: 
        "email email"
        "password password"
        "login createAccount";
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem;
`;

const LoginForm = ({handleLogin, gridArea}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);

    const validateForm = () => {
        if (!email.includes("@")) {
            setIsValidEmail(true);
            return true;
        } else {
            setIsValidEmail(false);
            return false;
        }

        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const valid = validateForm(event);

        if(valid){
            handleLogin({email, password});
        }

    }
    return (
        <>
            <Form gridArea={gridArea} onSubmit={handleSubmit}>
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
                <Link
                    to="/account"
                    component={CreateAccountButton}
                    variant="contained"
                    color="primary"
                >
                    Create Account
                </Link>
            </Form>
            
        </>
    );
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func,
    gridArea: PropTypes.string,
};

export default LoginForm;