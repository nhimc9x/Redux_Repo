// const initState = [
//   { id: 1, name: 'Learn React', completed: true, priority: 'Medium' },
//   { id: 2, name: 'Learn Redux', completed: false, priority: 'Low' },
//   { id: 3, name: 'Learn NextJs', completed: false, priority: 'High' },
//   { id: 4, name: 'Learn Piano', completed: false, priority: 'Medium' },
//   { id: 5, name: 'Learn Football', completed: true, priority: 'Low' }
// ]

// const todoListReducer = (state = initState, action) => {

//   switch (action.type) {
//   case 'todoList/addTodo':
//     return [...state, action.payload]
//   case 'todoList/todoCompletedChange':
//     return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
//   default: return state
//   }
// }

// export default todoListReducer

import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn React', completed: true, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: false, priority: 'Low' },
    { id: 3, name: 'Learn NextJs', completed: false, priority: 'High' },
    { id: 4, name: 'Learn Piano', completed: false, priority: 'Medium' },
    { id: 5, name: 'Learn Football', completed: true, priority: 'Low' }
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    todoCompletedChange: (state, action) => {
      state.map(todo => todo.id === action.payload ? todo.completed = !todo.completed : todo)
      // const currentTodo = state.find(todo => todo.id === action.payload)
      // currentTodo.completed = !currentTodo.completed
    }
  }
})

export default todoListSlice.reducer