import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    email: null,
    role: null,
  },
  reducers: {
    setUser(state, action) {
      const { user } = action.payload;
      state.name = user.name;
      state.email = user.email;
      state.role = user.role;
    },
    logoutUser(state) {
      state.name = null;
      state.email = null;
      state.role = null;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice;
