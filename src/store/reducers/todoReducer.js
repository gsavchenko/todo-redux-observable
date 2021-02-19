import { NEW_TODO_FULFILLED, FETCH_TODOS_FULFILLED } from '../actions/types';
import { v4 as uuid } from 'uuid';

const initialState = {
  todos: [
    {
      id: uuid(),
      title: 'Assess your data for the latest  attacks',
      completed: false
    },
    {
      id: uuid(),
      title: 'Assess your data for emerging threats',
      completed: false
    },
    {
      id: uuid(),
      title: 'Automate Data Collection',
      completed: false
    },
  ],
  todo: {}
}

export default function todoReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TODOS_FULFILLED:
      return {
        ...state,
        todos: action.payload
      }
    case NEW_TODO_FULFILLED:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todo: action.payload
      }
    default:
      return state;
  }
}
