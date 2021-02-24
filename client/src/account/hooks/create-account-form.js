import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

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

const debounceSetErrors = debounce((fn) => fn(), 300);

const useCreateAccountForm = (callback) => {
    const [ inputs, setInputs ] = useState(initialInputs);
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        let newErrors = {};

        const { email, password, confirmPassword} = inputs;

        if(password.value !== confirmPassword.value){
            newErrors['password'] = 'Passwords must match';
            newErrors['confirmPassword'] = 'Passwords must match';
        }

        if(email.value !== '' && !email.value.includes('@')){
            newErrors['email'] = 'Email must contain an @';
        }
        
        debounceSetErrors(() => setErrors(newErrors));

    }, [inputs])

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setInputs({...inputs, [name]: {...inputs[name], value}});
    }

    const handleSubmit = (event) => {
        if(event){
            event.preventDefault();
        }

        // TODO: check if values !== '' AND check if any errors
        // if values entered and no errors, then call the callback
        callback && callback(inputs);
    }

    return {
        inputs,
        handleInputChange,
        handleSubmit,
        errors,
    }
}

export default useCreateAccountForm;