/*
 * FILENAME:        api/__tests__/login.test.js
 *
 * DESCRIPTION:     Test file for login function
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

 // Import login API function
import login from '../login';

describe('#login() using async/await', () => {

    /*
    * This block will call login with a known GOOD email
    * and password.  We expect that the response from AV2
    * should be defined, equal to 'success' and the token
    * must be defined.
    */
    it('login test works with async/await', async() => {
        const data = await login({
            email: 'bmondeeds@sixpackabs.com',
            password: 'test'
        });
        expect.assertions(3);
        expect(data).toBeDefined();
        expect(data.response).toEqual('success');
        expect(data.result.token).toBeDefined();
    });

    /*
    * This block will call login with a known BAD email
    * and password.  We expect that the response from AV2
    * should be defined, equal to 'error', code = 1, and 
    * a message = 'Invalid email or password'
    */
    it('should return unsuccessful message for bad password/email', async() => {
        const data = await login({
            email: 'bmondeeds@sixpackabs.com',
            password: 'badpassword'
        });
        expect.assertions(4);
        expect(data).toBeDefined();
        expect(data.response).toEqual('error');
        expect(data.code).toEqual(1);
        expect(data.message).toEqual('Invalid email or password');
    });
});