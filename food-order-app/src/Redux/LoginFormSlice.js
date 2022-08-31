import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {
    role: null,
  },
};

export const LoginFormSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.users = {
        ...state.users,
        role: action.payload,
      };
    },
  },
});
export const { login } = LoginFormSlice.actions;

export default LoginFormSlice.reducer;
