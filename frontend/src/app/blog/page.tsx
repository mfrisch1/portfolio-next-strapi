import Link from "next/link"
import { Blog } from "@/types/blog"
import { StrapiListResponse<T> } from "@/types/common"

export default async function BlogList({
	params
	}: {
	params: Promise<{ slug: string }>
	}) {
	const { slug } = await params
	const data: StrapiListResponse<Blog> = await getBlogs()
	const posts = data.data

	return (
		<ul>
			{posts.map(post=> (
				<li key={post.documentId}>{post.title}</li>
			))}
		</ul>
	)
}

