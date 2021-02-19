import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';
import About from './components/About';
import { Provider } from 'react-redux';
import configureStore from './store/store';
// import * as rxjs from 'rxjs';
// import * as operators from 'rxjs/operators';
import { connect } from 'react-redux';
import { newTodo } from './store/actions/todoEpic';

/*  Introduction - What are streams of values?
 *  In JavaScript applications almost everything is asynchronous:
 *  - requests coming in from the network bring new values from the backend
 *  - timeouts on the front-end
 *  - user interactions with clicks/mouse over events
 * 
 *  A few examples of streams of values over time: 
*/
let App = ({ newTodo }) => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    // #1 Click streams - listen on whole page and subscribe to click event
    // document.addEventListener('click', event => {
    //   console.log(event);
    // });

    // #2 JavaScript Intervals - code that the runtime periodically executes (long polling in the background)
    // let counter = 0;
    // setInterval(() => {
    //   console.log(counter);
    //   counter++;
    // }, 1000);

    // #3 Timeouts - very similar to http requests (stream that emits one value and completes)
    // very similar to call to backend requesting value and getting callback (like ajax that doesn't fail)
    // setTimeout(() => {
    //   console.log('completed...');
    // }, 3000);

    /* What is RxJs? What problems does it solve?
     * Combining streams - how would we do that?
    */

    // #1 What if a user wants to click, wait for 3 seconds and then start emitting values?
    // nested callbacks (callback hell), browser only provides callback api, extends javascript
    // document.addEventListener('click', event => {
    //   console.log(event);

    //   setTimeout(() => {
    //     console.log('completed...');

    //     let counter = 0;
    //     setInterval(() => {
    //       console.log(counter);
    //       counter++;
    //     }, 1000);
    //   }, 3000);
    // });

    // #2 Observables make is easy to combine streams

    // https://rxjs-dev.firebaseapp.com/api/index/function/timer
    // const interval$ = rxjs.timer(3000, 1000);
    // interval$.subscribe(val => console.log('stream 1 ' + val));

    // https://rxjs-dev.firebaseapp.com/api/index/function/fromEvent
    // const click$ = rxjs.fromEvent(document, 'click');
    // click$.subscribe(event => console.log(event));

    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    // .then((response) => response.json())
    // .then((json) => console.log(json));
    
    // const http$ = rxjs.Observable.create(observer => {
    //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then(response => response.json())
    //   .then(todos => {
    //     observer.next(todos);
    //     observer.complete();
    //   })
    //   .catch(error => observer.error(error));
    // });

    // http$.subscribe(
    //   todos => console.log(todos),
    //   rxjs.noop,
    //   console.log('completed')
    // );

    // const todos$ = http$.pipe(operators.map(todo => todo));
    // todos$.subscribe(todo => console.log(todo));
  }, []);

  // function createHttpObservable(url) {
  //   return rxjs.Observable.create(observer => {
  //     fetch(url)
  //     .then(response => response.json())
  //     .then(todos => {
  //       observer.next(todos);
  //       observer.complete();
  //     })
  //     .catch(error => observer.error(error));
  //   });
  // }

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
    const todo = {
      id: uuid(),
      title,
      completed: false
    }
    
    //setTodo(todos => [...todos, todo]);
    newTodo(todo);
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

App = connect(null, { newTodo })(App);


const AppWithStore = () => {
  return(
    <Provider store={configureStore()}>
      <App />
    </Provider>
  )
}

export default AppWithStore;
