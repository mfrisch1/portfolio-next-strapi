import Link from "next/link";
import Footer from "./Footer";

interface Props {
	page: number,
	totalPages: number,
}

export default function Pagination({page, totalPages}: Props) {
	return (
	<>
		<div className="fixed bottom-0 left-0 right-0 bg-base-100 p-4 flex justify-center space-x-4 z-50">
			<Link
				href={`/blog?page=${Math.max(page - 1, 1)}`}
				className={`join-item btn btn-outline ${page <= 1 ? "btn-disabled" : ""}`}
			>
				Previous
			</Link>
			<span className="join-item btn btn-disabled">
				Page {page} of {totalPages}
			</span>
			<Link
				href={`/blog?page=${Math.min(page + 1, totalPages)}`}
				className={`join-item btn btn-outline ${page >= totalPages ? "btn-disabled" : ""}`}
			>
				Next
			</Link>
		</div>
	</>
	)
}
