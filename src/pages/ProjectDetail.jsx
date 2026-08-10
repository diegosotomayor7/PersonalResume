import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl">Not on display</h1>
        <Link to="/" className="text-gallery-brass mt-4 underline">
          Return to exhibit
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="text-gallery-brass hover:text-gallery-brass-dark text-sm uppercase tracking-widest transition-colors"
        >
          ← Back to exhibit
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-4/3 overflow-hidden rounded shadow-2xl bg-gallery-muted/20">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              )}
            </div>

            {project.media && (
              <div className="relative aspect-4/3 overflow-hidden rounded shadow-2xl bg-gallery-muted/20">
                {project.media.type === 'video' ? (
                  <video
                    src={project.media.src}
                    controls
                    playsInline
                    poster={project.poster}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                ) : (
                  <img
                    src={project.media.src}
                    alt={`${project.title} detail`}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                )}
              </div>
            )}
          </div>

          <div>
            <p className="text-gallery-brass text-xs uppercase tracking-[0.3em]">
              {project.medium}
            </p>
            <h1 className="font-display mt-2 text-4xl md:text-5xl font-medium leading-tight">
              {project.title}
            </h1>
            <p className="text-gallery-muted mt-1">{project.year}</p>

            <p className="mt-6 text-lg leading-relaxed">{project.description}</p>

            {project.tech?.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="border-gallery-brass/40 text-gallery-ink rounded-full border px-3 py-1 text-xs uppercase tracking-wide"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}

            {project.github && (
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gallery-frame hover:bg-gallery-brass-dark text-gallery-wall inline-block px-6 py-3 text-sm uppercase tracking-widest transition-colors"
                >
                  View code
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
