import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { incrementActionCreator, decrementActionCreator, resetActionCreator } from '../redux/Counter.action';

export const CounterRedux = () => {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter {count}</div>
      <button onClick={() => dispatch(incrementActionCreator(count + 1))}>Increment</button>
      <button onClick={() => dispatch(decrementActionCreator(count - 1))}>Decrement</button>
      <button onClick={() => dispatch(resetActionCreator())}>Reset</button>
    </>
  )
}