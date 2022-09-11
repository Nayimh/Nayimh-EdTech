import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CLASS__URL = "students-Class-Request";
const CLASS_POST_URL = "student/makeclassRequest";



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


export const createClass = createAsyncThunk("classData/postClassData",
  async (classData, thunkAPI) => {
    try {
      const classReq = await axios.post(CLASS_POST_URL, classData)

      const postClass = await classReq?.data;

      return postClass;
      
      
    } catch (error) {
      const message = error.message;

      

      return thunkAPI.rejectWithValue(message);
    }
}
)

export const updateClass = createAsyncThunk("classData/updateClassDate", async (id, thunkAPI) => {
  const update_url = `student/classRequest/${id}`;
  try {
    
    const updateClass = await axios.put(update_url);

    const newClass = await updateClass?.data;

    return newClass


  } catch (error) {
    
    const message = error.message;

    return thunkAPI.rejectWithValue(message);

  }

} );

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
          state.isSuccess = true;
          state.isError = null;
        })
        .addCase(getAllClasses.rejected, (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
          state.classes = null;
        })
        .addCase(createClass.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createClass.fulfilled, (state, action) => {
          state.isLoading = false;
          state.classes = action.payload;
          state.isSuccess = true;
          state.isError = null;
        })
        .addCase(createClass.rejected, (state, action) => {
          state.isLoading = false;
          state.classes = null;
          state.isError = action.payload;
        })
        .addCase(updateClass.pending, (state) => {
          state.isLoading = true;
        })

        .addCase(updateClass.fulfilled, (state, action) => {
          state.isLoading = false;
          state.classes = action.payload;
          state.isError = false;
          state.isSuccess = true;
        })
        .addCase(updateClass.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
          state.classes = null;
        })
       
      
    }
});



export default getClassSlice.reducer;
