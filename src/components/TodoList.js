import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export default function TodoList(props) {

    const todosList = useSelector((state) => state.todos);

    return (
        <div>
            <ul className="list-group">
                {todosList.map((todo, index) => (
                    <TodoItem id={todo.id} todoName={todo.todoName} completed={todo.completed} />
                ))}
            </ul>
        </div>
    )
}
