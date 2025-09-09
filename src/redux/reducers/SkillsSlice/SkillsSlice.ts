import { createSlice } from "@reduxjs/toolkit";
import type { Skill } from "../../../env/skills.env";
import { v4 as uuidv4 } from "uuid";

interface SkillsState {
  skillsList: Skill[];
  skillsQuery: string;
}

const initialState: SkillsState = {
  skillsList: [
    {
      id: uuidv4(),
      name: "TypeScript",
    },
    {
      id: uuidv4(),
      name: "React",
    },
    {
      id: uuidv4(),
      name: "Redux",
    },
  ],
  skillsQuery: ` TypeScript React Redux`,
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addToSkills: (state, action) => {
      state.skillsList = [...state.skillsList, { ...action.payload }];
      state.skillsQuery += ` ${action.payload.name}`;
    },
    removeFromSkills: (state, action) => {
      state.skillsList = state.skillsList.filter(
        (item) => item.id !== action.payload.id
      );
      state.skillsQuery = state.skillsQuery.replace(
        ` ${action.payload.name}`,
        ""
      );
    },
  },
});

export const { addToSkills, removeFromSkills } = skillsSlice.actions;

export default skillsSlice.reducer;
