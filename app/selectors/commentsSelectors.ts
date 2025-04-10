import { RootState } from '../store/store';

// Definí una referencia vacía estable fuera para usar cuando no existan comentarios
const emptyComments: Comment[] = [];

// Selector simple
export const selectCommentsByArticleId = (state: RootState, articleId: string) =>
  state.comments.byArticleId[articleId] || emptyComments;