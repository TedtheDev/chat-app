import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { debounce } from 'lodash';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

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

const LoadingSpinner = styled(CircularProgress)`
    margin-bottom: .5rem;
`;

const Wrapper = styled.div`
    grid-area: ${({gridArea}) => gridArea};
`;

const Form = styled.form`
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

const AuthenticatingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ErrorMessage = styled.span`
    color: red;
`;

const setErrorMessageDebounce = debounce((fn) => fn(), 800);

const LoginForm = ({isAuthenticating, errorMessage, handleLogin, gridArea}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[ emailError, setEmailError] = useState('');
    const[ passwordError, setPasswordError] = useState('');
    const[ isPasswordDirty, setIsPasswordDirty] = useState(false);

    useEffect(() => {
        let emailErrorMessage = '';

        if(email !== '' && !email.includes('@')){
            emailErrorMessage = 'Invalid Email'
        }

        setErrorMessageDebounce(() => {
            setEmailError(emailErrorMessage);
        });
    }, [email]);

    useEffect(() => {
        let passwordErrorMessage = '';

        if(isPasswordDirty && password === ''){
            passwordErrorMessage = 'Missing Password'
        }

        setErrorMessageDebounce(() => {
            setPasswordError(passwordErrorMessage);
        });
    }, [password, isPasswordDirty]);

    const handleSubmit = (event) => {
        event.preventDefault();

        let emailErrorMessage = '';
        let passwordErrorMessage = '';

        if(email === ''){
            emailErrorMessage = 'Missing Email';
        }

        if(password === ''){
            passwordErrorMessage = 'Missing Password';
        }

        setEmailError(emailErrorMessage);
        setPasswordError(passwordErrorMessage);

        if(email !== '' && password !== '' && !emailError && !passwordError){
            handleLogin({email, password});
        }
    }

    return (
        <>
            <Wrapper gridArea={gridArea}>
                {
                    isAuthenticating
                        ? (
                            <AuthenticatingWrapper>
                                <LoadingSpinner />
                                <span>Authenticating</span>
                            </AuthenticatingWrapper>
                        )
                        : (
                            <Form onSubmit={handleSubmit}>
                                <EmailTextField
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    error={Boolean(emailError && emailError)}
                                    helperText={emailError}
                                />
                                <PasswordTextField
                                    value={password}
                                    onChange={(event) => {
                                        setIsPasswordDirty(true)
                                        setPassword(event.target.value)
                                    }}
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    error={Boolean(passwordError && passwordError)}
                                    helperText={passwordError}
                                />
                                <LoginButton
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Login
                                </LoginButton>
                                
                                <CreateAccountButton
                                    component={Link}
                                    to="/account"
                                    variant="contained"
                                    color="primary"
                                >
                                    Create Account
                                </CreateAccountButton>
                                {
                                    errorMessage && (<ErrorMessage>{errorMessage}</ErrorMessage>)
                                }
                            </Form>
                        )
                }
                
            </Wrapper>
        </>
    );
};

LoginForm.propTypes = {
    isAuthenticating: PropTypes.bool,
    errorMessage: PropTypes.string,
    handleLogin: PropTypes.func,
    gridArea: PropTypes.string,
};

export default LoginForm;