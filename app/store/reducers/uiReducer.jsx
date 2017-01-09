import { API_LOADING, API_FINISHED } from '../actionTypes';

const initialState = {
  apiLoading: false
};

export default function uiReducer(state = initialState, action = undefined) {
  switch(action.type) {
    case API_LOADING:
      return Object.assign({}, state, {
        apiLoading: true
      });
    case API_FINISHED:
      return Object.assign({}, state, {
        apiLoading: false
      });
    default:
      return state;
  }
}
