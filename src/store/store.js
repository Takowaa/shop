import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/slice.js'
export const store = configureStore({
  reducer: {
    products: productsReducer
  },
})