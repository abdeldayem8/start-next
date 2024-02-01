'use client'
import { configureStore } from "@reduxjs/toolkit";
import collapseSidebarReducer from './collapseSlice'
export const Store =configureStore({
    reducer:{
        collapse:collapseSidebarReducer,
    }
})