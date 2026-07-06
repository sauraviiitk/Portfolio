import { ExternalLink } from 'lucide-react'
import { experience } from '../data'
import SectionHeader from './SectionHeader'

export default function ExperienceSection() {
  return (
    <section className="container-main">
      <SectionHeader
        title="Work Experience"
        description="Hands-on backend engineering: production APIs, auth systems, and reliability fixes."
      />

      <div className="flex flex-col gap-5">
        {experience.map((job) => (
          <div key={job.company} className="glass-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-bold text-[var(--font-body-lg)] text-[var(--color-heading)]">{job.role}</h3>
                <p className="text-[var(--text-muted)] text-sm">{job.company}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[var(--text-muted)] whitespace-nowrap">{job.period}</span>
                {job.certificate && (
                  <a
                    href={job.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                  >
                    Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              {job.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-[var(--text-subtle)] leading-relaxed">
                  <span className="text-[var(--text-muted)] mt-1.5 block w-1 h-1 rounded-full bg-current shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
