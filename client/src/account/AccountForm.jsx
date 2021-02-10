import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useCreateAccountForm from './hooks/create-account-form';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Form = styled.form`
    grid-area: ${({gridArea}) => gridArea};
`;

const ErrorMessage = styled.span`
    color: red;
`;

const AccountForm = ({gridArea}) => {
    const {
        inputs,
        handleInputChange,
        handleSubmit,
        errors
    } = useCreateAccountForm(() => {});

    return (
        <>
            <Form gridArea={gridArea} onSubmit={handleSubmit} >
                {
                    Object.entries(inputs).map(([fieldName, fieldValue]) => {
                        return (
                            <TextField
                                key={fieldName}
                                label={fieldValue.label}
                                name={fieldValue.name}
                                type={fieldValue.type}
                                variant="outlined"
                                onChange={handleInputChange}
                                value={fieldValue.fieldValue}
                                error={Boolean(errors[fieldName])}
                                helperText={errors[fieldName] && errors[fieldName]}
                            />
                        )
                    })
                }
                <div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Create Account
                    </Button>
                    <ErrorMessage></ErrorMessage>
                </div>
            </Form>
        </>
    )
};

AccountForm.propTypes = {
    gridArea: PropTypes.string,
};

export default AccountForm;