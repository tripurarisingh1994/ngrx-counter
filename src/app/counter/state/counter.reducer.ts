import {createReducer, on} from '@ngrx/store';
import {customIncrement, decrement, increment, reset} from './counter.action';
import {initialState} from './counter.state';

const _createReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter : state.counter + 1
    }
  }),
  on(decrement, state => {
    return {
      ...state,
      counter : state.counter - 1
    }
  }),
  on(reset, state => {
    return {
      ...state,
      counter : 0
    }
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter : state.counter + action.value
    }
  })
);

export function counterReducer(state, action) {
  return _createReducer(state, action);
}
