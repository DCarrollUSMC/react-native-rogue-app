/*
 * FILENAME:        api/login.js
 *
 * DESCRIPTION:     API methods for Home Feature
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */
import api from './client';
import { appStorage } from '../app/storage';

export async function getUser() {
    // URL endpoint for account
    let url = '/account';
    let token = await appStorage.getToken();

    // Make request
    let response = api(token).get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error handling
            return error.response.data;
        });
    return response;
}

export async function getProductList(userId) {
    let url = `/account/${userId}/products`;
    let token = await appStorage.getToken();

    let response = api(token).get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response.data;
        })
    return response;
}