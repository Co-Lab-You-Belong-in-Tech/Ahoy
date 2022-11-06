import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import matchSlice from '../features/match/matchSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    match: matchSlice.reducer,
  },
});

export default store;
