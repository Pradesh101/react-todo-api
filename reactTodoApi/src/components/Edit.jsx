import React, { useState } from "react";

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form
      className="mb-4 w-full flex items-center justify-between"
      onSubmit={handleSubmit}
    >
      <input
        required
        type="text"
        className="outline-none bg-transparent border border-grey-500 p-4 w-[350px] text-white rounded placeholder: text-grey-300 mt-2"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-500 border-none p-4 text-white cursor-pointer rounded ml-2 mt-2">
        Update Task
      </button>
    </form>
  );
};

export default Edit;
