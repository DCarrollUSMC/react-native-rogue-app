/*
 * FILENAME:        routing/mainStackNavigator.js
 *
 * DESCRIPTION:     Primary stack navigator for the application
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

 // Import screens for navigator
import SplashScreen from '../features/Splash/screens/SplashScreen';

// Import Stack Navigators
import AuthStack from './authStackNavigator';
import ProductStack from './productStackNavigator';
import DashStack from './dashTabNavigator';

// Import react-navigation stack navigator and app container
import {
    createSwitchNavigator,
    createAppContainer
 } from 'react-navigation';

export default createAppContainer(createSwitchNavigator({
        Splash: SplashScreen,
        Auth: AuthStack,
        App: DashStack,
        Product: ProductStack
    },
    {
        initialRouteName: 'Splash',
    }
));