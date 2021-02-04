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

const Form = styled.form`
  grid-area: loginForm;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
                <TextField
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    label="Email"
                    variant="outlined"
                    error={isValidEmail}
                />
                <TextField
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Login
                </Button>
            </Form>
        </Div>
    );
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func,
};

export default LoginForm;