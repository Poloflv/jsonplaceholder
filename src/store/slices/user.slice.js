import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  initialState: initialState,
  name: "user",
  reducers: {
    gmailUser: (state, action) => {
        const newEmail = action.payload
        state.email = newEmail
    },
    passwordUserd: (state, action) => {
        const newPassword = action.payload
        state.password = newPassword
    }
  }
});

export const { gmailUser, passwordUserd } = userSlice.actions;

export default userSlice.reducer