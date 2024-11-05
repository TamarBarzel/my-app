import { create } from "zustand";
import Todo from "@/app/types/todo"; 

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id">) => void; // הוספנו את ה- Omit ל- id
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, updatedTodo: Partial<Omit<Todo, "id">>) => void; // עדכון גם פה
  getTodo: (id: number) => Todo | undefined;
}

const useTodo = create<TodoStore>((set, get) => ({
  todos: [],
  addTodo: (todo) => 
    set((state) => ({
      todos: [...state.todos, { ...todo, id: Date.now() }],
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  
  updateTodo: (id, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ),
    })),

  getTodo: (id) => get().todos.find((todo) => todo.id === id),
}));

export default useTodo;
