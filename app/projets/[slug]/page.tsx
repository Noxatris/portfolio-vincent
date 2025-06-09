import { notFound } from 'next/navigation';
import ProjectTemplate from '../../(components)/ProjectTemplate';
import projects from '../../../data/projets.json';

export async function generateStaticParams() {
  return projects.map(project => ({
    params: { slug: project.slug }
  }));
}

// **Ne pas typer `params` explicitement**
export default async function ProjectPage({ params }: any) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return <ProjectTemplate project={project} />;
}
