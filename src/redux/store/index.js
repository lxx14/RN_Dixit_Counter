import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from '../rootReducer';

const middleware = this.__DEV__ ? [thunk, logger] : [thunk];
const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware))));

export default store;