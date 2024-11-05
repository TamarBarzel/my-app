import { NextRequest, NextResponse } from "next/server";
import Todo from "@/app/types/todo";

const todos: Todo[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  desc: `Task ${index + 1}`,
}));

export async function GET(request: NextRequest) {
  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  try {
    const newTodo: Todo = await request.json();
    newTodo.id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    todos.push(newTodo);
    return NextResponse.json({
      message: "New todo created successfully",
      newTodo,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating todo", error },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest,context: { params: { id: string } }) {
  const { id } = context.params;
  const todoId = parseInt(id, 10);

  try {
    const updatedData: Partial<Todo> = await request.json();
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex === -1) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    todos[todoIndex] = { ...todos[todoIndex], ...updatedData };
    return NextResponse.json({
      message: `Todo with ID ${id} updated successfully`,
      updatedTodo: todos[todoIndex],
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating todo", error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
    const { id } = context.params;
    const todoId = parseInt(id, 10);
  
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  
    if (todoIndex === -1) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
  
    const deletedTodo = todos.splice(todoIndex, 1);
    return NextResponse.json({ message: `Todo with ID ${id} deleted successfully`, deletedTodo });
  }
