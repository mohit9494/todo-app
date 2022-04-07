import './App.css';
import Header from './MyComponents/Header.js';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {

  const onDelete = (todo) => {

    console.log("I am deleting ", todo);

    setTodos(todos.filter((e) => {

      return e !== todo;

    }))

  }

  let [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Go To Market',
      description: 'To Buy Clothes'
    },
    {
      id: 2,
      title: 'Go To City',
      description: 'To Buy Clothes'
    },
    {
      id: 3,
      title: 'Go To Temple',
      description: 'To Buy Clothes'
    }
  ])


  return (
    <>
      <Header title="Todos" searchBar={false} />;
      <Todos todos={todos} onDelete={onDelete} />;
      <Footer />;
    </>
  );
}

export default App;
