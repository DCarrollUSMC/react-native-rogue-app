/*
 * FILENAME:        api/client.js
 *
 * DESCRIPTION:     API methods for Login Feature
 * DEV NOTE: Essentially we intend to have the token be grabbed and set to the axios instance headers here.
 * In order to set the global headers and pass back a non-Promise axios instance we would
 * have to accept instead of trying to retrieve the token form within this file to prevent
 * from redundant code to parse out a Promise.
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import axios from 'axios';
import { AV2 } from './constants';

/**
 *  Return back an Axios instance with pre set configurations
 *
 * @param string token
 * @return Axios wrapper
 */
export default function api(token) {
    // Create the axios instance with the passed in token.
    const client = axios.create({
        baseURL: AV2,
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    return client;
}