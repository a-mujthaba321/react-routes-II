import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import AtollReducer from './reducer_atolls';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  atolls: AtollReducer

});

export default rootReducer;
