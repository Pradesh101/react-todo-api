import React, { useState, useEffect } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
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
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get(API_URL);
      console.log("Fetched todos:", response.data);
      setTodo(response.data); // Remove the extra array brackets
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
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

  const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchTodos();
    }
  };

  const updateTodo = async (id, updatedTask) => {
    try {
      console.log(`Attempting to update todo with id: ${id}`);
      console.log(`Updated task: ${updatedTask}`);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: updatedTask }),
      });

      console.log(`Response status: ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      const updatedTodo = await response.json();
      console.log("Updated todo:", updatedTodo);
      await fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // const updateTodo = async (id, newTask) => {
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:3000/api/todos/${id}`,
  //       { task: newTask }
  //     );
  //     setTodo(
  //       todoValue.map((todo) => (todo.id === Number(id) ? response.data : todo))
  //     );
  //   } catch (error) {
  //     console.error("Error updating todo:", error);
  //   }
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
          <Edit key={idx} updateTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={idx}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        )
      )} */}
      {todoValue.map((todo, index) => (
        <Todo
          key={index}
          task={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
