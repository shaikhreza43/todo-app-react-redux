import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/todoSlice';
import { deleteTodo } from '../redux/todoSlice';

export default function TodoItem(props) {

    const dispatch = useDispatch();

    const handleToggleComplete = (e) => {
        dispatch(toggleComplete({ id: props.id, completed: !props.completed }));
    }

    const handleDeleteTodo = () => {
        dispatch(deleteTodo({ id: props.id }));
    }

    return (
        <li className={`list-group-item ${props.completed && 'list-group-item-success'}`} >
            <div className="d-flex justify-content-between">
                <span className="d-flex align-items-center">
                    <input type="checkbox" checked={props.completed} onChange={handleToggleComplete}>
                    </input>&nbsp;
                    {props.todoName}
                </span>
                <button className="btn btn-danger" onClick={handleDeleteTodo}>Delete</button>
            </div>
        </li>
    )
}
