import { getBlogs } from "@/lib/api/blogs";
import { getProjects } from "@/lib/api/projects";
import Link from "next/link";
import { StrapiResponse } from "@/types/common";
import { notFound } from "next/navigation";
import Card from "@/components/Card";
import { BlogCard } from "@/types/blog";
import { ProjectCard } from "@/types/project";
import { STRAPI_URL } from "@/lib/strapi"

export default async function Home() {
	const page = 1;
	const pageSize = 3;
	const dataBlogs: StrapiResponse<BlogCard> = await getBlogs(page, pageSize);

	if (!dataBlogs) notFound();

	const blogs: BlogCard[] = dataBlogs.data;

	const dataProjects: StrapiResponse<ProjectCard> = await getProjects(page, pageSize);

	if (!dataProjects) notFound();

	const projects: ProjectCard[] = dataProjects.data;

  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="hero min-h-[56vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="max-w-xl px-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Mitchell Frisch</h1>
            <p className="py-4 text-base-content/80">
              Physics × CS. I build things, write about what I learn, and ship small systems at the edge of practicality.
            </p>
            <div className="flex gap-3">
              <Link href="#projects" className="btn btn-primary">View Projects</Link>
              <Link href="#blog" className="btn btn-outline">Read Blog</Link>
            </div>
          </div>
          <div className="max-w-lg w-full">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Now</h2>
								{/* TODO: Turn this info to api */}
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>Researching stretchable conductors (PEDOT:PSS)</li>
                  <li>Building storage backends and Next.js apps</li>
                  <li>Learning robotics and control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content switcher tabs */}
      <section className="container mx-auto px-4 lg:px-6 py-10">
        {/* Projects */}
        <div id="projects" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Link href="/projects" className="btn btn-sm btn-ghost">All projects →</Link>
          </div>
          <ProjectsGrid projects={projects} />
        </div>

        <div className="divider my-10" />

        {/* Blog */}
        <div id="blog" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Latest Posts</h2>
            <Link href="/blog" className="btn btn-sm btn-ghost">All posts →</Link>
          </div>
          <BlogGrid blogs={blogs} />
        </div>
      </section>
    </main>
  );
}

// ----- Presentational subcomponents -----

function GridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card bg-base-200 animate-pulse">
          <div className="h-40 bg-base-300" />
          <div className="card-body gap-3">
            <div className="h-4 w-2/3 bg-base-300" />
            <div className="h-4 w-1/2 bg-base-300" />
            <div className="h-12 w-full bg-base-300" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsGrid({ projects }: { projects: any[] }) {
  if (!projects?.length) return <EmptyState title="No projects yet" href="/projects" cta="View all" />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}

function BlogGrid({ blogs }: { blogs: any[] }) {
  if (!blogs?.length) return <EmptyState title="No posts yet" href="/blog" cta="View all" />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}

function EmptyState({ title, href, cta }: { title: string; href: string; cta: string }) {
  return (
    <div className="rounded-box border border-base-300 p-8 text-center">
      <p className="mb-4 text-base-content/70">{title}</p>
      <Link href={href} className="btn btn-primary btn-sm">{cta}</Link>
    </div>
  );
}
