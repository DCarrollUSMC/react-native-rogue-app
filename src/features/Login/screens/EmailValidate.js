/*
 * FILENAME:        features/Login/screens/EmailValidate.js
 *
 * DESCRIPTION:     Email Validation Screen for Login Feature.
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import lockImg from '../../../assets/img/login/lock-icon-black.png';
import spsImg from '../../../assets/img/login/sps-black-logo.png';
import styles from '../styles/styles';
import { defined } from '../../../app/helpers';
import SingleInput from '../../../components/SingleInput/SingleInput';
import ButtonSubmit from '../../../components/ButtonSubmit/ButtonSubmit';
import Pagination from '../../../components/Pagination/Pagination';
import { verifyCode, forgotPassword } from '../../../api/login';

export default class EmailValidate extends Component {

    // Set React-Navigation header title
    static navigationOptions = {
        headerBackground: (
            <LinearGradient colors={['#429321', '#28948B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.headerGradient}/>
        ),
        headerStyle: {height: 75, marginBottom: 20},
        headerTintColor: '#fff',
        title: 'Enter Validation Code'
    };

    constructor(props) {
        super(props);

        // Init blank state
        this.state = {
            vCode: '',
            message: null,
            isLoading: false
        };


        // Bind input data
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.resendCode       = this.resendCode.bind(this);
    }

    /**
     * Mutate and set verification code to state lowercase
     * 
     * @param string code 
     */
    handleCodeChange(code) {
        this.setState({ vCode: code.toUpperCase() });
    }

    /**
     * Helper function for email
     * 
     * @return string
     */
    retrieveEmail() {
        return this.props.navigation.getParam('email', 'no-email');
    }

    /**
     * Function to call other function
     * 
     * @return object
     */
    async resendCode() {
        return await forgotPassword({email: this.retrieveEmail()});
    }

    /**
     * Action method that will trigger the HTTP request to AV2 API
     */
    async handleFormSubmit() {

        const email = this.retrieveEmail();

        try {

            this.setState({ isLoading: true });
            // Format outgoing data
            let res = await verifyCode({
                code: this.state.vCode,
                email: email
            });
            let vCode = this.state.vCode;

            // Reset the form
            this.clearForm();

            // Did not receive a response form login.js
            if (!defined(res)) {
                // Make sure to add some behavior if we get back nothing.
                // Ex: Some sort of messaging
                this.setState({ message: 'Something went wrong!', isLoading: false });
            }
            // Check the returned response
            switch (res.response) {
                case 'success':
                    // Successful verification, set redirect to updatePassword with email
                    this.props.navigation.navigate('UpdatePassword', {email: email, code: vCode})
                    break;
                case 'error':
                    this.setState({ message: res.message, isLoading: false });
                    break;
                default:
                    this.setState({ message: res.message, isLoading: false });
                    break;
            }
        } catch(err) {
            console.log(err);
        }
    }

    clearForm() {
        this.setState({
            vCode: ''
        });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.fpcontainer}>
                <Pagination pageCount={3} currentPage={2}/>
                <Image style={styles.logo} source={spsImg}/>
                <Text style={styles.fptext}>We've sent you a verification email Enter your 5-digit Validation Code</Text>
                <SingleInput
                    source={lockImg}
                    placeholder="ex:12345"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.vCode}
                    onChangeText={this.handleCodeChange}
                    iconWidth={30} 
                    iconHeight={24}
                    bgColor='rgba(0,0,0,0)'
                    txtColor='#A1A1A1'
                    borderBottomColor="#A1A1A1"
                    placeholderTextColor='#A1A1A1'/>
                    {defined(this.state.message) &&
                        <Text style={styles.error}>{this.state.message}</Text>
                    }
                <ButtonSubmit formSubmit={this.handleFormSubmit} isLoading={this.state.isLoading} label="confirm code"/>
                <View style={styles.forgotPass}>
                    <Text style={[styles.fpQuestion, styles.forgotPassLink]}>
                        Don't see the code?
                    </Text>
                    <TouchableOpacity onPress={this.resendCode}>
                        <Text style={styles.mainlink}>
                            Resend Code
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}