import React, { useState } from "react";
import Edit from "./Edit";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Todo = ({ task, deleteTodo, updateTodo }) => {
  // const handleEditTodo = (id) => {
  //   console.log("editid", id);
  //   <Edit tid={id} updateTodo={updateTodo} />;
  // };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleClickOpen = (taskId, taskValue) => {
    setOpen(true);
    setEditingTaskId(taskId);
    setValue(taskValue);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingTaskId(null);
    setValue("");
  };

  const handleUpdate = () => {
    if (editingTaskId && value.trim() !== "") {
      updateTodo(editingTaskId, value);
      handleClose();
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   updateTodo(tid, value);
  //   //editTodo(value, task.id);
  //   setValue("");
  // };

  // const handleSubmit = (e, id) => {
  //   e.preventDefault();
  //   updateTodo(id, value);
  //   //editTodo(value, task.id);
  //   setValue("");
  // };

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
            <AiFillEdit
              className="text-xl"
              onClick={() => {
                {
                  handleClickOpen(item.id, item.task);
                }

                //handleEditTodo(item.id);
                // <Edit etask={item} updateTodo={updateTodo} />;
              }}
            />
            <BsFillTrashFill
              className="text-xl"
              onClick={() => {
                //console.log(item.id);
                deleteTodo(item.id);
              }}
            />
          </div>
        </div>
      ))}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">Update Task</DialogTitle>
        <DialogContent>
          <input
            required
            type="text"
            className="outline-none bg-transparent border border-grey-500 p-4 w-[350px] text-black rounded placeholder:text-grey-300 mt-2"
            placeholder="Update Task"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary" autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
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
