import { FETCH_POSTS, CREATE_POST, FETCH_SINGLE_POST } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case FETCH_SINGLE_POST: {
      const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return { ...state };
      return {
        ...state,
        [post.id]: post
      };
    }
    default:
      return state;
  }
}
