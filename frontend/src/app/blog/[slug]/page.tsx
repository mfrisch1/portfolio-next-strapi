import { getBlogById } from "@/lib/api/blogs"
import { Blog } from "@/types/blog"
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown"

type Props = {
	params: { slug: string };
};

export default async function BlogPost({ params }: Props) {
	// Retreive docId from slug and search for the content
	const docId = params.slug.split("-").pop();
	if (docId === undefined) notFound();
	const blog: Blog = await getBlogById(docId);

	if (blog == null) return notFound();

	return (
	<div>
		<div>{JSON.stringify(blog)}</div>
		<h1>{blog.title}</h1>
		<ReactMarkdown 
			children={blog.content}
		/>
	</div>
	)
}
