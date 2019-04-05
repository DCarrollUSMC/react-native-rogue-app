/*
 * FILENAME:        src/index.js
 *
 * DESCRIPTION:     This is the root component of the Rogue application
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import React, { Component } from "react";
import { Provider } from 'react-redux'
import store from './redux/store'

// Import app MainLayout
import Layout from "./components/Layout/MainLayout";

// Import app mainStackNavigator
import MainStackNavigator from './routing/mainStackNavigator';

export default class Rogue extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <MainStackNavigator />
        </Layout>
      </Provider>
    );
  }
}