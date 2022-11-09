import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { matchCallRequest } from './matchAPI';

const initialState = {
  status: 'INITIAL',
  room: {},
};

export const callForMatchAsync = createAsyncThunk(
  'match/call',
  async ({ token, location = { long: 0, lat: 0 } }) => {
    const data = await matchCallRequest(token, location);
    return data;
  },
);

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [callForMatchAsync.pending]: (state) => {
      state.status = 'PENDING';
    },
    [callForMatchAsync.fulfilled]: (state, action) => {
      const { data } = action.payload;
      if (!data || !Object.entries(data).length) {
        return {
          ...initialState,
          status: 'NOT_MATCHED',
        };
      }
      const { room_name: roomName, created_at: createdAt, users } = data;
      return {
        status: 'MATCHED',
        room: {
          roomName,
          createdAt,
          users,
        },
      };
    },
    [callForMatchAsync.rejected]: ({
      ...initialState,
      status: 'FAILED',
    }),
  },
});

export default matchSlice;
