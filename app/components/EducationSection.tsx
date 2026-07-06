import { GraduationCap, Trophy } from 'lucide-react'
import { education, achievements } from '../data'
import SectionHeader from './SectionHeader'

export default function EducationSection() {
  return (
    <section className="container-main">
      <SectionHeader title="Education" description="Formal training and academic record." />

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {education.map((ed) => (
          <div key={ed.school} className="glass-card p-6 flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary-subtle)] flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-heading)] text-sm">{ed.school}</h3>
              <p className="text-[var(--text-muted)] text-sm">{ed.degree}</p>
              <p className="text-[var(--text-muted)] text-xs mt-1">{ed.period}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionHeader title="Achievements & Competitive Programming" />
      <div className="flex flex-col gap-3">
        {achievements.map((a, i) => (
          <div key={i} className="glass-card p-5 flex gap-3 items-start">
            <Trophy className="w-5 h-5 shrink-0 mt-0.5 text-[var(--text-muted)]" />
            <p className="text-sm text-[var(--text-subtle)] leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
