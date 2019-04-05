/*
 * FILENAME:        api/__tests__/forgotPassword.test.js
 *
 * DESCRIPTION:     Test file for forgotPassword function
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

 // Import forgotPassword API function
 import { forgotPassword } from '../login';

describe('#forgotPassword() using async/await', () => {

    /*
    * This block will call forgotPassword with a known GOOD email.
    * We expect that the response from AV2
    * should be defined, equal to 'success' and the message
    * states 'Verification Code Email Sent.
    */
    it('recover password works with async/await', async() => {
        const data = await forgotPassword({
            email: 'bmondeeds@sixpackabs.com',
        });
        expect.assertions(4);
        expect(data).toBeDefined();
        expect(data.response).toEqual('success');
        expect(data.status).toEqual(200);
        expect(data.message).toEqual('Verification Code Email Sent.');
    });
    

    /*
    * This block will call forgotPassword with a known BAD email.
    * We expect that the response from AV2
    * should be defined, equal to 'error' and
    * a message = 'Account does not exist.'
    */
    it('should return unsuccessful message for Account does not exist.', async() => {
        const data = await forgotPassword({
            email: 'bogus@email.com',
        });
        expect.assertions(4);
        expect(data).toBeDefined();
        expect(data.response).toEqual('error');
        expect(data.status).toEqual(400);
        expect(data.message).toEqual('Account does not exist.');
    });

    /*
    * This block will call forgotPassword without a email field.
    * We expect that the response from AV2
    * should be defined, equal to 'error' and
    * a message = 'Missing email field.'
    */
    it('should return unsuccessful message for Missing email field.', async() => {
        const data = await forgotPassword({
            noemail: '123',
        });
        expect.assertions(4);
        expect(data).toBeDefined();
        expect(data.response).toEqual('error');
        expect(data.status).toEqual(400);
        expect(data.message).toEqual('Missing email field.');
    });
});