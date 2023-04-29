import {combineReducers} from 'redux';
import { counterReducer } from "./Counter.reducer";

const allReducers = combineReducers({
  count: counterReducer
});

export default allReducers;