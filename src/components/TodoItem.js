import React from 'react';

export default function TodoItem(props) {
    return (
        <li className={`list-group-item ${props.completed && 'list-group-item-success'}`} >
            <div className="d-flex justify-content-between">
                <span className="d-flex align-items-center">
                    <input type="checkbox" checked={props.completed}>
                    </input>&nbsp;
                    {props.todoName}
                </span>
                <button className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
}
