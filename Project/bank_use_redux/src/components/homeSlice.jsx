import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'surplus',
  initialState: {
    total: 2000000
  },
  reducers: {
    deposit: (state, action) => {
      state.total = state.total + action.payload
    },
    withdraw: (state, action) => {
      state.total = state.total - action.payload
    }
  }
})

export default homeSlice.reducer