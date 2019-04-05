/*
 * FILENAME:        api/product.js
 *
 * DESCRIPTION:     API methods for Product Feature
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */
import api from './client';
import { appStorage } from '../app/storage';

export async function getProduct(userId, slug) {
    let url = `/account/${userId}/products/${slug}`;
    let token = await appStorage.getToken();

    let response = api(token).get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        })
    return response;
}