import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from '../../common/todo.type';
import App from '../../app/App';

const state = {
    todos: [
        {
            id: 1,
            title: "test1",
            content: "test1の内容",
            isCompleted: false
        },
        {
            id: 2,
            title: "test2",
            content: "test2の内容",
            isCompleted: false
        },
    ] as Todo[]
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: state,
    reducers: {
        add: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateComplete: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload
            ? {...todo, isCompleted: !todo.isCompleted}
            : todo)
        }
    }
})

export const {add, remove, updateComplete} = todoSlice.actions