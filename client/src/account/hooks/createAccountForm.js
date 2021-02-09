import { useState } from 'react';

const initialInputs = {
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
};

const useCreateAccountForm = (callback) => {
    const [ inputs, setInputs ] = useState(initialInputs);
    
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setInputs({...inputs, [name]: {...inputs[name], value}});
    }

    const handleSubmit = (event) => {
        if(event){
            event.preventDefault();
        }

        callback();
    }

    return {
        inputs,
        handleInputChange,
        handleSubmit,
    }
}

export default useCreateAccountForm;