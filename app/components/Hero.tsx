'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Download, Mail } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: '50%', y: '50%' })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = targetRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: `${e.clientX - rect.left}px`, y: `${e.clientY - rect.top}px` })
  }

  return (
    <section
      ref={targetRef}
      onMouseMove={handleMouseMove}
      className="relative flex justify-center overflow-hidden px-5 pt-8 pb-0"
      style={{ '--x': pos.x, '--y': pos.y } as React.CSSProperties}
    >
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            background: 'var(--primary-color)',
            top: '-10%',
            left: '50%',
            transform: 'translate(calc(-50% + (var(--x) / 15)), calc(var(--y) / 15))',
            transition: 'transform 0.8s cubic-bezier(0.23,1,0.32,1)',
            filter: 'blur(120px)',
            animation: 'blob-wake-up 2.2s var(--ease-out-expo) forwards'
          }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center text-center gap-6">
        <div className="flex flex-col items-center gap-6 animate-slide-up stagger-delay-1">
          <div className="relative w-[130px] h-[130px] rounded-full">
            <div
              className="absolute -inset-2.5 rounded-full opacity-[0.08]"
              style={{ background: 'radial-gradient(circle, var(--text-main) 0%, transparent 65%)' }}
            />
            <div className="w-full h-full rounded-full overflow-hidden bg-[var(--glass-bg)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex items-center justify-center">
              <Image
                src="/saurav.jpg"
                alt={profile.name}
                width={170}
                height={130}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {profile.available && (
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full glass-card">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to new opportunities
            </span>
          )}
        </div>

        <div className="animate-slide-up stagger-delay-2 max-w-2xl flex flex-col gap-4">
          <h1 className="text-[var(--font-hero)] font-extrabold leading-tight bg-gradient-to-br from-[var(--color-heading)] to-[var(--color-primary)] bg-clip-text text-transparent pb-2">
            {profile.name}
          </h1>
          <p className="text-[var(--font-h2)] text-[var(--text-muted)] font-medium">{profile.position}</p>
          <p className="text-[var(--font-body-lg)] text-[var(--text-muted)] leading-relaxed">
            {profile.heroDescription}
          </p>
        </div>

        <div className="animate-slide-up stagger-delay-3 flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="/resume"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-[var(--color-primary)] text-[var(--color-primary-fg)] hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            <Download className="w-4 h-4" />
            View Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold glass-card hover:border-[var(--color-border-strong)] transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
