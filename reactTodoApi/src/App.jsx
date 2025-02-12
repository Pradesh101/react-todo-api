import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      {/* <div className="h-auto border border-blue-500 p-6 rounded-lg">
        <heading className="flex items-center justify-center">TODO App</heading>
        <div className="mt-3 mb-3">
          <form action="" className="">
            <input
              type="text"
              required
              className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow mr-4"
              placeholder="Enter todo task"
            />
            <button className="rounded-md bg-green-600 text-white outline-none px-2 py-2">
              Add
            </button>
          </form>
        </div>
        <div className="mb-2">
          <h2 className=""> Todo Activites</h2>
        </div>
        <div className="ml-4">
          <ol class="list-decimal">
            <li>
              <span>Todo Task 1</span>
              <button class="h-6 px-2 ml-4 text-sm text-white transition-colors duration-150 bg-yellow-600 rounded-lg focus:shadow-outline hover:bg-yellow-800">
                Update
              </button>
              <button class="h-6 px-2 ml-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                Delete
              </button>
            </li>
            <li>Todo Task 2</li>
            <li>Todo Task 3</li>
          </ol>
        </div>
      </div> */}
      <TodoList />
    </>
  );
}

export default App;
