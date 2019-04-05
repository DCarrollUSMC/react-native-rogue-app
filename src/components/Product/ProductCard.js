/**
 * FILENAME:        components/Product/ProductCard.js
 *
 * DESCRIPTION:     Component for Product Cards
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { Badge } from 'native-base';

import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

class ProductCard extends Component {

    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        this.props.navigation.navigate('Product', {
            slug: this.props.slug
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.container}>
                    {/* Image */}
                    <Image source={{ uri: this.props.source }} style={styles.image} />
                    <View style={styles.bottomContainer}>
                        <View style={styles.cardTextContainter}>
                            {/* Left column - Title & Summary */}
                            <View style={styles.cartTextLeft}>
                                <Text style={styles.title}>{this.props.title}</Text>
                                {/* <Text style={styles.summary}>Some Text here and there...</Text> */}
                            </View>

                            {/* Right column - Badges */}
                            <View style={styles.cartTextRight}>
                                <Badge style={styles.videoCountBadge}>
                                    <Text style={styles.videoCountBadgeTextLeft}>{this.props.vidCount}</Text>
                                </Badge>
                                <Text style={styles.videoCountBadgeTextRight}>Videos</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.btnContainer}>
                            <ButtonSubmit label="Start Course" formSubmit={this._onPress} containerMargin={0} containerBRR={10} containerBLR={10}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(ProductCard);

ProductCard.propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    // Main container
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginVertical: 20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },

    // Thumbnail
    image: {
        height: 150,
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        resizeMode: 'cover'
    },

    bottomContainer: {
        backgroundColor: '#333',
    },

    // Card copy
    cardTextContainter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingVertical: 20,
        paddingHorizontal: 15,
    },

    cartTextLeft: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'stretch',
    },

    title: {
        fontSize: 15,
        fontWeight: '500',
        color: '#FFF'
    },

    summary: {
        fontSize: 13,
        fontWeight: '300',
        color: '#8f9091',
        paddingTop: 10
    },

    cartTextRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
        fontWeight: '200',
        fontSize: 12
    },

    videoCountBadge: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: '#7a7aff',
        marginHorizontal: 5,
        minWidth: 25,
        shadowColor: '#7a7aff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
    },

    videoCountBadgeTextLeft: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '700'
    },

    videoCountBadgeTextRight: {
        color: '#FFF',
        fontSize: 11,
    },

    videoCountBadgeText: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: '600'
    },
})