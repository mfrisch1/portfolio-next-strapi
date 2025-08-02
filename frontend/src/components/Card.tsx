import Link from "next/link"
import Image from "next/image"
import type { Tag } from "@/types/common";

interface CardProps {
	title: string; 
	description: string; 
	coverURL: string | undefined;
	slug: string;
	tags: Tag | Tag[] | null | undefined;
	type: 'blog'| 'projects';
}
const tagColors = [
  'bg-red-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-teal-500',
  'bg-orange-500',
];

function getColorClass(tagName: string): string {
  const hash = [...tagName].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return tagColors[hash % tagColors.length];
}

export default function Card({ title, coverURL, description, slug, tags, type }: CardProps) {
	const safeTags = !tags
  ? []
  : Array.isArray(tags)
  ? tags
  : [tags];

	return (
		<Link href={`/${type}/${slug}`} className="card w-full shadow-sm m-4">
			<figure className="w-full h-48 overflow-hidden">
				<Image 
					width={400}
					height={200}
					src={`${coverURL}`} 
					alt="Cover Image Here"
					className="w-full h-full object-cover"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
				</h2>
				<p>{description}</p>
				{/* TODO: Turn tags into filter search */}
				<div className="card-actions justify-end">
					{
						safeTags.length > 0 &&
						safeTags?.map(tag=> (
							<div key={tag?.name} className={`badge badge-outline ${getColorClass(tag?.name)}`}>{tag?.name}</div>
						))
					}
				</div>
			</div>
		</Link>
	)
}
