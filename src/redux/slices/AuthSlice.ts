import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Auth {
  user: User | null;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const initialState: Auth = {
  user: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    saveAuth: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { logout, saveAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
