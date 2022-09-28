import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface data {
  value: string[];
}

const initialState: data = {
  value: [],
};

export const imagePreviewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    imagePreviewQuery: (state, action: PayloadAction<string[]>) => {
      state.value.push(...action.payload);
    },
  },
});

export const { imagePreviewQuery } = imagePreviewSlice.actions;
export default imagePreviewSlice.reducer;
