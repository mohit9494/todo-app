import './App.css';
import Header from './MyComponents/Header.js';
import Todos from './MyComponents/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {

  let initTodos;

  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {

    let id;

    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    const myTodo = {
      id: id,
      title: title,
      description: desc
    }

    setTodos([...todos, myTodo]);
  }

  const onDelete = (todo) => {

    console.log("I am deleting ", todo);

    setTodos(todos.filter((e) => {

      return e !== todo;

    }))

  }

  let [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="Todos" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
