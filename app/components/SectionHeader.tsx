export default function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h2 className="text-[var(--font-h1)] font-bold text-[var(--color-heading)]">{title}</h2>
      {description && <p className="text-[var(--text-muted)] text-[var(--font-body-lg)]">{description}</p>}
    </div>
  )
}
