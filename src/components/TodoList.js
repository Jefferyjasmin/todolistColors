import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return todoId;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    let removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  return (
    <div>
      <h1>Whats the plan for you today</h1>
      <TodoForm onSubmit={addTodo} />

      <Todo
        updateTodo={updateTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        todos={todos}
      />
    </div>
  );
};

export default TodoList;
