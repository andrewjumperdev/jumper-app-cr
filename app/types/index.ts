export interface Article {
  _id?: string;
  title: string;
  category: string;
  imageUrl?: string;
  summary: string;
  content: string;
  tags: string[];
  status: 'draft' | 'published';
  createdAt: Date;
}

  
  export interface Comment {
    _id?: string
    articleId: string
    author: string
    message: string
    createdAt: Date
  }

  export interface TechnicalDetail {
    title: string;
    description: string | string[];
  }
  
  export interface Project {
    id: number;
    img: string;
    title: string;
    description: string;
    thumbnail: string;
    urlProject?: string;
    repository?: string;
    mainTools: string[];
    technicalDetails?: TechnicalDetail[];
  }

  export type ReviewType = {
    user: string;
    comment: string;
    rating: number;
    createdAt: Date;
  };
  
  