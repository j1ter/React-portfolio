import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import portfolioReducer from './reducers/portfolioReducer';

const rootReducer = combineReducers({
  portfolio: portfolioReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
