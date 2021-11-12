import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {

    const todos = [
        { id: 1, todoName: 'todo1', completed: false },
        { id: 2, todoName: 'todo2', completed: true },
        { id: 3, todoName: 'todo3', completed: true }
    ];

    return (
        <div>
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <TodoItem id={todo.id} todoName={todo.todoName} completed={todo.completed} />
                ))}
            </ul>
        </div>
    )
}
