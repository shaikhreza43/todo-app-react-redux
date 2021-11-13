import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, todoName: "Todo 1", completed: true },
        { id: 2, todoName: "Todo 2", completed: false },
        { id: 3, todoName: "Todo 3", completed: true },
        { id: 4, todoName: "Todo 4", completed: false }
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                todoName: action.payload.todoName,
                completed: false
            }
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
           return state.filter(todo => todo.id !== action.payload.id);
        }
    }
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;