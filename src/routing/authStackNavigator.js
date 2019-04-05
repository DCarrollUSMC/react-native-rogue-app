/*
 * FILENAME:        routing/authStackNavigator.js
 *
 * DESCRIPTION:     Stack Navigator for the Auth Screens
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */
import { createStackNavigator } from 'react-navigation';
import ForgotPassword from '../features/Login/screens/ForgotPassword';
import EmailValidate from '../features/Login/screens/EmailValidate';
import UpdatePassword from '../features/Login/screens/UpdatePassword';
import LoginScreen from '../features/Login/screens/LoginScreen';

export default AuthStack = createStackNavigator({
    Login: { 
        screen: LoginScreen,
        navigationOptions: () => ({
            header: null,
          }),
    },
    ForgotPassword: {
        screen: ForgotPassword
    },
    EmailValidate: {
        screen: EmailValidate
    },
    UpdatePassword: {
        screen: UpdatePassword
    }
});