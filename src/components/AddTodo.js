import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

export default function AddTodo(props) {

    const [todoName, setTodoName] = useState('');

    const dispatch = useDispatch();

    const handleAddTodo = async (e) => {
        e.preventDefault();
        if (!todoName) {
            alert("Todo Name Cannot be Empty");
            return;
        }
        dispatch(addTodo({ todoName }));
    }

    return (
        <div>
            <form className="form mt-3 mb-3" onSubmit={handleAddTodo}>
                <div className="form-group">
                    <label htmlFor="todoName">Todo Name</label>
                    <input
                        type="text"
                        placeholder="Todo Name..."
                        className="form-control mb-2 mt-1 w-50"
                        value={todoName}
                        onChange={(e) => setTodoName(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                </div>
            </form>
        </div>
    )
}
