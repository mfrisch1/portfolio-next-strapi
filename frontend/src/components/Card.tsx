import Link from "next/link"
import Image from "next/image"

interface CardProps {
	title: string;
	description: string;
	coverURL: string | undefined;
	slug: string;
}

export default function Card({ title, coverURL, description, slug }: CardProps) {
	return (
		<div className="card w-80 shadow-sm m-4 bg-gray-900">
			<figure>
				<Image 
					width="400"
					height="200"
					src={`${coverURL}`} 
					alt="Cover Image"
					className="bg-amber-200"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
				</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
					<Link href={`/blog/${slug}`} className="btn btn-primary">
						Read Now
					</Link>
				</div>
			</div>
		</div>
	)
}
