import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
const Todo = ({ task }) => {
  //console.log(task.task);
  return (
    <>
      {task.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between
  items-center bg-gray-600 text-white py-3 px-4 rounded-md mb-1 cursor-pointer"
        >
          <p className="">{item.task}</p>
          <div className="flex items-center gap-x-4">
            <AiFillEdit className="text-xl" onClick={() => editTodo(task.id)} />
            <BsFillTrashFill
              className="text-xl"
              onClick={() => {
                deleteTodo(task.id);
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
  // <div
  //   className="flex justify-between
  // items-center bg-gray-600 text-white py-3 px-4 rounded-md mb-1 cursor-pointer"
  // >
  //   <p className="">{task.task}</p>
  //   <div className="flex items-center gap-x-4">
  //     {/* <AiFillEdit className="text-xl" onClick={() => editTodo(task.id)} />
  //     <BsFillTrashFill
  //       className="text-xl"
  //       onClick={() => {
  //         deleteTodo(task.id);
  //       }}
  //     /> */}
  //   </div>
  // </div>
};

export default Todo;
