import { combineReducers } from 'redux';
import postsReducer from './reducer_posts';

const rootReducer = combineReducers({
    posts: postsReducer
});

export default rootReducer;
