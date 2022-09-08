
import {
  configureStore,
  
} from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import getClassReducer from "../features/getAllClassSlice";





export const store = configureStore({
  reducer: {
    classes: getClassReducer,
    auth: authReducer,
  },

  

});
