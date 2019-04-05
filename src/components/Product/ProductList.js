/**
 * FILENAME:        components/Product/ProductList.js
 *
 * DESCRIPTION:     Component for Product List
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ProductCard from '../Product/ProductCard';
import Loading from '../Loading/Loading';
import NetworkIssue from '../NetworkIssue/NetworkIssue';
import { isConnected } from '../../app/helpers';

export default class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            connInfo: null
        }
    }

    _keyExtractor = (item) => item.id.toString()

    /**
     * Call componentDidMount asynchronously to determine
     * if the user has a network connection and set local state
     */
    async componentDidMount() {
        this.setState({ connInfo: await isConnected() })
    }

    render() {
        const { productList } = this.props;
        // Show Loading... if we don't have products to display
        if(this.props.loading) {
            return <Loading />
        // Let the user know if they don't have network connection
        } else if (this.state.connInfo === false){
            return (
                <NetworkIssue />
            )
        // Show No Products if productList array is empty
        } else if (productList.length === 0) {
            return <Text style={styles.text}>No Products!</Text>
        // Return FlatList of ProductCards
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={productList}
                        renderItem={({ item }) => <ProductCard source={item.mobile_thumbnail} title={item.name} summary={item.summary} slug={item.slug} vidCount={item.video_count}/>}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            )
        }
    }
}

ProductList.propTypes = {
    productList: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 24
    },
    text: {
        color: '#FFF'
    }
})