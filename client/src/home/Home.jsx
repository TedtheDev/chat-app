import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authenticateOnLoad } from '../auth/auth-ducks';
import { authenticateOnLoadFailureSelector } from '../auth/selectors/auth-selectors';
import Page from '../components/Page';
import HomeContent from './HomeContent';

const Home = () => {
    const dispatch = useDispatch();
    const authenticateOnLoadFailure = useSelector(authenticateOnLoadFailureSelector);

    useEffect(() => {
        if(!authenticateOnLoadFailure){
            // dispatch(authenticateOnLoad());
        }
    }, [dispatch, authenticateOnLoadFailure])

    // on mount, verify token
    // grab token from cookie
    // hit api to verify if token is valid
    // if valid, show home
    // if not valid, redirect to login
    return (
        <Page>
            <HomeContent gridArea="content" />
        </Page>
    )
}

export default Home