import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    grid-area: ${({gridArea}) => gridArea};
`;

const HomeContent = ({gridArea}) => {
    return (
        <Div gridArea={gridArea}>home</Div>
    )
}

HomeContent.propTypes = {
    gridArea: PropTypes.string.isRequired,
};

export default HomeContent;