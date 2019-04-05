/*
 * FILENAME:        features/Splash/styles/styles.js
 *
 * DESCRIPTION:     Primary stylesheet for Splash Screen Feature
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      color: '#FFF',
      backgroundColor: '#222',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
        maxWidth: '80%',
        resizeMode: 'contain'
    }
  });