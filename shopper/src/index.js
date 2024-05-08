import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.jsx';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  {loginModalSlice}   from "./slices/LoginReducer";
import {subMenuSlice} from './slices/SubMenuReducer';


// Combine multiple stores into a single Redux store instance
const rootReducer = combineReducers({
  login: loginModalSlice.reducer,
  subMenuHover: subMenuSlice.reducer
});

const store = configureStore({
  reducer: rootReducer
}); // Create Redux store instance using Redux Toolkit

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LandingPage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
