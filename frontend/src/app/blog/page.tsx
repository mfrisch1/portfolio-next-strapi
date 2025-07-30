import { BlogCard } from "@/types/blog"
import { getBlogs } from "@/lib/api/blogs"
import { StrapiListResponse } from "@/types/common"
import Card from "@/components/Card"
import { notFound } from "next/navigation"
import { STRAPI_URL } from "@/lib/strapi"

export default async function BlogList() {
	const data: StrapiListResponse<BlogCard> = await getBlogs();

	if (!data) notFound();

	const blogs: BlogCard[] = data.data;

	return (
		<div className="max-w-md mx-auto grid grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
			{blogs.map(blog=> (
				<Card
					key={blog.id}
					title={blog.title}
					slug={`/${blog.slug}-${blog.documentId}`}
					description={blog.description || "No Description Provided"}
					coverURL={`${STRAPI_URL}${blog.cover.url}`}
				/>
			))}
		</div>
	)
}

