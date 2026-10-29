import { useState } from 'react'

export default function ProjectCards({ projects }) {
  const [flippedId, setFlippedId] = useState(null)

  const toggleFlip = (id) => setFlippedId((cur) => (cur === id ? null : id))

  // When an edge card (first or last) is flipped, it pushes toward the
  // center; the rest of the row shifts the same direction, tapering off
  // with distance, which tightens the gaps nearest the flipped card.
  const flippedIdx = projects.findIndex((proj) => proj.id === flippedId)
  const edgeFlip =
    flippedIdx === 0 ? 'first' : flippedIdx === projects.length - 1 ? 'last' : null
  const maxShift = 28

  return (
    <div className="mx-auto grid max-w-8xl grid-cols-2 items-start gap-x-[35px] gap-y-12 px-6 sm:gap-x-[45px] md:grid-cols-4 md:px-16">
      {projects.map((p, idx) => {
        const isFlipped = flippedId === p.id
        const isOther = flippedId !== null && !isFlipped

        let cardShift = 0
        if (edgeFlip === 'first') {
          cardShift = Math.round(maxShift * (1 - idx / (projects.length - 1)))
        } else if (edgeFlip === 'last') {
          const distance = projects.length - 1 - idx
          cardShift = -Math.round(maxShift * (1 - distance / (projects.length - 1)))
        }

        return (
          <div key={p.id} className="flex flex-col">
            <div
              role="button"
              tabIndex={0}
              aria-pressed={isFlipped}
              aria-label={`Flip ${p.title} card`}
              // Real mouse hover flips the card directly - pointerType is checked
              // per-event, so this can't be fooled by touchscreen-laptop quirks
              // where (hover: hover)/(pointer: fine) media features misreport.
              onPointerEnter={(e) => e.pointerType === 'mouse' && setFlippedId(p.id)}
              onPointerLeave={(e) =>
                e.pointerType === 'mouse' && setFlippedId((cur) => (cur === p.id ? null : cur))
              }
              onFocus={() => setFlippedId(p.id)}
              onBlur={() => setFlippedId((cur) => (cur === p.id ? null : cur))}
              // Touch taps toggle instead - kept off pointerType 'mouse' so the
              // synthetic mouseenter a tap fires first can't race the toggle.
              onPointerUp={(e) =>
                (e.pointerType === 'touch' || e.pointerType === 'pen') && toggleFlip(p.id)
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(p.id)
                }
              }}
              style={{ '--card-shift': `${cardShift}px` }}
              className={`relative aspect-4/5 cursor-pointer outline-none transition-transform duration-500 ease-out md:translate-x-[var(--card-shift)] ${
                isFlipped ? 'z-20 scale-125' : isOther ? 'z-0 scale-80 opacity-80' : 'z-10 scale-100'
              }`}
            >
              {/* Picture-frame overlay. Decorative only; sits above the flip content but
                  never blocks hover/click, which are handled by this outer div. */}
              <img
                src="/frame.webp"
                alt=""
                className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none drop-shadow-xl"
              />

              {/* The frame's carved window, as a fraction of the full frame image -
                  the flip content is inset to sit exactly inside it. */}
              <div className="absolute top-[21%] right-[22%] bottom-[20%] left-[22%] z-20 [perspective:1200px]">
                <div
                  className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
                  style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  {/* Front: logo on a white mat, like a photo inside the frame */}
                  <div className="absolute inset-0 overflow-hidden bg-gallery-wall-dark [backface-visibility:hidden]">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-contain p-4"
                      />
                    )}
                  </div>

                  {/* Back: the video/image that used to live on the detail page */}
                  <div className="absolute inset-0 overflow-hidden bg-black [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    {isFlipped && p.media?.type === 'video' && (
                      <video
                        src={p.media.src}
                        poster={p.poster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="absolute inset-0 h-full w-full object-contain"
                      />
                    )}
                    {isFlipped && p.media?.type === 'image' && (
                      <img
                        src={p.media.src}
                        alt={`${p.title} detail`}
                        className="absolute inset-0 h-full w-full object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sits right below the frame at rest; shifts with the card once an
                edge card is hovered/flipped, via the same --card-shift value. */}
            <div
              style={{ '--card-shift': `${cardShift}px` }}
              className="text-center transition-transform duration-500 ease-out md:translate-x-[var(--card-shift)]"
            >
              <h2 className="font-display text-gallery-wall-dark mt-4 text-center text-lg leading-tight font-medium sm:text-2xl">
                {p.title}
              </h2>

              {/* Always visible (not tied to the hover-only flip state) so the link
                  doesn't vanish out from under the cursor before it can be clicked. */}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gallery-wall-dark hover:text-gallery-brass mt-1 inline-block text-center text-xs font-semibold uppercase tracking-widest underline decoration-gallery-brass/70 underline-offset-2 transition-colors"
                >
                  View Code →
                </a>
              )}
            </div>

            <div
              style={{ '--card-shift': `${cardShift}px` }}
              className={`grid transition-all duration-500 ease-out md:translate-x-[var(--card-shift)] ${
                isFlipped ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="bg-gallery-wall border-gallery-brass/40 rounded-md border p-3 shadow-lg">
                  <p className="text-gallery-ink text-xs leading-snug font-medium sm:text-sm">
                    {p.shortDescription}
                  </p>
                  {p.tech?.length > 0 && (
                    <p className="text-gallery-muted mt-1 text-xs leading-snug sm:text-sm">
                      Built with {p.tech.join(', ')}.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
