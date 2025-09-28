export interface BookTypes {
  id: number;
  title: string;
  description: string;
  publishedYear: number;
  coverImage: string;
  rating: number;
  reviewCount: string;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  author: AuthorType;
  category: categoryType;
  reviews: ReviewType[];
}

export interface AuthorType {
  id: number;
  name: string;
}

export interface ListBooksbyAuthorType {
  author: AuthorType;
  books: BookTypes[];
}

export interface ReviewType {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
  user: {
    id: number;
    name: string;
  };
}
export interface categoryType {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
