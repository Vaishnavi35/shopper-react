import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    hoverSubMenu : "", // testing
    hoverType : "leave"
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
        }
    }
});

export const {hoverOnSubMenu} = subMenuSlice.actions;
export default subMenuSlice.reducer;