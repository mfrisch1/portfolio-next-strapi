import { ProjectCard } from "@/types/project"
import { StrapiResponse } from "@/types/common"
import Card from "@/components/Card"
import { notFound } from "next/navigation"
import { STRAPI_URL } from "@/lib/strapi"
import { getProjects } from "@/lib/api/projects"

export default async function ProjectList() {
	const data: StrapiResponse<ProjectCard> = await getProjects();

	if (!data) notFound();

	const projects: ProjectCard[] = data.data;

	return (
		<div className="max-w-md mx-auto grid grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
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
	)
}
