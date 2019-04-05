/*
 * FILENAME:        components/NetworkIssue/NetworkIssue.js
 *
 * DESCRIPTION:     Network Issue Component
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Loading from '../Loading/Loading';

export default class NetworkIssue extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    }

    forceUpdateHandler() {
        this.setState({ loading: true })
        this.forceUpdate()
        this.timer = setInterval(() => {
            this.setState({ loading: false })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        if(this.state.loading) {
            return <Loading />
        }
        return (
            <View style={styles.networkContainer}>
                <Text style={styles.text}>We're having trouble connecting to the internet.</Text>
                <Text style={styles.text}>Please check your connection.</Text>
                <TouchableOpacity>
                            <ButtonSubmit label="Reload" formSubmit={this.forceUpdateHandler} width={150}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    networkContainer: {
        backgroundColor: '#222',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF'
    }
})