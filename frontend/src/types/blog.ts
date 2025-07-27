import type { Media } from "./media";

export interface Blog {
  documentId: string;
  locale: string;
  title: string;
  slug: string;
  content: string;
  cover: Media;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}
