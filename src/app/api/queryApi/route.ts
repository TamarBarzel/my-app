import { NextRequest, NextResponse } from "next/server";
import Task from "@/app/types/task";

const tasks: Task[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  desc: `Task ${index + 1}`,
}));

export async function GET(request: NextRequest) {
  return NextResponse.json(tasks);
}