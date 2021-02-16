import TodoItem from './TodoItem';
import PropType from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions/todoEpic';

function Todos(props) {

  useEffect(() => {
    props.fetchTodos();
  }, [props]);

  return (
    props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={props.toggleComplete}
        deleteTodo={props.deleteTodo}>
      </TodoItem>
    ))
  );
}

Todos.prototype = {
  todos: PropType.array.isRequired
}

export default connect(null, { fetchTodos })(Todos);
