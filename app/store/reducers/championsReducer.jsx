import { FETCH_SIMPLE_CHAMPS_DATA } from '../actionTypes';

export default function championsReducer(state = {}, action = undefined) {
  switch(action.type) {
    case FETCH_SIMPLE_CHAMPS_DATA:
      return Object.assign({}, state, {
        list: action.champions
      })
    default:
      return state;
  }
}
