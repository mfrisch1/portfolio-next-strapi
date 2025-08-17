import { STRAPI_URL } from "@/lib/strapi"
import { Project, ProjectCard } from "@/types/project"
import { StrapiResponse, StrapiSingleResponse } from "@/types/common"
import qs from "qs"

export async function getProjects(page:number, pageSize: number): Promise<StrapiResponse<ProjectCard>> {
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
	const res = await fetch(`${STRAPI_URL}/api/projects?${query}`);
	if (!res.ok) {
		throw new Error(`Failed to fetch blogs: ${res.status}`)
	}
	return res.json();
}

export async function getProjectBySlug(slug: string): Promise<StrapiResponse<Project>> {
	const res = await fetch(`${STRAPI_URL}/api/projects/?filters[slug][$eq]=${slug}`);
	if (!res.ok) {
		throw new Error(`Failed to fetch: ${res.status} with ${slug}`)
	}
	return res.json();
} 

export async function getProjectById(docId: string): Promise<StrapiSingleResponse<Project>> {
	const res = await fetch(`${STRAPI_URL}/api/projects/${docId}?populate=*`);
	if (!res.ok) {
		throw new Error(`Failed to fetch: ${res.status} with ${docId}`);
	}
	return res.json();
}
