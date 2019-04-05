/*
 * FILENAME:        components/ButtonSubmit/ButtonSubmit.js
 *
 * DESCRIPTION:     Submit button component with animations
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { deviceWidth } from '../../app/helpers';

const DEVICE_WIDTH = deviceWidth();
const MARGIN = 40;
const containerWidth = (DEVICE_WIDTH - MARGIN);

export default class ButtonSubmit extends Component {
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        if (this.props.formSubmit != null) {
            this.props.formSubmit();
        }
    }

    render() {

        /**
         * BLR: Bottom Left Radius
         * BRR: Bottom Right Radius
         * Etc.
         */
        const containerMargin= this.props.containerMargin
        const containerBLR = this.props.containerBLR;
        const containerBRR = this.props.containerBRR;
        const containerTRR = this.props.containerTRR;
        const containerTLR = this.props.containerTLR;
        const fontSize = this.props.fontSize;
        const width = this.props.width;
        return (
            <View style={[styles.container, {margin: containerMargin}]}>
                <View style={{width: width}}>
                        <TouchableOpacity
                                onPress={this._onPress}
                                activeOpacity={1}>
                                <LinearGradient colors={['#429321', '#28948B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.linearGradient, {width: width, borderBottomLeftRadius: containerBLR, borderBottomRightRadius: containerBRR, borderTopLeftRadius: containerTLR, borderTopRightRadius:containerTRR}]}>
                                        {this.props.isLoading ? (
                                                <ActivityIndicator size="large" color="#FFF" style={[styles.text, {fontSize: fontSize}]}/>
                                        ) : (
                                                <Text style={[styles.text, {fontSize: fontSize}]}>{this.props.label.toUpperCase()}</Text>
                                        )}
                                </LinearGradient>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

ButtonSubmit.defaultProps = {
    width: containerWidth,
    containerMargin: 10,
    containerBRR: 0,
    containerBLR: 0,
    containerTRR: 0,
    containerTLR: 0,
    fontSize: 18,
}

ButtonSubmit.propTypes = {
    width: PropTypes.number,
    containerMargin: PropTypes.number,
    containerBRR: PropTypes.number,
    containerBLR: PropTypes.number,
    containerTRR: PropTypes.number,
    containerTLR: PropTypes.number,
    fontSize: PropTypes.number,
  }

const styles = StyleSheet.create({
    container: {
        top: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    linearGradient: {
        borderRadius: 5,
        height:50,
    },
    text: {
        margin:10,
        color: 'white',
        fontWeight: '800',
        letterSpacing: 2,
        textAlign: 'center',
        backgroundColor: 'transparent',
    }
});
