import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import  loginModalReducer    from "../slices/LoginReducer";

export const LoginStore = configureStore({
    reducer : {
        loginModalSlice : loginModalReducer  ,
    }
})
