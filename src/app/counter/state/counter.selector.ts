import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CounterStateI} from './counter.state';

const getCounterState = createFeatureSelector<CounterStateI>('counter');

export const getCounter = createSelector(getCounterState, state => {
  return state.counter
})

export const getChannelName = createSelector(getCounterState, state => {
  return state.channelName
})
