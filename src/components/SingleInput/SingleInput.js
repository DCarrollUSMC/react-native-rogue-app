/*
 * FILENAME:        components/SingleInput/SingleInput.js
 *
 * DESCRIPTION:     Individual user input field component with optional image
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
import { defined } from '../../app/helpers';

export default class SingleInput extends Component {

    render() {
        const iconStyle = {
            width: this.props.iconWidth,
            height: this.props.iconHeight,
        }
        const txtBoxStyle = {
            color: this.props.txtColor,
            backgroundColor: this.props.bgColor,
            borderBottomColor: this.props.borderBottomColor,
            borderBottomWidth: 1
        }

        return (
            <View style={styles.inputOuterWrapper}>
                <View style={styles.inputWrapper}>
                    {this.props.source &&
                        <Image source={this.props.source} style={[styles.inlineImg, iconStyle]} />
                    }
                    <TextInput
                    value={this.props.value}
                    style={[styles.input, txtBoxStyle]}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor={this.props.placeholderTextColor}
                    underlineColorAndroid='transparent'
                    onChangeText={this.props.onChangeText}
                    />
                </View>
                {defined(this.props.error, false, true) &&
                    <Text style={{color: 'red'}}>{this.props.error}</Text>
                }
            </View>
        );
    }
}

SingleInput.propTypes = {
    source: PropTypes.number,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
    value: PropTypes.string,
    iconWidth: PropTypes.number,
    iconHeight: PropTypes.number,
    bgColor: PropTypes.string,
    txtColor: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    error: PropTypes.string
};

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    input: {
        width: DEVICE_WIDTH - 40,
        height: 50,
        marginHorizontal: 10,
        paddingLeft: 65,
        borderRadius: 5,
    },
    inputOuterWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
    },
    inputWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        left: 35
    },
});