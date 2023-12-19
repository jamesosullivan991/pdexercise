import TodoService from '../services/todoService'

const todoController = {
  async createTodo(req: any, res: any) {
    try {
      const newTodo = await TodoService.createTodo(req.body)
      res.status(201).json(newTodo)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  async getTodos(req: any, res: any) {
    try {
      const todos = await TodoService.getTodos()
      res.status(200).json(todos)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  async deleteTodo(req: any, res: any) {
    try {
      const todoId = req.params.id
      const deletedTodo = await TodoService.deleteTodo(todoId)
      if (deletedTodo) {
        res.status(200).json({ message: 'Todo successfully deleted' })
      } else {
        res.status(404).json({ message: 'Todo not found' })
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  async updateTodo(req: any, res: any) {
    try {
      const todoId = req.params.id
      const TodoData = req.body
      const updatedTodo = await TodoService.updateTodo(todoId, TodoData)
      if (updatedTodo) {
        res.status(200).json(updatedTodo)
      } else {
        res.status(404).json({ message: 'Todo not found' })
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}

export default todoController
