/*
 * FILENAME:        routing/productStackNavigator.js
 *
 * DESCRIPTION:     Stack Navigator for Product Screens
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../features/Home/screens/HomeScreen';
import ProductScreen from '../features/Product/screens/ProductScreen';
import Logo from '../components/Logo/Logo';

export default ProductStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Product: {
        screen: ProductScreen
    }
}, {
    defaultNavigationOptions: {
        headerTitle: (<Logo style={{ height: 40, width: 40 }}/>),
        headerStyle: {
            backgroundColor: '#222',
            height: 75,
            elevation: 0,
            borderBottomWidth: 0
        },
        headerTintColor: '#fff'
    },
    headerLayoutPreset: 'center' 
})