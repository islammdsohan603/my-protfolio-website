import projects from '@/data/projects.json';
import { createPageMetadata } from '@/lib/site-metadata';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return createPageMetadata({
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
      path: `/projects/${id}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${id}`,
    image: project.image?.startsWith('http') ? project.image : undefined,
    keywords: project.tech || [],
  });
}

export default function ProjectDetailLayout({ children }) {
  return children;
}
