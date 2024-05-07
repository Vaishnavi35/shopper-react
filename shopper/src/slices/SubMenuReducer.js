import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    hoverSubMenu : "Home Decor",
    hoverType : "hover"
}


export const subMenuSlice = createSlice({
    name : "SubMenuSlice",
    initialState,
    reducers : {
        hoverOnSubMenu : (state,action) => {
            if(action.payload.hoverSubMenu){
                state.hoverSubMenu = action.payload.hoverSubMenu;
            }
            
            if(action.payload.hoverType){
                state.hoverType = action.payload.hoverType
            }
        },
        leaveSubMenu : (state) => {
            state.hoverSubMenu = "";
            state.hoverType = "leave"
        }
    }
});

export const {hoverOnSubMenu, leaveSubMenu} = subMenuSlice.actions;
export default subMenuSlice.reducer;