/*
 * FILENAME:        components/VideoAccordion/VideoAccordion.js
 *
 * DESCRIPTION:     Renders accordion collapsible menu with playlists, videos, 
 *                  and thumbnails.
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */
import React, { Component } from 'react';
import { Accordion, Icon, Thumbnail } from 'native-base';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { setNowPlaying } from '../../redux/actions/actions';
import { normalizeString } from '../../app/helpers';
import PropTypes from 'prop-types';
import styles from '../../features/Product/styles/styles';

function mapDispatchToProps(dispatch) {
    return {
        setNowPlaying: nowPlaying => dispatch(setNowPlaying(nowPlaying))
    };
 }

class VideoAccordion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currPlaylist: null,
            vidSummary: null
        }

        this.videoLoad = this.videoLoad.bind(this);
    };

    videoLoad(videoURL,videoSummary) {
        this.props.setNowPlaying(videoURL);
        videoSummary = normalizeString(videoSummary)
        this.setState({vidSummary: videoSummary})
    }

    /**
     * Sets currPlaylist to currentplaylist on component creation
     * 
     */
    componentDidMount() {
        this.setState({currPlaylist: this.props.currPlaylist})
    }

    /**
     * Checks to see if prevProps.currPlaylist is different from
     * this.props.currPlaylist. If it is update state accordingly
     * 
     * @param object prevProps 
     */
    componentDidUpdate(prevProps) {
        if (prevProps.currPlaylist !== this.props.currPlaylist) {
            this.setState({currPlaylist: this.props.currPlaylist})
        }
    }

    /**
     * Clear currPlaylist if destroying component.
     * This closes any open accordion items.
     */
    componentWillUnmount() {
        this.setState({currPlaylist: null})
    }

    /**
     * Render Playlist Title and Icon (collapsible)
     *
     * @param object data
     * @param boolean expanded
     */
    renderHeader(data, expanded) {
        return (
            <View style={styles.accheader}>
                <View style={styles.accheaderNumber}>
                    <Text style={styles.numberText}>{this.index+1}</Text>
                </View>
                <Text style={styles.accheaderTitle}>
                {" "}{data.title}
                </Text>
                {expanded
                ? <Icon style={styles.accheaderIcon} name="arrow-down" />
                : <Icon style={styles.accheaderIcon} name="arrow-forward" />}
            </View>
        )
    }

    render() {
        /**
         * Render Videos in playlist with thumbnail picture
         * 
         * NOTE: This is added in the render function so that 
         * this.videoLoad is in scope.
         *
         * @param object data
         */
        renderContent = data => {
            let videos = data.videos.map((video) => {
                return (
                    <TouchableOpacity onPress={() => this.videoLoad(video.url,video.content.html)} key={video.id}>
                        <View style={styles.contentContainer}>
                                <Thumbnail square large source={{uri: video.content.images[0].url}} style={styles.thumbnail}/>
                                <Text style={styles.videotext}>{video.title}</Text>
                                <View style={{width: 75}}>
                                    <LinearGradient colors={['#429321', '#28948B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.linearGradient}>
                                        <Text style={styles.starttext}>START</Text>
                                    </LinearGradient>
                                </View>
                        </View>
                    </TouchableOpacity>
                )
            })
            return videos;
        };

        //Key is required in order for accordion component to update within tabs component
        return (
            <View style={styles.accordionContainer}>
                {this.state.vidSummary &&
                    <View style={styles.videoSummary}>
                        <Text style={styles.text}>{this.state.vidSummary}</Text>
                    </View>
                }
                <Accordion
                    expanded={this.state.currPlaylist}
                    dataArray={this.props.dataArray}
                    renderHeader={this.renderHeader}
                    renderContent={renderContent} 
                    style={{border:0}} key={this.state.currPlaylist}/>
            </View>
        )
    }
}

VideoAccordion.defaultProps = {
    dataArray: [],
    currPlaylist: null
}

VideoAccordion.propTypes = {
    dataArray: PropTypes.array.isRequired,
    currPlaylist: PropTypes.number
}

export default connect(null, mapDispatchToProps)(VideoAccordion);