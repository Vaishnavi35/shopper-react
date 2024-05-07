import { configureStore } from '@reduxjs/toolkit';
import SubMenuReducer from '../slices/SubMenuReducer';

export const SubMenuHoverStore = configureStore({
    reducer:{
        SubMenuSlice : SubMenuReducer
    }
})