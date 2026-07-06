import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

export const metadata = {
  title: 'Projects — Saurav Kumar'
}

export default function ProjectsPage() {
  return (
    <div className="container-main pb-24 animate-slide-up">
      <SectionHeader
        title="Projects"
        description="Production-minded builds spanning real-time systems, distributed backends, and full-stack apps."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
