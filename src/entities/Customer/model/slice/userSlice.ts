import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState, UserData} from '../types/userSchema';

const initialState: UserState = {
  data: null,
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<{user: UserData | null}>) {
      state.data = action.payload.user;
    },
    clearUser(state) {
      state.data = null;
      state.token = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const {setToken, setUser, clearUser, setError, clearError} = userSlice.actions;
export default userSlice.reducer;
