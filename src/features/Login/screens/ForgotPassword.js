/*
 * FILENAME:        features/Login/screens/ForgotPassword.js
 *
 * DESCRIPTION:     Forgot Password Screen for Login Feature.
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */
// React
import React, { Component } from 'react';
import {Text, KeyboardAvoidingView, Image, Button, View, TouchableOpacity} from 'react-native';

// Components
import ButtonSubmit from '../../../components/ButtonSubmit/ButtonSubmit';
import Pagination from '../../../components/Pagination/Pagination';
import SingleInput from '../../../components/SingleInput/SingleInput';
import LinearGradient from 'react-native-linear-gradient';
import { defined } from '../../../app/helpers';
import { forgotPassword } from '../../../api/login';

// Validation
import validate from '../../../app/validation_wrapper';

// Styles and assets
import styles from '../styles/styles';
import emailImg from '../../../assets/img/login/envelope-icon.png';
import spsImg from '../../../assets/img/login/sps-black-logo.png';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        // Init blank state
        this.state = {
            email: '',
            emailError: '',
            message: null,
            isLoading: false
        }

        //Bind email & form submit
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    /**
     * Set email to state
     *
     * @param string emailTxt
     */
    handleEmailChange(emailTxt) {
        this.setState({email: emailTxt.trim()})
    }

    /**
     * Action method that will trigger the HTTP request to AV2 API
     */
    async handleFormSubmit() {
        try {
            this.setState({emailError: validate('email', this.state.email)})

            if (!defined(this.state.emailError)) {
                this.setState({ isLoading: true})

                // Format outgoing data
                let res = await forgotPassword({
                    email: this.state.email,
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
                        this.props.navigation.navigate('EmailValidate', {email: this.state.email});
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
        title: 'Password Recovery',
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.fpcontainer}>
                <Pagination pageCount={3} currentPage={1}/>
                <Image style={styles.logo} source={spsImg}/>
                <Text style={styles.fptext}>Enter your recovery email below to receive a validation code</Text>
                <SingleInput
                    source={emailImg}
                    placeholder="Email"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                    iconWidth={30}
                    iconHeight={18}
                    bgColor='rgba(0,0,0,0)'
                    txtColor='#A1A1A1'
                    borderBottomColor="#A1A1A1"
                    placeholderTextColor='#A1A1A1'
                    error={this.state.emailError}/>
                {defined(this.state.message) &&
                    <Text style={styles.error}>{this.state.message}</Text>
                }
                <ButtonSubmit formSubmit={this.handleFormSubmit} title='Route To EmailValidate' label='Send Email Verification' isLoading={this.state.isLoading}/>
                <View style={styles.forgotPass}>
                    <Text style={[styles.fpQuestion, styles.forgotPassLink]}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.mainlink}>
                            Login Here
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
