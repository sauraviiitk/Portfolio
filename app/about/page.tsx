import { skills, profile } from '../data'
import SectionHeader from '../components/SectionHeader'

export const metadata = {
  title: 'About — Saurav Kumar'
}

export default function AboutPage() {
  return (
    <div className="container-main pb-24 animate-slide-up flex flex-col gap-16">
      <div>
        <SectionHeader
          title="Engineering Profile"
          description={profile.heroDescription}
        />
      </div>

      <section>
        <SectionHeader
          title="Tech Stack"
          description="Day-to-day toolkit: languages, frameworks, databases, and infrastructure."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-card p-6">
              <h3 className="font-semibold text-sm text-[var(--text-muted)] uppercase tracking-wide mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full bg-[var(--color-primary-subtle)] border border-[var(--border-color)] text-[var(--text-main)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          title="Engineering Principles"
          description="How I approach building systems."
        />
       <div className="glass-card p-8 flex flex-col gap-4 text-[var(--text-subtle)] leading-relaxed">
  <p>
    I'm an aspiring Software Development Engineer passionate about building scalable,
    user-focused applications with modern web technologies and Generative AI. I enjoy
    turning complex ideas into clean, reliable, and efficient software.
  </p>

  <p>
    My primary stack is MERN, and I love exploring system design, backend engineering,
    distributed systems, and AI-powered applications. I focus on writing modular,
    maintainable code while continuously learning industry best practices for building
    production-ready software.
  </p>

  <p>
    Apart of development, I strengthen my problem-solving skills through competitive
    programming, with 700+ problems solved across LeetCode, Codeforces, and CodeChef.
    I'm always eager to learn new technologies and take on challenging engineering
    problems.
  </p>
</div>
      </section>
    </div>
  )
}
