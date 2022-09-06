import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  classes: [],
  isError: false,
  isSuccess: false,
    isLoading: false,
    message: ""
};

export const getClassSlice = createSlice({
    name: "classes",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        
    }
});


