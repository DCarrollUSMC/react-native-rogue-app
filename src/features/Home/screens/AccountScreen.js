import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { appStorage } from '../../../app/storage';

import ButtonSubmit from '../../../components/ButtonSubmit/ButtonSubmit';

import styles from '../styles/styles';

export default class Account extends Component {

    _signOutAsync = async () => {
        await appStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <ButtonSubmit label="Log Out" formSubmit={this._signOutAsync} />
            </View>
        )
    }
}