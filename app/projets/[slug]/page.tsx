import { notFound } from 'next/navigation';
import ProjectTemplate from '../../(components)/ProjectTemplate';
import projects from '../../../data/projets.json';

export async function generateStaticParams() {
  return projects.map(project => ({
    params: { slug: project.slug }
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>; // Typage accepté
}) {
  // Dans le cas params est Promise, on await
  const resolvedParams = params instanceof Promise ? await params : params;
  
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) return notFound();

  return <ProjectTemplate project={project} />;
}
