import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CLASS__URL = "students-Class-Request";


const initialState = {
  classes: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};



export const getAllClasses = createAsyncThunk(
  "classData/getClassData",
  async (thunkAPI) => {
    try {
      return await axios.get(CLASS__URL);
    } catch (error) {
      const message = error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const createClass = createAsyncThunk("classData/getClassData",
  async (classData, thunkAPI) => {
    try {
     return axios.post(CLASS__URL, classData)
      
    } catch (error) {
      const message = error.message;

      return thunkAPI.rejectWithValue(message);
    }
}
)

export const getClassSlice = createSlice({
    name: "classData",
    initialState: initialState,

    extraReducers: (builder) => {
      builder
        .addCase(getAllClasses.pending, (state) => {
          state.isLoading = true;
          
        })
        .addCase(getAllClasses.fulfilled, (state, action) => {
          state.isLoading = false;
          state.classes = action.payload;
          state.isError = null;
        })
        .addCase(getAllClasses.rejected, (state, action) => {
          state.isLoading = false;
          state.classes = null;
          state.isError = action.payload;
        })
       
      
    }
});



export default getClassSlice.reducer;
