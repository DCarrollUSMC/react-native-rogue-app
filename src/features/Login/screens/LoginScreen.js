/*
 * FILENAME:        features/Login/screens/LoginScreen.js
 *
 * DESCRIPTION:     Primary screen for Login feature.
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

// React
import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, View, Image, KeyboardAvoidingView, Text, StatusBar } from 'react-native';

// Components
import SingleInput from '../../../components/SingleInput/SingleInput';
import ButtonSubmit from '../../../components/ButtonSubmit/ButtonSubmit';
import NetworkIssue from '../../../components/NetworkIssue/NetworkIssue';

// Import helper functions
import login from '../../../api/login';
import { defined, isConnected } from '../../../app/helpers';
import { appStorage } from '../../../app/storage';

// Validation
import validate from '../../../app/validation_wrapper';

// Styles and assets
import styles from '../styles/styles';
import usernameImg from '../../../assets/img/login/username.png';
import passwordImg from '../../../assets/img/login/password.png';
import kettleLoginImg from '../../../assets/img/login/kettle-login.jpg';
import spsImg from '../../../assets/img/login/sps-logo.png';

export default class LoginScreen extends Component {

    /**
     * Constructor
     *
     * @param obj props
     */
    constructor(props) {
        super(props);

        // Init blank state
        this.state = {
            email: '',
            password: '',
            emailError: '',
            message: null,
            isLoading: false,
            connInfo: null
        };

        // Bind input data
        this.handleEmailChange    = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFormSubmit     = this.handleFormSubmit.bind(this);
    }

    async componentDidMount() {
        this.setState({ connInfo: await isConnected() })
    }

    /**
     * Mutate and set username/email to state lowercase
     *
     * @param string user
     */
    handleEmailChange(email) {
        this.setState({ email: email.toLowerCase() });
    }

    /**
     * Set password to state
     *
     * @param string pass
     */
    handlePasswordChange(pass) {
        this.setState({ password: pass });
    }

    /**
     * Action method that will trigger the HTTP request to AV2 API
     */
    async handleFormSubmit() {
        try {
            // Form validation
            this.setState({ emailError: validate('email', this.state.email) })

            if (!defined(this.state.emailError)) {
                this.setState({ isLoading: true })
                // Format outgoing data
                let res = await login({
                    email: this.state.email,
                    password: this.state.password
                });

                // Did not receive a response form login.js
                if (!defined(res)) {
                    // Make sure to add some behavior if we get back nothing.
                    // Ex: Some sort of messaging
                    this.setState({ message: 'Something went wrong!', isLoading: false });
                }

                // Reset the form
                this.clearForm();

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
                }
            }
        } catch(err) {
            console.log(err);
        }
    }

    _onPress() {
        this.props.navigation.navigate('ForgotPass');
    }

    clearForm() {
        this.setState({
            email: '',
            password: ''
        });
    }

    /**
     * Render component
     */
    render(){
        if(this.state.connInfo === false) {
            return <NetworkIssue />
        }
        return(
            <ImageBackground source={kettleLoginImg} imageStyle={{}} style={styles.loginBG}>
                <StatusBar barStyle='light-content' />
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <Image style={styles.logo} source={spsImg}/>
                    {defined(this.state.message) &&
                        <Text style={styles.error}>{this.state.message}</Text>
                    }
                    <SingleInput
                        source={usernameImg}
                        placeholder="Email"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        onChangeText={this.handleEmailChange}
                        value={this.state.email}
                        iconWidth={22}
                        iconHeight={22}
                        placeholderTextColor='#FFF'
                        bgColor='#333'
                        txtColor='#FFF'
                        underlineColorAndroid='transparent'
                        borderBottomColor='transparent'
                        error={this.state.emailError}
                    />
                    <SingleInput
                        source={passwordImg}
                        secureTextEntry={true}
                        placeholder="Password"
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={this.handlePasswordChange}
                        value={this.state.password}
                        iconWidth={22}
                        iconHeight={22}
                        placeholderTextColor='#FFF'
                        bgColor='#333'
                        txtColor='#FFF'
                        underlineColorAndroid='transparent'
                        borderBottomColor='transparent'
                    />
                    <ButtonSubmit formSubmit={this.handleFormSubmit} label="Login" isLoading={this.state.isLoading}/>
                    <View style={styles.forgotPass}>
                        <Text style={[styles.text, styles.forgotPassLink]}>
                            Forgot Password?
                        </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                            <Text style={styles.mainlink}>
                                Recover here
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}