import React from 'react';

const TodoList = ({ todos, handleTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleTodoClick(todo.id)}
          />
          <span>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
