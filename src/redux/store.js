/*
 * FILENAME:        redux/store.js
 *
 * DESCRIPTION:     The Redux store is fundamental: The state of the whole
 * application lives inside the store.  Here we create a store for wrapping up the state.
 *
 *
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */

import { createStore } from 'redux';
import rootReducer from './reducers/index';

// createStore takes a reducer as the first argument.
// Reducers produce the state of the application
export default createStore(rootReducer);