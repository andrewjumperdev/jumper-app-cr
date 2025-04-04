import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchArticleById = createAsyncThunk(
  'articles/fetchById',
  async (id: string) => {
    const res = await axios.get(`/api/articles/${id}`)
    return res.data
  }
)

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    entities: {} as Record<string, any>,
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      const article = action.payload
      state.entities[article._id] = article
    })
  }
})

export default articlesSlice.reducer