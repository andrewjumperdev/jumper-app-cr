export interface Article {
    _id?: string
    title: string
    content: string
    createdAt: Date
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