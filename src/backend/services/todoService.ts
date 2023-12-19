import Todo from '../models/todo'

interface TodoData {
  description: string
  // Add other properties as needed
}

export async function createTodo(TodoData: TodoData) {
  try {
    const newTodo = await Todo.query().insert(TodoData)
    return newTodo
  } catch (error) {
    // log error to error
    throw error
  }
}

export async function getTodos() {
  try {
    const todos = await Todo.query()
    return todos
  } catch (error) {
    throw error
  }
}

export async function deleteTodo(todoId: string) {
  try {
    const deletedTodo = await Todo.query().deleteById(todoId)
    return deletedTodo
  } catch (error) {
    throw error
  }
}

export async function updateTodo(todoId: string, TodoData: TodoData) {
  try {
    const updatedTodo = await Todo.query().patchAndFetchById(todoId, TodoData)
    return updatedTodo
  } catch (error) {
    throw error
  }
}

export default { createTodo, getTodos, deleteTodo, updateTodo }
