/*
 * FILENAME:        routing/dashTabNavigator.js
 *
 * DESCRIPTION:     Tab Navigator for Dashboard Screens
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import { createBottomTabNavigator } from 'react-navigation';
import AccountScreen from '../features/Home/screens/AccountScreen';
import { getIcon } from '../app/helpers';

export default DashStack = createBottomTabNavigator({
    Products: {
        screen: ProductStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return getIcon('home', 20, tintColor)
            }
        }
    },
    Account: {
        screen: AccountScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return getIcon('user', 20, tintColor)
            }
        }
    }
},{
    tabBarOptions: {
        style: {
            backgroundColor: '#000'
        },
        activeTintColor: '#00a79d',
        inactiveTintColor: '#FFF'
    }
});