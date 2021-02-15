import React from 'react'
import { useState } from 'react';

function AddTodo(props) {
  const [title, setTitle] = useState('');  

  function onChange(event) {
    // setTitle(prevTitle => prevTitle = event.target.value);
    setTitle([event.target.name] = event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    props.addTodo(title);
    setTitle(() => '');
  }

  return (
    <form style={form} onSubmit={onSubmit}>
      <input
        style={inputText}
        type="text"
        name="title"
        placeholder="add todo..."
        value={title}
        onChange={onChange}/>
      <input
        style={inputButton}
        type="submit"
        value="time to do something!"/>
    </form>
  )
}

const form = {
  display: 'flex'
}

const inputText = {
  flex: 10,
  padding: '5px'
}

const inputButton = {
  flex: 1
}

export default AddTodo
