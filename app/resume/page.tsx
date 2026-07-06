import { Mail, Phone, Code2 } from 'lucide-react'
import { profile, skills, experience, education, achievements, projects } from '../data'
import SectionHeader from '../components/SectionHeader'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'

export const metadata = {
  title: 'Resume — Saurav Kumar'
}

export default function ResumePage() {
  return (
    <div className="container-main pb-24 animate-slide-up flex flex-col gap-14">
      <div className="glass-card p-8 sm:p-10 flex flex-col items-center text-center gap-4">
        <h1 className="text-[var(--font-h1)] font-extrabold text-[var(--color-heading)]">{profile.name}</h1>
        <p className="text-[var(--text-muted)] font-medium">{profile.position}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[var(--text-muted)]">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-[var(--text-main)]">
            <Mail className="w-4 h-4" /> {profile.email}
          </a>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4" /> {profile.phone}
          </span>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--text-main)]">
            <LinkedinIcon className="w-4 h-4" /> LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--text-main)]">
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
          <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--text-main)]">
            <Code2 className="w-4 h-4" /> LeetCode
          </a>
        </div>
      </div>

      <section>
        <SectionHeader title="Summary" />
        <p className="text-[var(--text-subtle)] leading-relaxed">{profile.heroDescription}</p>
      </section>

      <section>
        <SectionHeader title="Technical Skills" />
        <div className="flex flex-col gap-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col sm:flex-row sm:gap-3">
              <span className="font-semibold text-[var(--color-heading)] text-sm w-48 shrink-0">{category}</span>
              <span className="text-sm text-[var(--text-subtle)]">{items.join(', ')}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Work Experience" />
        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-bold text-[var(--color-heading)]">
                  {job.role} <span className="font-normal text-[var(--text-muted)]">· {job.company}</span>
                </h3>
                <span className="text-sm text-[var(--text-muted)]">{job.period}</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {job.points.map((point, i) => (
                  <li key={i} className="text-sm text-[var(--text-subtle)] leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-current" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Projects" />
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div key={project.slug}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="font-bold text-[var(--color-heading)]">{project.name}</h3>
                <div className="flex gap-3 text-sm text-[var(--text-muted)]">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)]">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)]">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-[var(--text-muted)] italic mb-2">{project.tags.join(', ')}</p>
              <ul className="flex flex-col gap-1.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-[var(--text-subtle)] leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-current" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Education" />
        <div className="flex flex-col gap-3">
          {education.map((ed) => (
            <div key={ed.school} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-bold text-[var(--color-heading)] text-sm">{ed.school}</h3>
                <p className="text-sm text-[var(--text-muted)]">{ed.degree}</p>
              </div>
              <span className="text-sm text-[var(--text-muted)]">{ed.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Achievements & Competitive Programming" />
        <ul className="flex flex-col gap-2">
          {achievements.map((a, i) => (
            <li key={i} className="text-sm text-[var(--text-subtle)] leading-relaxed pl-4 relative">
              <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-current" />
              {a}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
