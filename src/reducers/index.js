import { combineReducers } from 'redux';
import postsReducer from './reducer_posts';
import currentPostReducer from './reducer_current_post';

const rootReducer = combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer
});

export default rootReducer;
