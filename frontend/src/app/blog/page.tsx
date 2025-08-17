import { BlogCard } from "@/types/blog"
import { getBlogs } from "@/lib/api/blogs"
import { StrapiResponse } from "@/types/common"
import Card from "@/components/Card"
import Pagination from "@/components/Pagination"
import { notFound } from "next/navigation"
import { STRAPI_URL } from "@/lib/strapi"

interface Props {
	searchParams: { page?: string }
}

export default async function BlogList({searchParams}: Props) {
	const page = parseInt(searchParams.page || "1", 10);
	const pageSize=4;
	const data: StrapiResponse<BlogCard> = await getBlogs(page, pageSize);

	if (!data) notFound();

	const blogs: BlogCard[] = data.data;
	const totalPages = data.meta.pagination.pageCount;

	return (
		<>
			<div 
				className="max-w-md mx-auto grid grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-2 gap-6 p-4"
			>
				{blogs.map(blog=> (
					<Card
						key={blog.id}
						title={blog.title}
						slug={`/${blog.slug}-${blog.documentId}`}
						description={blog.description || "No Description Provided"}
						coverURL={`${STRAPI_URL}${blog.cover.url}`}
						tags={blog.tags}
						type={'blog'}
					/>
				))}
			</div>
			<Pagination 
				page={page}
				totalPages={totalPages}
			/>
		</>
	)
}
