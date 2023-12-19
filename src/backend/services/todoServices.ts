import Todo from '../models/todo'

interface TodoData {
  description: string
}

export async function createTodo (TodoData: TodoData) {
  try {
    const newTodo = await Todo.query().insert(TodoData)
    return newTodo
  } catch (error) {
    throw error
  }
}

export default { createTodo }
