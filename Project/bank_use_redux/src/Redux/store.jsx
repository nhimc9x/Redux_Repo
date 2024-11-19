import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../components/Modal/modalSlice'
import homeReducer from '../components/homeSlice'
import transactionsReducer from '../components/HistoryBank/transactionsSlice'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    surplus: homeReducer,
    transactions: transactionsReducer
  }
})

export default store