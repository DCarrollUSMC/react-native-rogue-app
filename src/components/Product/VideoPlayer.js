import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { connect } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import { setNowPlaying } from '../../redux/actions/actions';
import PropTypes from 'prop-types';

 // mapStateToProps will allow access to state values in component props
 function mapStateToProps(state) {
    const { paused } = state
    return {
        paused: paused
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setNowPlaying: nowPlaying => dispatch(setNowPlaying(nowPlaying))
    };
 };


class VideoPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buffering: true
        }
    }

    componentWillUnmount() {
        this.props.setNowPlaying('');
    };

    videoError(e) {
        console.log(e);
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.buffering &&
                    <Loading/>
                }
                <Video
                    source={{ uri: this.props.source }} 
                    ref={(ref) => {
                        this.player = ref
                    }}
                    onError={this.videoError}
                    controls={true}
                    style={styles.player}
                    paused={this.props.paused}
                />
            </View>
        )
    }
}

VideoPlayer.propTypes = {
    source: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:250
    },
    player: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);