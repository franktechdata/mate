import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store";

export interface AppState {
  isLoading: boolean;
  isFail: boolean;
}

const initialState: AppState = {
  isLoading: true,
  isFail: false,
};

export const selectIsLoading = (state: RootState): boolean =>
  state.app.isLoading;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    loading(state) {
      state.isLoading = true;
    },
    loaded(state) {
      state.isLoading = false;
    },
  },
});

export const { loading, loaded } = appSlice.actions;

export default appSlice.reducer;
