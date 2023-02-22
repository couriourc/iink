import { createSlice, createSelector } from '@reduxjs/toolkit';
export const PenSlice = createSlice({
  name: 'pen',
  initialState: {
    config: {},
    context: null,
    pen: null,
  },
  reducers: {
    addContext(state, context) {
      state.context = context;
    },
    setPenConfig(state, config) {
      state.context.lineJoin = config.lineJoin;
      state.context.lineWidth = config.lineWidth;
      state.context.strokeStyle = config.color;
    },
  },
});
export const { addContext, setPenConfig } = PenSlice.actions;
export default PenSlice.reducer;
