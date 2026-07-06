'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, PenTool, User, FileText, Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme-provider'

const links = [
  { key: 'home', label: 'Home', icon: Home, href: '/' },
  { key: 'projects', label: 'Projects', icon: PenTool, href: '/projects' },
  { key: 'about', label: 'About', icon: User, href: '/about' },
  { key: 'resume', label: 'Resume', icon: FileText, href: '/resume' }
]

export default function Header() {
  const pathname = usePathname()
  const { theme, toggle } = useTheme()

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none animate-slide-down px-4">
      <nav className="glass-card pointer-events-auto flex items-center gap-1 rounded-full p-1.5 backdrop-blur-2xl">
        {links.map((link) => {
          const Icon = link.icon
          const active = isActive(link.href)
          return (
            <Link
              key={link.key}
              href={link.href}
              className={`relative flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-sm font-medium transition-colors ${
                active ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              {active && (
                <span className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/5" />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="w-[1.1rem] h-[1.1rem]" strokeWidth={2} />
                <span className="hidden sm:inline">{link.label}</span>
              </span>
            </Link>
          )
        })}

        <div className="w-px h-5 bg-[var(--border-color)] opacity-60 mx-1" />

        <button
          onClick={toggle}
          aria-label="Toggle color theme"
          className="flex items-center justify-center rounded-full w-9 h-9 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
        >
          {theme === 'light' ? <Moon className="w-[1.1rem] h-[1.1rem]" /> : <Sun className="w-[1.1rem] h-[1.1rem]" />}
        </button>
      </nav>
    </header>
  )
}
