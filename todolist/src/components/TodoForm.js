import React from "react";

const TodoForm = ({ text, setText, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TodoForm;
