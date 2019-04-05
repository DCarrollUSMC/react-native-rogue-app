/*
 * FILENAME:        features/Login/screens/UpdatePassword.js
 *
 * DESCRIPTION:     Update Password Screen for Forgot Password Feature.
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import {Text, KeyboardAvoidingView, Platform, Image} from 'react-native';
import ButtonSubmit from '../../../components/ButtonSubmit/ButtonSubmit';
import Pagination from '../../../components/Pagination/Pagination';
import SingleInput from '../../../components/SingleInput/SingleInput';
import { defined } from '../../../app/helpers';
import { resetPassword } from '../../../api/login';
import { validatePassword } from '../../../app/validation_wrapper';
import { appStorage } from '../../../app/storage';

import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles/styles';
import passwordImg from '../../../assets/img/login/password-icon-dark.png';
import spsImg from '../../../assets/img/login/sps-black-logo.png';

export default class UpdatePassword extends Component {
    constructor(props) {
        super(props);

        // Init blank state
        this.state = {
            password: '',
            password_confirmation: '',
            confirmPasswordError: '',
            message: null,
            isLoading: false
        }

        //Bind email & form submit
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    /**
     * Set password to state
     *
     * @param string passwordTxt
     */
    handlePasswordChange(passwordTxt) {
        this.setState({password: passwordTxt.trim()})
    }

    /**
     * Set password_confirmation to state
     *
     * @param string confirmPasswordTxt
     */
    handleConfirmPassword(confirmPasswordTxt) {
        this.setState({password_confirmation: confirmPasswordTxt.trim()})
    }

    /**
     * Action method that will trigger the HTTP request to AV2 API
     */

    async handleFormSubmit() {
        const { password, password_confirmation, confirmPasswordError } = this.state;
        const { navigation } = this.props;
        try {
            var constraints = {
                password_confirmation: {
                    equality: {
                        attribute: "password",
                        message: "does not match.",
                        comparator: function(v1,v2) {
                            return JSON.stringify(v1) === JSON.stringify(v2)
                        }
                    }
                }
            }
            //Grab email from last screen, if it doesn't exist default to no-email
            const email = navigation.getParam('email', 'no-email')
            const code = navigation.getParam('code', 'no-code')
            this.setState({confirmPasswordError: validatePassword({password: password, password_confirmation: password_confirmation}, constraints, 'password_confirmation')})
            
            if (!defined(confirmPasswordError)) {
                this.setState({ isLoading: true})

                // Format outgoing data
                let res = await resetPassword({
                    password: password,
                    password_confirmation: password_confirmation,
                    email: email,
                    code: code
                });

                // Did not receive a response form login.js
                if (!defined(res)) {
                    // Make sure to add some behavior if we get back nothing.
                    // Ex: Some sort of messaging
                    this.setState({ message: 'Something went wrong!', isLoading: false });
                }

                // Check the returned response
                switch (res.response) {
                    case 'success':
                        // Successful authentication, set state and redirect to dashboard
                        appStorage.setItem('USER_TOKEN', res.result.token);
                        this.props.navigation.navigate('App');
                        break;
                    case 'error':
                        this.setState({ message: res.message, isLoading: false });
                        break;
                    default:
                        this.setState({ message: 'Something went wrong!', isLoading: false });
                        break
                }
            }
        } catch(err) {
            console.log(err);
        }
    }

    static navigationOptions = {
        headerBackground: (
            <LinearGradient colors={['#429321', '#28948B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.headerGradient}/>
        ),
        headerStyle: {height: 75, marginBottom: 20},
        headerTintColor: '#fff',
        title: 'Password Reset',
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.select({ios:()=>-50,android:()=>-50})()} style={styles.fpcontainer}>
                <Pagination pageCount={3} currentPage={3}/>
                <Image style={styles.logo} source={spsImg}/>
                <Text style={styles.fptext}>Enter your new password</Text>
                <SingleInput
                    source={passwordImg}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    iconWidth={16} 
                    iconHeight={22}
                    bgColor='rgba(0,0,0,0)'
                    txtColor='#A1A1A1'
                    borderBottomColor="#A1A1A1"
                    placeholderTextColor='#A1A1A1'
                    error={this.state.passwordError}/>
                <SingleInput
                    source={passwordImg}
                    secureTextEntry={true}
                    placeholder="Retype Password"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.password_confirmation}
                    onChangeText={this.handleConfirmPassword}
                    iconWidth={16} 
                    iconHeight={22}
                    bgColor='rgba(0,0,0,0)'
                    txtColor='#A1A1A1'
                    borderBottomColor="#A1A1A1"
                    placeholderTextColor='#A1A1A1'
                    error={this.state.confirmPasswordError}/>
                    {defined(this.state.message) &&
                        <Text style={styles.error}>{this.state.message}</Text>
                    }
                <ButtonSubmit formSubmit={this.handleFormSubmit} title='Route To Login' label='Reset Password' isLoading={this.state.isLoading}/>
            </KeyboardAvoidingView>
        )
    }
}
  