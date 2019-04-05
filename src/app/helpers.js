/*
 * FILENAME:        api/helper.js
 *
 * DESCRIPTION:     This file should be used for storing reusable logic for API connections.
 *
 * Author: Sixpack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import Dimensions from 'Dimensions';
import { Icon } from 'native-base';
import React from 'react';
import { NetInfo } from 'react-native';

/**
 * Check if the value given is defined
 *
 * @param  val mixed
 * @return bool
 */
export function defined(val, notZero = false, emptyString = false, validIndex = false) {
    let result = (typeof val !== 'undefined' && val !== false && val !== null);

    if (notZero) {
        return result && (val != 0);
    } else if (emptyString) {
        return result && val !== '';
    } else if (validIndex) {
        return result && val >= 0;
    } else {
        return result;
    }
}

/**
 * Return back the device width
 *
 * @return int|string
 */
export function deviceWidth() {
    return Dimensions.get('window').width;
}

/**
 * getIcon function for FontAwesome
 *
 * @param {string} label
 * @param {int} size
 * @param {string} tintColor
 * @return React.Component
 */

export function getIcon(label, size, tintColor) {
    return <Icon name={label} type="FontAwesome" style={{ fontSize: size, color: tintColor }} />
}

/**
 * Removes HTML and Curly Braces from string
 * 
 * @param {string} string 
 */
export function normalizeString(string) {
    return string.replace(/<(.|\n)*?>|[{}]/g, '');
}

/**
 * Determine whether network is connected
 * 
 * @return {boolean} isConnected
 */
export async function isConnected() {
    return await NetInfo.isConnected.fetch()
}

/**
 * Get network connection info with NetInfo
 * 
 * @return {object} connectionInfo
 */
export async function getConnectionInfo() {
    return await NetInfo.getConnectionInfo()
}