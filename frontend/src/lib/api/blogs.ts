import { STRAPI_URL } from "@/lib/strapi"
import { Blog } from "@/types/blog"
import { StrapiListResponse } from "@/types/common"

export async function getBlogs(): Promise<StrapiListResponse<Blog>> {
	const res = await fetch(`${STRAPI_URL}/api/blogs`);
	return res.json();
}

export async function getBlogByID(docId: string): Promise<Blog> {
	const res = await fetch(`{$STRAPI_URL}/api/blog/${DocId}`);
	return res.json();
}
