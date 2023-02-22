import { configureStore } from '@reduxjs/toolkit';

export const BoardStore = configureStore({
  name: 'board',
  middleware() {},
  reducer(action) {
    if (action == 'pen') {
      //
    }
  },
});
