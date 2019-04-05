/*
 * FILENAME:        redux/reducers/index.js
 *
 * DESCRIPTION:     The main reducers file.
 *
 * NOTE :           A reducer is just a JavaScript function. A reducer takes two parameters:
 * the current state and an action.
 *
 * In Redux, the state is immutable and cannot change in place.
 *
 * As such, reducer functions MUST be pure. (A function that returns the exact same output for a given input)
 *
 * Author: SixPack Tech Team
 * Copyright (c) 2019 - Six-Pack Labs
 */
import { SET_USER, SET_PRODUCT_LIST, SET_NOW_PLAYING, PAUSE_VIDEO } from '../constants/action-types';

const initialState = {
    user: {
      id: '',
      email: '',
      first_name: '',
      last_name: ''
    },  
    productList: [],
    nowPlaying: '',
    paused: false
  };
  
  function rootReducer(state = initialState, action) {
    switch(action.type) {
      case SET_USER: {
        return {...state, 
          user: {
            id: action.payload.user.data.id,
            email: action.payload.user.data.email,
            first_name: action.payload.user.data.first_name,
            last_name: action.payload.user.data.last_name
          }
        }
      }
      case SET_PRODUCT_LIST: {
        return {...state, productList: action.payload.productList.data}
      }
      case SET_NOW_PLAYING: {
        return {...state, nowPlaying: action.payload}
      }
      case PAUSE_VIDEO: {
        return {...state, paused: action.payload}
      }
      // We return the default state for any unknown case
      default: {
        return state;
      }
    }
  };
  export default rootReducer;