import { FETCH_TODOS, NEW_TODO, FETCH_TODOS_FULFILLED } from './types';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, tap } from 'rxjs/operators';

// action creators
export const fetchTodos = () => ({ type: FETCH_TODOS });
export const fetchTodosFullfilled = payload => ({ type: FETCH_TODOS_FULFILLED, payload });

// epic
export const fetchTodosEpic = action$ => action$.pipe(
  ofType(FETCH_TODOS),
  mergeMap(action =>
    ajax.getJSON(`https://jsonplaceholder.typicode.com/todos?_limit=10`).pipe(
      map(response => fetchTodosFullfilled(response)),
      tap(todos => console.log('todos: ', todos))
    )
  )
);

// export const fetchTodosEpic = (action$) => {
//   return action$.pipe(
//     ofType(FETCH_TODOS),
//     tap(() => console.log('some shit'))
//   );

//   // const query = `?_limit=10`
//   // fetch(`https://jsonplaceholder.typicode.com/todos${query}`)
//   // .then(response => response.json())
//   // .then(todos => dispatch({
//   //   type: FETCH_TODOS,
//   //   payload: todos
//   // }));
// }
