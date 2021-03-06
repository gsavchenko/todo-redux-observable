import TodoItem from './TodoItem';
import PropType from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions/todoEpic';

function Todos({fetchTodos, ...props}) {

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

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

const mapStateToProps = state => ({
  todos: state.todoReducer.todos
});

export default connect(mapStateToProps, { fetchTodos })(Todos);
