import React, { useState } from 'react';
import AddTodo from './AddTodo';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <header>
        <h1>Todos App</h1>
      </header>

      <AddTodo
        todos={todos}
        setTodos={setTodos}
      />

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;