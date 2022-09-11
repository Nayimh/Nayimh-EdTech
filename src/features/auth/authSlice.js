import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//register user
export const registeruser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
     return await authService.registeruser(user);
    } catch (error) {
      const message = error.message;
      // console.log(message)
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//register user
export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      await authService.loginUser(user);
    } catch (error) {
      const message = error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
  });

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetuser: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registeruser.pending, (state) => {
        state.isError = true;
      })
      .addCase(registeruser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registeruser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.user = null;
        state.message = action.payload
      })
      .addCase(loginUser.pending, (state) => {
        state.isError = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      } )
  },
});

export const { resetuser } = authSlice.actions;

export default authSlice.reducer;
