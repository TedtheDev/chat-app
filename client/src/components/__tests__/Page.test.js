import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../Page';

const ChildComponent = () => {
    return (
        <div>My Child Component</div>
    )
};

describe('Test <Page />', () => {
    it('renders a child component', () => {
        render(<Page><ChildComponent /></Page>);
        const childComponentText = screen.getByText('My Child Component');
        expect(childComponentText).toBeInTheDocument();
      });
});