import React, { Component } from 'react';
import { Icon } from 'native-base';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../features/Product/styles/styles';

export default class ProductOverview extends Component {
    constructor(props) {
        super(props);
        this.loadPlaylist = this.loadPlaylist.bind(this);
    };

    /**
     * this.props.tabswitch is set to the function tocSwitch on product screen.
     * we take in id which is the index of the playlist on the product.
     * tabSwitch calls tocSwitch and passes id in order for parent component to 
     * switch tabs. 
     * 
     * @param number id 
     */
    loadPlaylist(id) {
        this.props.tabSwitch(id);
    }

    render() {
        let playlists = this.props.dataArray.map((playlist,index) => {
            return (
                <ScrollView key={index}>
                    <TouchableOpacity onPress={this.loadPlaylist.bind(this, index)}>
                        <View style={styles.accheader}>
                            <View style={styles.accheaderNumber}>
                                <Text style={styles.numberText}>{index+1}</Text>
                            </View>
                            <Text style={styles.tocheaderTitle}>{playlist.title}</Text>
                            <Icon style={styles.accheaderIcon} name="arrow-forward" />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            )
        })
        return playlists;
    }
}

ProductOverview.propTypes = {
    dataArray: PropTypes.array.isRequired,
    tabSwitch: PropTypes.func.isRequired
}