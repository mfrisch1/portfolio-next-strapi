import type { MediaAttributes } from "./media";
import type { Tag, StrapiResponse } from "./common"

export interface Blog {
	id: number;
  documentId: string;
  locale: string;
  title: string;
	description: string | null;
  slug: string;
  content: string;
  cover: MediaAttributes
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
	tags?: StrapiResponse<Tag>;
}

export interface BlogCard {
	id: number;
	documentId: string;
	title: string;
	description: string | null;
  slug: string;
  cover: {
		id: number
		documentId: string;
		url: string;
	};
	tags: {
		id: number;
		documentId: string;
		name: string;
	}
  publishedAt: string;
}
