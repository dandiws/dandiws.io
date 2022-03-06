export interface Project {
  name: string;
  url: string;
  imageUrl?: string;
  summary: string;
  longerSummary?: string;
  year: number;
  tags?: string[];
  featured?: boolean;
  githubUrl?: string;
}

export interface Post {
  title: string;
  publishedAt: string;
  summary: string;
  slug: string;
}
