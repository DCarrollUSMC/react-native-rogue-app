/*
 * FILENAME:        features/Login/screens/SplashScreen.js
 *
 * DESCRIPTION:     Primary screen for Splash feature.
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';

import { appStorage } from '../../../app/storage';

import styles from '../styles/styles'

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

     // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async() => {
        const userToken = await appStorage.getItem('USER_TOKEN');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    render(){
        return(
            <View behavior="padding" style={styles.container}>
                <StatusBar barStyle='light-content' />
                <ActivityIndicator size='large' color='#FFF'/>
            </View>
        )
    }
}