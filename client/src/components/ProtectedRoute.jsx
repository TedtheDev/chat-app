import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import {
    isAuthenticatedSelector
} from '../auth/selectors/auth-selectors';

const ProtectedRoute = ({children, ...props}) => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);

    if(isAuthenticated){
        return (
            <Route {...props}>
                {children}
            </Route>
        )
    }

    return <Redirect to='/login' />
}

ProtectedRoute.propTypes = {
    children: PropTypes.object,
}

export default ProtectedRoute;