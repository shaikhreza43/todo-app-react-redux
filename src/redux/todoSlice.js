import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, todoName: "Purchase a new smartphone and a smartwatch", completed: false },
        { id: 2, todoName: "Get my knee surgery done", completed: true },
        { id: 3, todoName: "Save 30k every month", completed: false },
        { id: 4, todoName: "Plan for a trip to Ajmer", completed: false }
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