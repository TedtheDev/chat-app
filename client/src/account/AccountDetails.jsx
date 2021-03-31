import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { queries } from '../graphql';
import { authDetailsSelector } from '../auth/selectors/auth-selectors';

import TextField from '@material-ui/core/TextField';

const Wrapper = styled.main`
    grid-area: ${({gridArea}) => gridArea ? gridArea : 'content'};
`;

const AccountDetails = ({ gridArea }) => {
    const authDetails = useSelector(authDetailsSelector);

    const { loading, error, data } = useQuery(
        queries.getUser,
        { variables: { id: `${authDetails.id}` } }
    );

    if(loading || !data){
        <div>loading</div>
    }

    const { user : { username = '', email = '' } = {} } = data || {};

    return (
        <Wrapper gridArea={gridArea}>
            <TextField id="username" disabled label="Username" value={username} variant="outlined" />
            <TextField id="username" disabled label="Email" value={email} variant="outlined" />
        </Wrapper>
    )
}

AccountDetails.propTypes = {
    gridArea: PropTypes.string.isRequired,
}
export default AccountDetails;