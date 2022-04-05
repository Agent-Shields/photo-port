import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../index'

afterEach(cleanup);

describe('about component', () => {
    // renders About test

    // first test - verify component is rendering
    it('renders',  ()=> {
        render(<About />);
    });
    // 2nd test
    it('matches snapshot DOM node structure', ()=> {
        // render About
        const { asFragment } = render(<About />)
        expect(asFragment()).toMatchSnapshot();
    })



})