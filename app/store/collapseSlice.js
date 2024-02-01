"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebaropen: false,
};

const collapseslice = createSlice({
    name:"collapse",
    initialState,
    reducers:{
        togglesidebar: function (prevState) {
            return {
              ...prevState,
              sidebaropen: !prevState.sidebaropen,
            };
          },
    }
})
export const {togglesidebar,sidebaropen} = collapseslice.actions;
export default  collapseslice.reducer;