import { FETCH_TODOS, NEW_TODO, FETCH_TODOS_FULFILLED } from '../actions/types';
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
    
    default:
      return state;
  }
}
