import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        {todo.text}
      </label>
    </li>
  );
}

export default TodoItem;
