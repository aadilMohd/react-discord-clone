import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../features/counterSlice';
import appReducer from '../features/appSlice';
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
