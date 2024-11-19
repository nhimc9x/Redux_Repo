// import { createSelector } from 'reselect'
import { createSelector } from '@reduxjs/toolkit'

export const todoListSelector = state => state.todoList
export const searchTextSelector = state => state.filters.search
export const filterStatusSelector = state => state.filters.status
export const filterPrioritySelector = state => state.filters.priority

// Không dùng Reselect
// export const todoListSelector = state => {
//   const searchText = searchTextSelector(state)
//   const todoRemaining = state.todoList.filter(todo => {
//     return todo.name.includes(searchText)
//   })
//   return todoRemaining
// }

/*
Sử dụng thư viện Reselect (Dùng Redux Toolkit thì không cần)
?? Hàm createSelector(1,2,...3) Truyển vào func Selector 1, 2, ...
Tham số cuối sẽ là 1 func chứa tham số là các giá trị mà các func trước trả
VD ở đây:
 -  todoList là kết quả trả về của todoListSelector,
 -  searchText là kết quả trả về của searchTextSelector
*/
export const todoListRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritySelector,
  searchTextSelector,
  (todoList, status, priority, searchText) => {
    return todoList.filter(todo => {
      if (status === 'All') {
        return priority.length ?
          todo.name.includes(searchText) && priority.includes(todo.priority) :
          todo.name.includes(searchText)
      }
      return todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
    })
  })