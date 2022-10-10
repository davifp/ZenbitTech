import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface NameState {
  value: string;
}

const initialState: NameState = {
  value: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = nameSlice.actions;

export const selectCount = (state: RootState) => state.name.value;

export default nameSlice.reducer;
