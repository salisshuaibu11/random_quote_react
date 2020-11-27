import { combineReducers } from 'redux';
import quotesReducer from './quotesReducer';

const rootReducer = combineReducers({
  quotes: quotesReducer
});

export default rootReducer;
