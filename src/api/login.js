/*
 * FILENAME:        api/login.js
 *
 * DESCRIPTION:     API methods for Login Feature
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import { LOCAL_AV2 } from './constants';
import { TEST_AV2 } from './constants';
import { AV2 } from './constants';
import axios from 'axios';

export default async function login(data) {
    // URL endpoint for login
    let url = AV2 + '/login';

    // Make request
    let response = await axios.post(url, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error handling
            return error.response.data;
        });

    return response;
}

export async function forgotPassword(data) {
    //URL endpoint for password recovery
    let url = AV2 + '/forgot/request';
    
    //Make request
    let response = await axios.post(url, data)
        .then((response) => {
            response.data.status = response.status;
            return response.data;
        })
        .catch((error) => {
            //Error handling
            error.response.data.status = error.response.status;
            return error.response.data
        })
    return response;
}

export async function verifyCode(data) {
    //URL endpoint for password recovery
    let url = AV2 + '/forgot/code';

    //Make request
    let response = await axios.post(url, data)
        .then((response) => {
            // response.data.status = response.status;
            response.data.status = response.status;
            return response.data;
        })
        .catch((error) => {
            //Error handling
            // error.response.data.status = error.response.status;
            error.response.data.status = error.response.status;
            return error.response.data
        })
    return response;
}

export async function resetPassword(data) {
    //URL endpoint for password recovery
    let url = AV2 + '/forgot/reset';
    
    //Make request
    let response = await axios.post(url, data)
        .then((response) => {
            response.data.status = response.status;
            return response.data;
        })
        .catch((error) => {
            //Error handling
            error.response.data.status = error.response.status;
            return error.response.data
        })
    return response;
}