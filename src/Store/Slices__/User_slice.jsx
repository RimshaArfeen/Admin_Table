import { createSlice } from '@reduxjs/toolkit';
import { DelAllUsers } from '../actions'; // Make sure this path is correct

const User_slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(DelAllUsers, () => {
      return [];
    });
  }
});

export const { addUser, removeUser, setUsers } = User_slice.actions;
export default User_slice;
