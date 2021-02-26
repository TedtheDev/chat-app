import axios from 'axios';

const authServiceInstance = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
});

const create = async( email, password ) => {
        const response = await authServiceInstance.post(
            '/v1/authenticate/create',
            { email, password }
        );

        const { data } = response;
        const { token } = data;

        return token;
}

const verify = async(token) => {
        const response = await authServiceInstance.post(
            '/v1/authenticate/verify',
            { token }
        );
                
        const { data } = response;
        const { userDetails } = data;
        
        return userDetails;
}

const AuthService = {
    create,
    verify,
}

export default AuthService;