import todoListReducer from '../components/TodoList/TodoSlice'
import filtersReducer from '../components/Filters/FiltersSlice'
import { combineReducers } from 'redux'


// export const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action)
//   }
// }

export const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer
})