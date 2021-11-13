import React from 'react';
import { useSelector } from 'react-redux';

export default function TotalCompletedItem(props) {

    const completedTodos = useSelector(state => state.todos.filter(todo => todo.completed === true));

    return (
        <div>
            <h4 className="mt-3">Total Completed Items:&nbsp;{completedTodos.length}</h4>
        </div>
    )
}
