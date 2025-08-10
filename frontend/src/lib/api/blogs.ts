import { STRAPI_URL } from "@/lib/strapi"
import { Blog, BlogCard } from "@/types/blog"
import { StrapiResponse, StrapiSingleResponse } from "@/types/common"
import qs from 'qs'

export async function getBlogs(page: number, pageSize: number = 4): Promise<StrapiResponse<BlogCard>> {
	const query = qs.stringify({
	sort: ["publishedAt:desc"],
	fields: ["title", "description", "slug", "documentId", "publishedAt"],
	pagination: {
    page,
    pageSize,
  },
	populate: {
		cover: {
			fields: ["url"]
		},
		tags: {
			fields: ["name"]
		},
	}}, {
	encodeValuesOnly: true,
	})

	const res = await fetch(`${STRAPI_URL}/api/blogs?${query}`);

	if (!res.ok) {
		throw new Error(`Failed to fetch blogs: ${res.status}`)
	}
	return res.json();
}

export async function getBlogBySlug(slug: string): Promise<StrapiResponse<Blog>> {
	const res = await fetch(`${STRAPI_URL}/api/blogs/?filters[slug][$eq]=${slug}`);
	if (!res.ok) {
		throw new Error(`Failed to fetch: ${res.status} with ${slug}`)
	}
	return res.json();
} 

export async function getBlogById(docId: string): Promise<StrapiSingleResponse<Blog>> {
	const res = await fetch(`${STRAPI_URL}/api/blogs/${docId}?populate=*`);
	if (!res.ok) {
		throw new Error(`Failed to fetch: ${res.status} with ${docId}`);
	}
	return res.json();
}
