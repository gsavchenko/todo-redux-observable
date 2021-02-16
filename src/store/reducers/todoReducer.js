import { FETCH_TODOS, NEW_TODO, FETCH_TODOS_FULFILLED } from '../actions/types';

const initialState = {
  todos: [],
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
