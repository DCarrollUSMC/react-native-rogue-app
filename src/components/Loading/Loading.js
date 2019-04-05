/*
 * FILENAME:        components/Loading/Loading.js
 *
 * DESCRIPTION:     Loading Component
 *  
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles/styles';

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}