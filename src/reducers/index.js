import { combineReducers } from 'redux';
import PostsReducer from './reducers_post';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
