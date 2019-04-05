/**
 * FILENAME:        components/Product/ResourceCard.js
 *
 * DESCRIPTION:     Component for Resource Cards
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    StatusBar,
    YellowBox
    } from 'react-native';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pauseVideo } from '../../redux/actions/actions';
import styles from '../../features/Product/styles/styles';
import Pdf from 'react-native-pdf';

import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

YellowBox.ignoreWarnings([
    'Module RNFetchBlob requires main queue setup'
])

function mapDispatchToProps(dispatch) {
    return {
        pauseVideo: paused => dispatch(pauseVideo(paused))
    };
 }
class ResourceCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    toggleModal(visible) {
        this.setState({ showModal: visible });
        visible ? this.props.pauseVideo(true) : this.props.pauseVideo(false);
    }

    render() {
        return (
            <View style={styles.resourceContainer}>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}>
                    <View style={styles.container}>
                    <StatusBar barStyle='dark-content' />
                        <Pdf source={{ uri: this.props.source }} style={styles.pdf} />
                        <TouchableHighlight style={styles.closeButton} onPress={() => {this.toggleModal(!this.state.showModal)}}>
                            <Icon type='AntDesign' name='closecircle' style={styles.closeIcon}/>
                        </TouchableHighlight>
                    </View>
                </Modal>
                <View style={styles.resourceInner}>
                    <View style={styles.accheaderNumber}>
                        <Text style={styles.numberText}>PDF</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.resourceTitle}>{this.props.name}</Text>
                        <TouchableOpacity>
                            <ButtonSubmit label="View PDF" formSubmit={() => this.toggleModal(true)} width={150}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
}

ResourceCard.propTypes = {
    name: PropTypes.string.isRequired
}

export default connect(null, mapDispatchToProps)(ResourceCard);