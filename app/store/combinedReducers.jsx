import { combineReducers } from 'redux';
import championsReducer from './reducers/championsReducer';
import uiReducer from './reducers/uiReducer';

const combinedReducers = combineReducers({
  champions: championsReducer,
  ui: uiReducer
});

export default combinedReducers;
