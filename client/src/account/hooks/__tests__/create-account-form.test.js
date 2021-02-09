import { renderHook, act } from '@testing-library/react-hooks';
import useCreateAccountForm from '../create-account-form';

describe('Test CreateAccountForm', () => {
    it('should set initial inputs', () => {
        const { result } = renderHook(() => useCreateAccountForm())
      
        expect(result.current.inputs).toEqual({
            username: {
                value: '',
                name: 'username',
                label: 'Username',
                type: 'text',
            },
            email: {
                value: '',
                label: 'Email',
                name: 'email',
                type: 'email',
            },
            password: {
                value: '',
                label: 'Password',
                name: 'password',
                type: 'password',
            },
            confirmPassword: {
                value: '',
                label: 'Confirm Password',
                name: 'confirmPassword',
                type: 'password',
            },
        });
      });

      it('should handleInputChange', () => {
        const { result } = renderHook(() => useCreateAccountForm())
      
        const event = { target: { name: 'username', value: 'aValue'}};
        
        act(() => {
            result.current.handleInputChange(event)
        })
        expect(result.current.inputs).toEqual({
            username: {
                value: 'aValue',
                name: 'username',
                label: 'Username',
                type: 'text',
            },
            email: {
                value: '',
                label: 'Email',
                name: 'email',
                type: 'email',
            },
            password: {
                value: '',
                label: 'Password',
                name: 'password',
                type: 'password',
            },
            confirmPassword: {
                value: '',
                label: 'Confirm Password',
                name: 'confirmPassword',
                type: 'password',
            },
        });
      })

      it('should handleSubmit', () => {
        const mockOnSubmit = jest.fn();

        const { result } = renderHook(() => useCreateAccountForm(mockOnSubmit))
    
        
        act(() => {
            result.current.handleSubmit();
        })

        expect(mockOnSubmit).toHaveBeenCalled();
      });
});

