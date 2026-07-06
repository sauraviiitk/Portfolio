import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const href = project.live ?? project.github;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="glass-card h-full flex flex-col transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[var(--color-border-strong)] group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">

        <div className="relative aspect-video overflow-hidden border-b border-[var(--glass-border)] bg-[var(--color-surface-raised)]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[var(--color-surface-overlay)] border border-[var(--glass-border)]">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-3 p-6">

          <h3 className="text-xl font-bold text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-primary-hover)]">
            {project.name}
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border-color)] bg-[var(--color-primary-subtle)] px-3 py-1 text-xs font-medium text-[var(--text-main)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
}