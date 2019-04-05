import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import spsImg from '../../assets/img/login/sps-logo.png';

export default class Logo extends Component {
    render() {
        return (
            <Image style={this.props.style} source={spsImg}/>
        )
    }
}

Logo.propTypes = {
    style: PropTypes.object
}