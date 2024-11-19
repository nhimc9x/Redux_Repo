import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalStatus: false,
    modalType: null
  },
  reducers: {
    showModal: (state, action) => {
      state.modalStatus = true
      state.modalType = action.payload
    },
    hideModal: (state) => {
      state.modalStatus = false
      state.modalType = null
    }
  }
})

export default modalSlice.reducer