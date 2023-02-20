import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../pages/Search';

describe('Search', () => {
    test('renders the search component', () => {
        const { getByTestId } = render(<Search />);
        const searchContainer = getByTestId('search');
        expect(searchContainer).toBeInTheDocument();
    });

    test('calls onUsernameSubmit function when search button is clicked', () => {
        const onUsernameSubmit = jest.fn();
        const onUsernameChange = jest.fn();
        const { getByTestId, getByText } = render(<Search onUsernameSubmit={onUsernameSubmit} username="test" onUsernameChange={onUsernameChange} />);
        const searchContainer = getByTestId('search');
        const searchButton = searchContainer.querySelector('button');

        fireEvent.change(searchContainer.querySelector('input'), { target: { value: 'test' } });
        fireEvent.click(searchButton);

        expect(onUsernameSubmit).toHaveBeenCalledTimes(1);
    });
});
