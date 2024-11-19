// export const addTodoAction = {
//   type: 'todoList/addTodo',
//   payload: { id: 7, name: 'Learn MUI', completed: false, priority: 'Low' }
// }

export const addTodo = (data) => ({
  type: 'todoList/addTodo',
  payload: data
})

export const searchTodo = (text) => ({
  type: 'filters/searchTodo',
  payload: text
})

export const statusFilterChange = (status) => ({
  type: 'filters/statusFilterChange',
  payload: status
})

export const priorityFilterChange = (priorites) => ({
  type: 'filters/priorityFilterChange',
  payload: priorites
})

export const todoCompletedChange = (todoId) => ({
  type: 'todoList/todoCompletedChange',
  payload: todoId
})