"use client";
import React, { useState } from "react";
import useTodo from "@/app/store/todoStore";
import Todo from "@/app/types/todo";

const page = () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodo();
  const [newTodoDesc, setNewTodoDesc] = useState("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleAddTodo = () => {
    if (newTodoDesc.trim()) {
      addTodo({ desc: newTodoDesc });
      setNewTodoDesc("");
    }
  };
  const handleUpdateTodo = (id: number) => {
    if (editingTodo) {
      updateTodo(id, { desc: editingTodo.desc });
      setEditingTodo(null);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>

      <div className="mb-4">
        <input
          type="text"
          value={newTodoDesc}
          onChange={(e) => setNewTodoDesc(e.target.value)}
          placeholder="Add a new todo"
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Add Todo
        </button>
      </div>

      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border-b"
          >
            {editingTodo && editingTodo.id === todo.id ? (
              <input
                type="text"
                value={editingTodo.desc}
                onChange={(e) =>
                  setEditingTodo({ ...editingTodo, desc: e.target.value })
                }
                className="border p-1 rounded"
              />
            ) : (
              <span>{todo.desc}</span>
            )}
            <div>
              {editingTodo && editingTodo.id === todo.id ? (
                <button
                  onClick={() => handleUpdateTodo(todo.id)}
                  className="bg-green-500 text-white p-1 rounded ml-2"
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setEditingTodo(todo)}
                    className="bg-yellow-500 text-white p-1 rounded ml-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 text-white p-1 rounded ml-2"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
