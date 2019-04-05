import { AsyncStorage } from 'react-native';

export const appStorage = {
    async setItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async getItem(key) {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async getToken() {
        try {
            return await AsyncStorage.getItem('USER_TOKEN');
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async clear() {
        try {
            return await AsyncStorage.clear();
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message)
        }
    }
};