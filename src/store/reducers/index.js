import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import { combineEpics } from 'redux-observable';
import { fetchTodosEpic } from '../actions/todoEpic';

export const rootEpic = combineEpics(
  fetchTodosEpic
);

export const rootReducer = combineReducers({
  todoReducer
});
