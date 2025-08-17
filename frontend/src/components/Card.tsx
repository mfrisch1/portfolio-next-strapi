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

// Set tag colours with hash
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
		<Link 
			href={`/${type}/${slug}`} 
			className="card flex image-full flex-col shadow-md rounded-lg bg-base-100 overflow-hidden min-h-[225px]"
		>
			<figure className="h-[225px] w-full overflow-hidden">
				<Image 
					width={300}
					height={225}
					src={`${coverURL}`} 
					alt="Cover Image"
					className="w-full h-full object-cover"
				/>
			</figure>
			<div className="card-body flex flex-col justify-between flex-grow">
				<h2 className="card-title">
					{title}
				</h2>
				<p className="line-clamp-3">{description}</p>
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
