import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import storage from '../../app/persistData';
import { authenticate, signinRequest, signup } from './userApi';
import AUTH_STATUS from './authStatus';

const initialState = {
  authStatus: AUTH_STATUS.initialized,
  token: storage.get('token'),
  name: '',
  role: '',
};

export const signinAsync = createAsyncThunk(
  'user/signin',
  async ({ email, password }) => {
    const data = await signinRequest(email, password);
    return data;
  },
);

export const signupAsync = createAsyncThunk(
  'user/signup',
  async ({ email, password }) => {
    const data = await signup(email, password);
    return data;
  },
);

export const authenticateAsync = createAsyncThunk(
  'user/authenticate',
  async (token) => {
    const userData = await authenticate(token);
    return userData;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: () => {
      storage.remove('token');
      return {
        ...initialState,
        authStatus: AUTH_STATUS.unauthenticated,
      };
    },
    setUnauthenticated: (state) => {
      state.authStatus = AUTH_STATUS.unauthenticated;
    },
  },
  extraReducers: {
    [signinAsync.pending]: (state) => {
      state.authStatus = AUTH_STATUS.authenticating;
    },
    [signinAsync.fulfilled]: (state, action) => {
      const { data } = action.payload;
      storage.set('token', data.token);
      return {
        ...state,
        ...data,
        authStatus: AUTH_STATUS.authenticated,
      };
    },
    [signupAsync.pending]: (state) => {
      state.authStatus = AUTH_STATUS.authenticating;
    },
    [signupAsync.fulfilled]: (state, action) => {
      const { data } = action.payload;
      storage.set('token', data.token);
      return {
        ...state,
        ...data,
        authStatus: AUTH_STATUS.authenticated,
      };
    },
    [authenticateAsync.pending]: (state) => {
      state.authStatus = AUTH_STATUS.authenticating;
    },
    [authenticateAsync.fulfilled]: (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        ...data,
        authStatus: AUTH_STATUS.authenticated,
      };
    },
    [authenticateAsync.rejected]: (state) => {
      state.authStatus = AUTH_STATUS.rejected;
    },
  },
});

export default userSlice;
