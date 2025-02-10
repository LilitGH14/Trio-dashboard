import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  user: null,
  openSidebar: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setOpenSidbar(state) {
      state.openSidebar = !state.openSidebar;
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
  },
});

export const { setUser, setOpenSidbar } = generalSlice.actions;

export default generalSlice;
