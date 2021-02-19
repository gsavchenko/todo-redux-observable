import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import { combineEpics } from 'redux-observable';
import { fetchTodosEpic, newTodoEpic } from '../actions/todoEpic';

export const rootEpic = combineEpics(
  fetchTodosEpic,
  newTodoEpic
);

export const rootReducer = combineReducers({
  todoReducer
});
