/*
 * FILENAME:        index.js
 *
 * DESCRIPTION:     Main entry point for SPATraining Application
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import {AppRegistry} from 'react-native';
import SPATraining from './src/index';
import {name as appName} from './app.json';

// Register SPATraining App Component from src
AppRegistry.registerComponent(appName, () => SPATraining);
