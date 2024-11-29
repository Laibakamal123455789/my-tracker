 


 import { configureStore } from "@reduxjs/toolkit";
 import { expenseSlice } from "./slices/expense";
 
 export let store = configureStore({
     reducer:expenseSlice.reducer
 
     
 })