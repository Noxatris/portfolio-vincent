import { notFound } from 'next/navigation';
import ProjectTemplate from '../../(components)/ProjectTemplate';
import projects from '../../../data/projets.json';

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default async function ProjectPageWrapper(props: { params: any }) {
  // Force resolution au cas où params serait une Promise
  const params = await Promise.resolve(props.params);

  return <ProjectPage params={params} />;
}

function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return <ProjectTemplate project={project} />;
}
