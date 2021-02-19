import { FETCH_TODOS, FETCH_TODOS_FULFILLED, NEW_TODO, NEW_TODO_FULFILLED } from './types';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';

// action creators
export const fetchTodos = () => ({ type: FETCH_TODOS });
export const fetchTodosFullfilled = payload => ({ type: FETCH_TODOS_FULFILLED, payload });

export const newTodo = payload => ({ type: NEW_TODO, payload });
export const newTodoFullfilled = payload => ({ type: NEW_TODO_FULFILLED, payload });

// epics
export const fetchTodosEpic = action$ => action$.pipe(
  ofType(FETCH_TODOS),
  mergeMap(action =>
    ajax.getJSON(`https://jsonplaceholder.typicode.com/todos?_limit=10`).pipe(
      map(response => fetchTodosFullfilled(response)),
      //tap(todos => console.log('todos: ', todos))
    )
  )
);

export const newTodoEpic = action$ => action$.pipe(
  ofType(NEW_TODO),
  mergeMap(action =>
    ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: action.payload
    }).pipe(
      map(ajaxResponse => newTodoFullfilled(ajaxResponse.response)),
    )
  )
);
