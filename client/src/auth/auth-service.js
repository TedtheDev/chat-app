import axios from 'axios';
import config from '../config/config';

const authServiceInstance = axios.create({
    baseURL: config.apiServiceURL,
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

const verify = async() => {
        const response = await authServiceInstance.get('/v1/authenticate/verify');
                
        const { data } = response;
        const { userDetails } = data;
        
        return userDetails;
}

const AuthService = {
    create,
    verify,
}

export default AuthService;