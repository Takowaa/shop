import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk("products/getProducts", async ()=>{
  const {data} = await axios('https://fakestoreapi.com/products')
  return data
})

export const getSingleProduct = createAsyncThunk("products/getSingleProduct", async (id)=>{
  const {data} = await axios(`https://fakestoreapi.com/products/${id}`)
  return data
})

