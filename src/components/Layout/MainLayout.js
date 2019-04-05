/*
 * FILENAME:        components/layout/MainLayout.js
 *
 * DESCRIPTION:     Used to wrap application components and determine overall layout
 * 
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import { View } from "react-native";
import React from "react";
import styles from "./styles";

const layout = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export default layout;