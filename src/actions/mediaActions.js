/**
 * Created by luis on 02/12/2016.
 */
 import * as types from '../constants/actionTypes';

 export const selectedImageAction = (image) => ({
     type: types.SELECTED_IMAGE,
     image
 });

export const selectedVideoAction = (video) => ({
    type: types.SELECTED_VIDEO,
    video
});

export const searchMediaAction = (payload) => ({
    type: types.SEARCH_MEDIA_REQUEST,
    payload
});