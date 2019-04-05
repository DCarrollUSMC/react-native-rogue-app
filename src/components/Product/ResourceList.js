/**
 * FILENAME:        components/Product/ResourceList.js
 *
 * DESCRIPTION:     Component for Resource List
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import ResourceCard from './ResourceCard';
import styles from '../../features/Product/styles/styles';

export default class ResourceList extends Component {
    
    render() {
        if(this.props.files.length === 0) {
            return (
                <View style={styles.resourceItem}>
                    <Text style={styles.text}>This Product Has No Resources</Text>
                </View>
            )
        }
        return this.props.files.map((file) => {
            return (
                <View key={file.id} style={styles.resourceItem}>
                    <ResourceCard name={file.name} source={file.source}/>
                </View>
            )
        });
    };
};

ResourceList.propTypes = {
    files: PropTypes.array.isRequired
}