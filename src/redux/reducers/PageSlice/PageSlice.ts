import { createSlice } from "@reduxjs/toolkit";

interface PageProps {
  activePage: number;
}

const initialState: PageProps = {
  activePage: 1,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload.value;
    },
  },
});

export const { setActivePage } = pageSlice.actions;

export default pageSlice.reducer;
