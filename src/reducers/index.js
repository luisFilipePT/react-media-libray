/**
 * Created by luis on 02/12/2016.
 */
import { combineReducers } from 'redux';
import images from 'imageReducer';
import videos from 'videoReducer';

const rootReducer = combineReducers({
    images,
    videos
});

export default rootReducer;
