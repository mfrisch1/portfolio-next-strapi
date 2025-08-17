import { ProjectCard } from "@/types/project"
import { StrapiResponse } from "@/types/common"
import Card from "@/components/Card"
import Pagination from "@/components/Pagination"
import { notFound } from "next/navigation"
import { STRAPI_URL } from "@/lib/strapi"
import { getProjects } from "@/lib/api/projects"
import ""

interface Props {
	searchParams: { page?: string }
}
export default async function ProjectList({searchParams}:Props) {
	const page = parseInt(searchParams.page || "1", 10);
	const pageSize = 4;
	const data: StrapiResponse<ProjectCard> = await getProjects(page, pageSize);

	if (!data) notFound();

	const projects: ProjectCard[] = data.data;
	const totalPages = data.meta.pagination.pageCount;

	return (
		<>
			<div 
				className="max-w-md mx-auto grid grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-2 gap-6 p-4"
			>
				{projects.map(project=> (
					<Card
						key={project.id}
						title={project.title}
						slug={`/${project.slug}-${project.documentId}`}
						description={project.description || "No Description Provided"}
						coverURL={`${STRAPI_URL}${project.cover.url}`}
						tags={project.tags}
						type={'projects'}
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
