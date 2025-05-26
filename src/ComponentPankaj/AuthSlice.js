import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice(
    {
        name: "Auth",
        initialState :{
            isLogin:false,
            username:null
        },
        reducers:{
            Login:(state,action) => {
                state.isLogin = true;
                state.username=action.payload;
            },
            LogOut:(state,action) => {
                state.isLogin = false;
                state.username = null;
            }
        }
    }
)
export const {Login,LogOut} = AuthSlice.actions;
export default AuthSlice.reducer;