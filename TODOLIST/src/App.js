import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './style/app.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "пам пам", completed: false },
    { id: 2, text: "бум бум", completed: true },
    { id: 3, text: "гав гав", completed: false }
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>ТУДУШКА</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
