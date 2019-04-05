import { SET_USER, SET_PRODUCT_LIST, SET_NOW_PLAYING, PAUSE_VIDEO } from "../constants/action-types";

// Action to set user data from API to redux state
export function setUser(payload) {
    return { type: SET_USER, payload };
};

// Action to set product list data from API to redux state
export function setProductList(payload) {
    return { type: SET_PRODUCT_LIST, payload };
};

// Action to set nowPlaying to string for url of video
export function setNowPlaying(payload) {
    return { type: SET_NOW_PLAYING, payload };
}

// Action to pause the video
export function pauseVideo(payload) {
    return { type: PAUSE_VIDEO, payload };
}