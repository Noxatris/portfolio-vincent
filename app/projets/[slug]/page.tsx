import { notFound } from 'next/navigation';
import ProjectTemplate from '../../(components)/ProjectTemplate';
import projects from '../../../data/projets.json';

export async function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await projects.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return <ProjectTemplate project={project} />;
}