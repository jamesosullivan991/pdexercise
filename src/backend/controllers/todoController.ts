import TodoService from '../services/todoService'

const todoController = {
  async createTodo (req: any, res: any) {
    try {
      const newTodo = await TodoService.createTodo(req.body)
      res.status(201).json(newTodo)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}

export default todoController
