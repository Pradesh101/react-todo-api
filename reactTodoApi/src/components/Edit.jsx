import React, { useState } from "react";

const Edit = ({ etask, updateTodo }) => {
  const [value, setValue] = useState("");
  console.log({ etask });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(tid, value);
    //editTodo(value, task.id);
    setValue("");
  };
  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-md w-[550px] ">
      <div className="text-white mb-5 text-3xl flex justify-center items-center">
        Update Todo Task
      </div>
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
    </div>
  );
};

export default Edit;
