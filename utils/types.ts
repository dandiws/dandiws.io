export interface Project {
  name: string;
  url: string;
  imageUrl: string;
  summary: string;
  year: number;
  tags: string[];
  featured?: boolean;
}

export interface Post {
  title: string;
  publishedAt: string;
  summary: string;
  slug: string;
}
