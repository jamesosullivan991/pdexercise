

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TodoList, TodoItem, Button, Input } from '../styles/todo';


const axiosInstance = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3001'
});

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, [filter]);

    const fetchTodos = async () => {
        const response = await axiosInstance.get(`/api/todos?filter=${filter}`);
        setTodos(response.data);
    };

    const addTodo = async () => {
        await axiosInstance.post('/api/todos', { description: newTodo });
        setNewTodo('');
        fetchTodos();
    };

    const toggleComplete = async (todo: any) => {
        await axiosInstance.put(`/api/todos/${todo.id}`, { isCompleted: !todo.isCompleted });
        fetchTodos();
    };

    const deleteTodo = async (id: string) => {
        await axiosInstance.delete(`/api/todos/${id}`);
        fetchTodos();
    };

    const clearCompleted = async () => {
        await axiosInstance.delete('/api/todos?filter=completed');
        fetchTodos();
    };

    return (
        <Container>
            <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new todo"
            />
            <Button onClick={addTodo}>Add Todo</Button>
            <TodoList>
                {todos.map((todo: any, idx) => (
                    <TodoItem key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo)}
                        />
                        {todo.description}
                        <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
                    </TodoItem>
                ))}
            </TodoList>
            <Button onClick={() => setFilter('all')}>All</Button>
            <Button onClick={() => setFilter('active')}>Active</Button>
            <Button onClick={() => setFilter('completed')}>Completed</Button>
            <Button onClick={clearCompleted}>Clear Completed</Button>
        </Container>
    );
};

export default Todo;


