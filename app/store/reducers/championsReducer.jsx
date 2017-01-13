import { FETCH_SIMPLE_CHAMPS_DATA } from '../actionTypes';

const initialState = {
  list: {}
};

export default function championsReducer(state = initialState, action = undefined) {
  switch(action.type) {
    case FETCH_SIMPLE_CHAMPS_DATA:
      return Object.assign({}, state, {
        list: action.champions
      })
    default:
      return state;
  }
}
