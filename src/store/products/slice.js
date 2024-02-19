import { createSlice } from '@reduxjs/toolkit'
import {getProducts, getSingleProduct} from "./actions.js";

const initialState = {
  products: [],
  productDetails: null,
  isLoadingProducts: false,
  favorites: [],
  cart: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToFavorites: (state,action) =>{
      const test = state.favorites.find((el)=> el.id === action.payload.id)
      if (test){
        state.favorites = state.favorites.filter((el) => el.id !== action.payload.id)
      }else {
        state.favorites = [...state.favorites, action.payload]
      }

    },
    addToCart: (state,action) => {
      const index = state.cart.findIndex(product => product.id === action.payload.id)
      if ( index >= 0){
        state.cart[index].quantity = state.cart[index].quantity + 1
      }else {
        state.cart = [...state.cart, {...action.payload, quantity: 1}]
      }
    },
    removeFromCard: (state,action) => {
      const index = state.cart.findIndex(product => product.id === action.payload.id)
      if ( state.cart[index].quantity === 1){
        state.cart = state.cart.filter((el) =>  el.id !== action.payload.id )
      } else {
        state.cart[index].quantity = state.cart[index].quantity - 1
      }
    },
    clearOfNull: (state) =>{
      state.productDetails = null
    }
  },
  extraReducers: (builder) =>{
    builder.addCase(getProducts.pending, (state) => {
      state.isLoadingProducts = true
    })
      .addCase(getProducts.fulfilled,(state,action) => {
      state.products = action.payload
      state.isLoadingProducts = false
    })
      .addCase(getProducts.rejected, (state) => {
      state.isLoadingProducts = false
    })
      .addCase(getSingleProduct.fulfilled,(state, action) => {
        state.productDetails = action.payload
      })
  }
})

export const {addToFavorites,addToCart,removeFromCard,clearOfNull} = productsSlice.actions
export default productsSlice.reducer