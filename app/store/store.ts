'use client'
import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./reviewSlice";
import commentsReducer from './commentsSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
