import { notFound } from 'next/navigation';
import ProjectTemplate from '../../(components)/ProjectTemplate';
import projects from '../../../data/projets.json';

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // await la Promise ici

  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) return notFound();

  return <ProjectTemplate project={project} />;
}