import React, { useState, useEffect } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Edit from "./Edit";
import axios from "axios";
uuidv4();

const TodoList = () => {
  const API_URL = "http://localhost:3000/api/todos";

  const [todoValue, setTodo] = useState([]);
  // const createTodo = (todo) => {
  //   setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  // };

  useEffect(() => {
    fetchTodos();
  }, [todoValue]);

  async function fetchTodos() {
    const response = await axios.get(API_URL);
    setTodo([response.data]);
  }

  const createTodo = async (todo) => {
    //console.log(todo);

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: todo }),
    });
    fetchTodos();
  };

  // const deleteTodo = (id) => {
  //   setTodo(todoValue.filter((todo) => todo.id !== id));
  // };

  // const editTodo = (id) => {
  //   setTodo(
  //     todoValue.map((todo) =>
  //       todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // };

  // const editTask = (task, id) => {
  //   setTodo(
  //     todoValue.map((todo) =>
  //       todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // };

  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-md w-[550px] ">
      <div className="text-white mb-5 text-3xl flex justify-center items-center">
        Todo App
      </div>
      <Form createTodo={createTodo} />
      {/* {todoValue.map((todo, idx) =>
        todo.isEditing ? (
          <Edit key={idx} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={idx}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )} */}
      {todoValue.map((todo) => (
        <Todo task={todo} />
      ))}
    </div>
  );
};

export default TodoList;
