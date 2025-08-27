import { useState } from "react";

export default function AddTodo() {
  const [newTodoText, setNewTodoText] = useState("");

  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Write your task here..."
        value={newTodoText}
        onChange={(event) => setNewTodoText(event.target.value)}
        className="flex-1 p-2 rounded-l-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <button
        onClick={() => console.log(newTodoText)}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 rounded-r-xl"
      >
        Add
      </button>
    </div>
  );
}
