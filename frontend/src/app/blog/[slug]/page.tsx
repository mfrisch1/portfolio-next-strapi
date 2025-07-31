import { getBlogById } from "@/lib/api/blogs"
import { Blog } from "@/types/blog"
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown"
import { StrapiSingleResponse } from "@/types/common"
import Image from "next/image";
import { STRAPI_URL } from "@/lib/strapi";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type Props = {
	params: { slug: string };
};

export default async function BlogPost({ params }: Props) {
	// Retreive docId from slug and search for the content
	const docId = params.slug.split("-").pop();
	if (docId === undefined) notFound();
	const data: StrapiSingleResponse<Blog> = await getBlogById(docId);
	const blog: Blog = data.data

	if (!blog) return notFound();

	return (
		<div className="mx-auto mt-15 pb-10 w-full px-4 sm:px-6 lg:px-8 max-w-screen-md">
			{/* <div>{JSON.stringify(data)}</div> */}
			<Image 
					width={400}
					height={200}
					src={`${STRAPI_URL}${blog.cover.url}`} 
					alt="Cover Image Here"
					className="w-full h-full object-cover mb-6"
				/>
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
				{blog.title}
			</h1>
			<div className="divider"></div>
			{/* TODO: Fix and assess rehypeRaw */}
			<ReactMarkdown 
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
				children={blog.content}
			/>
		</div>
	)
}
