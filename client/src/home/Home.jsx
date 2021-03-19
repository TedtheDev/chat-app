import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { authenticateOnLoad } from '../auth/auth-ducks';
import { authenticateOnLoadFailureSelector } from '../auth/selectors/auth-selectors';

import HomeContent from './HomeContent';
import Header from '../header/Header';

const Div = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 5rem auto 5rem;
    grid-template-columns: 1fr 5fr 1fr;
    justify-items: center;
    grid-template-areas: 
        "header header header"
        ". content ."
        "footer footer footer";
`;

const Home = () => {
    const dispatch = useDispatch();
    const authenticateOnLoadFailure = useSelector(authenticateOnLoadFailureSelector);

    useEffect(() => {
        if(!authenticateOnLoadFailure){
            dispatch(authenticateOnLoad());
        }
    }, [dispatch, authenticateOnLoadFailure])

    // on mount, verify token
    // grab token from cookie
    // hit api to verify if token is valid
    // if valid, show home
    // if not valid, redirect to login
    return (
        <Div>
            <Header gridArea="header"/>
            <HomeContent gridArea="content" />
        </Div>
    )
}

export default Home