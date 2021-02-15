import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';
import About from './components/About';

function App() {
  const [todos, setTodo] = useState([
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
  ]);

  // #1 add call to json place holder
  useEffect(() => {
    const query = `?_limit=10`
    fetch(`https://jsonplaceholder.typicode.com/todos${query}`)
    .then(response => response.json())
    .then(json => json.map(item =>  setTodo(todos => [...todos, item])));
  }, []);

  function toggleComplete(id) {
    setTodo(todos => todos.map(todo =>
        (todo.id === id)
          ? {...todo, completed: !todo.completed }
          : todo
      ))
  }

  function deleteTodo(id) {
    setTodo(todos => todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    
    setTodo(todos => [...todos, newTodo]);
  }

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo
              addTodo={addTodo}/>
            <Todos
              todos={todos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}/>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
