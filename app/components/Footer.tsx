import { Mail, Code2 } from 'lucide-react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const links = [
  { icon: GithubIcon, href: profile.links.github, label: 'Saurav on GitHub' },
  { icon: LinkedinIcon, href: profile.links.linkedin, label: 'Saurav on LinkedIn' },
  { icon: Code2, href: profile.links.leetcode, label: 'Saurav on LeetCode' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email Saurav' }
]

export default function Footer() {
  return (
    <footer className="container-main py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
      <p>Copyright © {new Date().getFullYear()} Saurav Kumar</p>
      <div className="flex items-center gap-4">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="hover:text-[var(--text-main)] transition-colors"
            >
              <Icon className="w-[1.15rem] h-[1.15rem]" />
            </a>
          )
        })}
      </div>
    </footer>
  )
}
