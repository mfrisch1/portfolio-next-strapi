import { getBlogById } from "@/lib/api/blogs"
import { Blog } from "@/types/blog"
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown"
import { StrapiSingleResponse } from "@/types/common"
import Image from "next/image";
import { STRAPI_URL } from "@/lib/strapi";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

type Props = {
	params: { slug: string };
};

export default async function BlogPost({ params }: Props) {
	// Retreive docId from slug and search for the content
	const docId = params.slug.split("-").pop();
	if (!docId) notFound();

	const data: StrapiSingleResponse<Blog> = await getBlogById(docId);
	const blog: Blog = data.data
	if (!blog) return notFound();

	return (
		<article className="mx-auto mt-15 pb-10 w-full px-4 sm:px-6 lg:px-8 max-w-screen-md">
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
			<div className="prose">
				<ReactMarkdown 
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[
						[rehypeHighlight, { detect: true, ignoreMissing: true, preCodeBlock: true, useInlineStyles: false }]
					]}
					children={blog.content}
				/>
			</div>
		</article>
	)
}
