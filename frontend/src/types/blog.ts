import type { Media } from "./media";

export interface Blog {
	id: number;
  documentId: string;
  locale: string;
  title: string;
	description: string | null;
  slug: string;
  content: string;
  cover: Media;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogCard {
	id: number;
	documentId: string;
	title: string;
	description: string | null;
  slug: string;
  cover: {
		url: string;
	};
  publishedAt: string;
}
