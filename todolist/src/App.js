import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "./actions";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./style/app.css";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  const handleTodoClick = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="App">
      <h1>ТУДУШКА</h1>
      <TodoForm text={text} setText={setText} handleSubmit={handleSubmit} />
      <TodoList todos={todos} handleTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
