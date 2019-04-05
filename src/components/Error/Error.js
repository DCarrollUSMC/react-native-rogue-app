/*
 * FILENAME:        components/Error/Error.js
 *
 * DESCRIPTION:     Error Component
 *  
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/styles';

export default class Error extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.error}>Error: {this.props.error}</Text>
        </View>
        )
    }
}

Error.propTypes = {
    error: PropTypes.string.isRequired,
}