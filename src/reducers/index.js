import { combineReducers } from 'redux';
import { ArtistsReducer } from './artists.js';

export default combineReducers({

    artists: ArtistsReducer
});
