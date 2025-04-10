import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCommentsByArticleId = createAsyncThunk(
  'comments/fetchByArticleId',
  async (articleId: string) => {
    const res = await axios.get(`/api/comments/${articleId}`);
    return { articleId, comments: res.data.comments };
  }
);

interface CommentsState {
  byArticleId: Record<string, Comment[]>;
}

const initialState: CommentsState = {
  byArticleId: {},
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(state, action) {
      const { articleId, comment } = action.payload;
      state.byArticleId[articleId] = [
        ...(state.byArticleId[articleId] || []),
        comment,
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.byArticleId[action.payload.articleId] = action.payload.comments;
    });
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;