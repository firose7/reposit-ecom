import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "users",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer.reducer;
