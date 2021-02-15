import TodoItem from './TodoItem';
import PropType from 'prop-types';

function Todos(props) {
  // const toggleComplete = (event) => {
  //   console.log(event);
  // }

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

export default Todos;
