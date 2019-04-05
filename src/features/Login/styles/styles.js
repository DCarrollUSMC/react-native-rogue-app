/*
 * FILENAME:        features/Login/styles/styles.js
 *
 * DESCRIPTION:     Primary stylesheet for Login Feature
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(34, 34, 34, 0.95)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      resizeMode: 'contain',
      width:60,
      height:60,
      bottom:60,
    },
    loginBG: {
      width: '100%',
      height:'100%',
    },
    mainlink: {
      color: '#429321',
    },
    forgotPass: {
      flexDirection: 'row',
    },
    forgotPassLink: {
      paddingRight: 3
    },
    text: {
      color: '#FFF'
    },
    error: {
        color: '#ff0000'
    },
    //Header Gradient Styles
    headerGradient: {
      height: '100%',
      width: '100%',
      paddingBottom:5
    },
    fpcontainer: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fptext: {
      fontSize: 22,
      margin:5,
      textAlign: 'center',
      color: '#A1A1A1'
    },
    fpQuestion: {
      color: '#A1A1A1'
    },
  });