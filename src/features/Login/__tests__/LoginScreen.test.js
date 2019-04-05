/*
 * FILENAME:        features/Login/__tests__/LoginScreen.test.js
 *
 * DESCRIPTION:     Test file for LoginScreen Component
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React from 'react';
import renderer from 'react-test-renderer';

import LoginScreen from '../screens/LoginScreen';

// Mock SingleInput component to get LoginScreen to render in jest (ignoring SingleInput)
jest.mock('../../../components/SingleInput/SingleInput', () => 'SingleInput');

describe('LoginScreen', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <LoginScreen />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});