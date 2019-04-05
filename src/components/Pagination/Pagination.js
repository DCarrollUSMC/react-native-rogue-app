/*
 * FILENAME:        components/Pagination/Pagination.js
 *
 * DESCRIPTION:     Pagination component that displays current and total pages
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { deviceWidth } from '../../app/helpers';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        /* var pages is an array that is used to display either the current page number (with background)
         * or page number. 
         * 
         *  PAGE_NUM_MARGIN is used to calculate marginLeft and marginRight on page numbers
         *  to evenly space each number. Styling is inline because props and PAGE_NUM_MARGIN are not global.
         */
        var pages = [];

        // Multiply by 2 to account for left and right margin
        const PAGE_NUM_MARGIN = ((deviceWidth()-140) / (this.props.pageCount*2));

        for (let i = 1; i < this.props.pageCount+1; i++) {
            if (this.props.currentPage == i) {
                pages.push(
                    //Key is needed on child element in order to not throw array warning.
                    <LinearGradient key={i} colors={['#429321', '#28948B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.paginationLink,{marginRight: PAGE_NUM_MARGIN, marginLeft: PAGE_NUM_MARGIN}]}>
                        <Text style={[styles.paginationCurrentPage, styles.paginationPageNum]}>{i}</Text>
                    </LinearGradient>
                )
            } else {
                pages.push(
                    <Text key={i} style={[styles.paginationPageNum,{marginRight: PAGE_NUM_MARGIN, marginLeft: PAGE_NUM_MARGIN}]}>{i}</Text>
                )
            }
        }

        return (
            <View style={styles.paginationContainer}>
                {pages}
            </View>
        )
    }
}

Pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    paginationLink: {
        borderRadius: 100,
        width:35,
        height:35,
    },
    paginationContainer: {
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        position: 'absolute',
        top: 0,
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    paginationCurrentPage: {
        color: '#FFF'
    },
    paginationPageNum: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
