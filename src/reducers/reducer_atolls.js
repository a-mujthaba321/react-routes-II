import { FETCH_ATOLLS } from '../actions/action_atoll';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {

    case FETCH_ATOLLS:
      return _.mapKeys(action.payload.data._embedded.atolls, '_links.self.href');
    default:
      return state;
  }
}
