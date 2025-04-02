'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../lib/axios";

export interface Review {
  _id?: string;
  name: string;
  rating: number;
  comment: string;
  createdAt?: string;
}

interface ReviewsState {
  reviews: Review[];
  loading: boolean;
  error: string | null;
}

const initialState: ReviewsState = {
  reviews: [],
  loading: false,
  error: null,
};

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/reviews");
      return response.data;
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (newReview: Review, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/reviews", newReview);
      return response.data;
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    });
    builder.addCase(fetchReviews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    // Agregar review
    builder.addCase(addReview.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews.push(action.payload);
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default reviewSlice.reducer;
