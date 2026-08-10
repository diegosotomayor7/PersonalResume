import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Signed distance from the active slide, wrapped to the shortest direction.
function getOffset(i, index, length) {
  let diff = i - index
  if (diff > length / 2) diff -= length
  if (diff < -length / 2) diff += length
  return diff
}

export default function ProjectCarousel({ projects, onActiveChange }) {
  const [index, setIndex] = useState(0)

  const goPrev = () => setIndex((i) => (i - 1 + projects.length) % projects.length)
  const goNext = () => setIndex((i) => (i + 1) % projects.length)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [projects.length])

  useEffect(() => {
    onActiveChange?.(projects[index])
  }, [index, projects, onActiveChange])

  return (
    <div className="relative w-full">
      <div className="relative h-80 sm:h-[22rem] overflow-hidden">
        {projects.map((p, i) => {
          const diff = getOffset(i, index, projects.length)
          if (Math.abs(diff) > 1) return null

          const isActive = diff === 0
          const card = (
            <div className="relative h-82 w-52 sm:h-102 sm:w-86 overflow-hidden rounded shadow-2xl bg-gallery-muted/20">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              )}
              <div className="absolute inset-x-0 bottom-4 bg-gradient-to-t from-black/85 to-transparent p-4">
                <h1 className="font-display text-xl text-white">{p.title}</h1>
              </div>
            </div>
          )

          return (
            <div
              key={p.id}
              className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${diff * 72}%) scale(${
                  isActive ? 1 : 0.75
                })`,
                opacity: isActive ? 1 : 0.45,
                zIndex: isActive ? 20 : 10,
              }}
            >
              {isActive ? (
                <Link to={`/project/${p.id}`} className="block">
                  {card}
                </Link>
              ) : null}
              {!isActive && (
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${p.title}`}
                  className="block cursor-pointer"
                >
                  {card}
                </button>
              )}
            </div>
          )
        })}
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous project"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gallery-wall text-gallery-brass shadow-md hover:bg-gallery-brass hover:text-gallery-wall transition-colors z-30"
      >
        &#8592;
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next project"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gallery-wall text-gallery-brass shadow-md hover:bg-gallery-brass hover:text-gallery-wall transition-colors z-30"
      >
        &#8594;
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to ${p.title}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? 'bg-gallery-brass' : 'bg-gallery-muted/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
