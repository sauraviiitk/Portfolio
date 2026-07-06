import { Mail } from 'lucide-react'
import { profile } from '../data'

export default function ConnectSection() {
  return (
    <section className="container-main">
      <div className="glass-card p-10 sm:p-14 flex flex-col items-center text-center gap-5">
        <h2 className="text-[var(--font-h1)] font-bold text-[var(--color-heading)]">Let&apos;s build something</h2>
        <p className="text-[var(--text-muted)] max-w-md">
          Open to backend, full-stack, and distributed systems roles or collaborations. Reach out and I&apos;ll get back to you.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[var(--color-primary)] text-[var(--color-primary-fg)] hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Mail className="w-4 h-4" />
          {profile.email}
        </a>
      </div>
    </section>
  )
}
