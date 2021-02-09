import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  grid-template-areas:
    ". . ."
    ". content ."
    ". . .";
`;

const Page = ({children}) => {
    return (
        <Div >
            {React.Children.map(children, child => (
                React.cloneElement(child, {gridArea: 'content '})
            ))}
        </Div>
    )
}

Page.propTypes = {
    children: PropTypes.node,
    gridArea: PropTypes.string,
};

export default Page;