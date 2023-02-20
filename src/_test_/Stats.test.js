import React from 'react';
import { render } from '@testing-library/react';
import Stats from '../components/Stats';

describe('Stats', () => {
    test('renders Stats component with correct props and class for user', () => {
        const props = {
            repos: 10,
            followers: 20,
            following: 30,
            type: 'searchuser'
        };
        const { getByTestId } = render(<Stats {...props} />);
        const statsDetail = getByTestId('stats_detail');

        expect(statsDetail).toBeInTheDocument();
        expect(statsDetail).toHaveClass('flex flex-row space-x-2 border-slate-300 border-solid border rounded-lg px-3 py-2 text-sm');
        expect(statsDetail.children).toHaveLength(3);

        const [reposNode, followersNode, followingNode] = statsDetail.children;
        expect(reposNode.querySelector("p")).toHaveTextContent('Repos');
        expect(reposNode.querySelector("p").nextElementSibling).toHaveTextContent(props.repos.toString());
        expect(followersNode.querySelector("p")).toHaveTextContent('Followers');
        expect(followersNode.querySelector("p").nextElementSibling).toHaveTextContent(props.followers.toString());
        expect(followingNode.querySelector("p")).toHaveTextContent('Following');
        expect(followingNode.querySelector("p").nextElementSibling).toHaveTextContent(props.following.toString());
    });

    test('renders Stats component with correct props and class for search user', () => {
        const props = {
            repos: 10,
            followers: 20,
            following: 30,
            type: 'user'
        };
        const { getByTestId } = render(<Stats {...props} />);
        const statsDetail = getByTestId('stats_detail');

        expect(statsDetail).toBeInTheDocument();
        expect(statsDetail).toHaveClass('flex flex-row bg-sky-50 rounded-lg space-x-2 px-5 py-3');
        expect(statsDetail.children).toHaveLength(3);

        const [reposNode, followersNode, followingNode] = statsDetail.children;
        expect(reposNode.querySelector("p")).toHaveTextContent('Repos');
        expect(reposNode.querySelector("p").nextElementSibling).toHaveTextContent(props.repos.toString());
        expect(followersNode.querySelector("p")).toHaveTextContent('Followers');
        expect(followersNode.querySelector("p").nextElementSibling).toHaveTextContent(props.followers.toString());
        expect(followingNode.querySelector("p")).toHaveTextContent('Following');
        expect(followingNode.querySelector("p").nextElementSibling).toHaveTextContent(props.following.toString());
    });
});