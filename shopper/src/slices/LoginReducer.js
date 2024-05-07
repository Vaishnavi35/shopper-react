import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showLoginModal : false,
    showRegisterModal : false,
    showForgotPassword : false,
    showResetPassword : false
}

export const loginModalSlice = createSlice({
    name : 'loginModalSlice',
    initialState,
    reducers : {
        showLoginModal : (state) => {
            state.showLoginModal = !state.showLoginModal;
            state.showRegisterModal = false
        },
        showRegisterModal : (state) => {
            state.showLoginModal = false;
            state.showRegisterModal = !state.showRegisterModal
        },
        forgotPassword : (state, action) => {
            state.showLoginModal = false;
            state.showRegisterModal = false;
            state.showForgotPassword = false;
            state.showResetPassword = false;

            if(action.payload === 'reset_password'){
                state.showResetPassword = true;
            }else{
                state.showForgotPassword = true;
            }
        },
        closeModal : (state) => {
            state.showLoginModal = false;
            state.showRegisterModal = false;
            state.showForgotPassword = false;
            state.showResetPassword = false;
        }
    }
});

export const {showLoginModal,showRegisterModal,forgotPassword,closeModal} = loginModalSlice.actions;
export default loginModalSlice.reducer;