import { createSlice } from "@reduxjs/toolkit";

interface AreaState {
  areasList: string[];
  areasQuery: string;
}

const initialState: AreaState = {
  areasList: [],
  areasQuery: "",
};

const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    setAreas: (state, action) => {
      state.areasList = [...action.payload.list];
      state.areasQuery = action.payload.list
        .map((area: string) => {
          if (area === "Москва") {
            return "&area=1";
          } else if (area === "Санкт-Петербург") {
            return "&area=2";
          } else {
            return "";
          }
        })
        .join("");
    },
  },
});

export const { setAreas } = areaSlice.actions;

export default areaSlice.reducer;
