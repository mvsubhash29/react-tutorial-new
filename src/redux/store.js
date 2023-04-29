
import { createStore } from 'redux';
import allReducers from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

// const store = composeWithDevTools()(createStore(allReducers));

const store = composeWithDevTools()(createStore)(allReducers);

export default store;