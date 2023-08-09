import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../services/authSlice';
import categoriesReducer from '../services/categoriesSlices';
import adsReducer from '../services/adsSlices';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoriesReducer,
        ads: adsReducer
    },
});