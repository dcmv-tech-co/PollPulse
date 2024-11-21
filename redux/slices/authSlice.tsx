import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isFirstLaunch: boolean;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isFirstLaunch: true,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFirstLaunch: (state, action: PayloadAction<boolean>) => {
      state.isFirstLaunch = action.payload;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setFirstLaunch, login, logout } = authSlice.actions;
export default authSlice.reducer;
