import { createSlice } from '@reduxjs/toolkit'

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [
  ],
  reducers: {
    addTransactionHistory: (state, action) => {
      state.push(action.payload)
    }
  }
})

export default transactionsSlice.reducer