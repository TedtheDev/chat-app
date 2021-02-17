import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginForm from '../LoginForm';

jest.mock('react-router-dom', () => ({
    ...jest.genMockFromModule('react-router-dom'),
    Link: function Link(props){
        return (
            <div>{props.children}</div>
        )
    }
}));

describe('Test <LoginForm />', () => {
    const mockHandleLogin = jest.fn();

    let requiredProps = {
        isAuthenticating: false,
        errorMessage: '',
        handleLogin: mockHandleLogin,
    }

    //TODO: finish
    it.skip('renders all the inputs', () => {
        render(<LoginForm {...requiredProps} />);
        const emailLabel = screen.getByLabelText('Email');
        expect(emailLabel).toBeInTheDocument();
      });
});