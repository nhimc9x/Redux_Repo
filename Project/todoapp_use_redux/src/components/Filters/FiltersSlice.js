// const initState = {
//   search: '',
//   status: 'All',
//   priority: []
// }

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//   case 'filters/searchTodo':
//     return { ...state, search: action.payload }
//   case 'filters/statusFilterChange':
//     return { ...state, status: action.payload }
//   case 'filters/priorityFilterChange':
//     return { ...state, priority: action.payload }
//   default: return state
//   }
// }

// export default filtersReducer

import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priority: []
  },
  reducers: {
    searchTodo: (state, action) => {
      // Có thể thao tách trực tiếp thay đổi state (Nhưng thực tế redux-toolkit sẽ ko thay đổi trực tiếp)
      state.search = action.payload
    }, // => Tạo 1 action: { type: 'filters/searchTodo'}
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload
    }
  }
})

export default filtersSlice.reducer