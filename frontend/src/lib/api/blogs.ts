import { STRAPI_URL } from "@/lib/strapi"
import { Blog, BlogCard } from "@/types/blog"
import { StrapiListResponse } from "@/types/common"
import qs from "qs"

const query = qs.stringify({
	fields: ["title", "description", "slug", "documentId", "publishedAt"],
	populate: {
		cover: {
			fields: ["url"]
		}
	}
})

export async function getBlogs(): Promise<StrapiListResponse<BlogCard>> {
	const res = await fetch(`${STRAPI_URL}/api/blogs?${query}`);
	return res.json();
}

export async function getBlogBySlug(slug: string): Promise<StrapiListResponse<Blog>> {
	const res = await fetch(`${STRAPI_URL}/api/blogs/?filters[slug][$eq]=${slug}`);
	return res.json();
} 

export async function getBlogById(docId: string): Promise<Blog> {
	const res = await fetch(`${STRAPI_URL}/api/blogs/${docId}`);
	if (!res.ok) {
		throw new Error(`Failed to fetch: ${res.status} with ${docId}`);
	}
	return res.json();
}
