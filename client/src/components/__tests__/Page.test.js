import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../Page';

describe('Test <Page />', () => {
    it.skip('renders a child component', () => {
        render(<Page />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
      });
});