/*
 * FILENAME:        components/SingleInput/__tests__/SingleInput.test.js
 *
 * DESCRIPTION:     Test file for SingleInput Component
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React from 'react';
import renderer from 'react-test-renderer';

import SingleInput from '../SingleInput';

describe('SingleInput', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <SingleInput 
                placeholder='Test Input'
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});