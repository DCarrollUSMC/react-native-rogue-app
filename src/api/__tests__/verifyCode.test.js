/*
 * FILENAME:        api/__tests__/verifyCode.test.js
 *
 * DESCRIPTION:     Test file for verifyCode function
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

 // Import verifyCode API function
 import { verifyCode } from '../login';

describe('#verifyCode() using async/await', () => {

    /*
    * This block will call verifyCode with a BAD code.
    * We expect that the response from AV2
    * should be defined, equal to 'error' and
    * a message = 'Invalid Code.'
    */
    it('should return unsuccessful message for Account does not exist.', async() => {
        const data = await verifyCode({
            code: '12345',
            email: 'bmondeeds@sixpackabs.com'
        });
        console.log(data);
        expect.assertions(4);
        expect(data).toBeDefined();
        expect(data.response).toEqual('error');
        expect(data.status).toEqual(400);
        expect(data.message).toEqual('Invalid Code.');
    });

    /*
    * This block will call verifyCode with an empty code.
    * We expect that the response from AV2
    * should be defined, equal to 'error' and
    * a message = 'Invalid Code.'
    */
    it('should return unsuccessful message for Invalid Code.', async() => {
        const data = await verifyCode({
            nocode: '12345',
            email: 'bmondeeds@sixpackabs.com'
        });
        expect.assertions(4);
        expect(data).toBeDefined();
        expect(data.response).toEqual('error');
        expect(data.status).toEqual(400);
        expect(data.message).toEqual('Missing Verification Code.');
    });
});