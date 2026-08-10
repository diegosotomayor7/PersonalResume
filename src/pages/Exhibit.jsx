import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCarousel from '../components/ProjectCarousel'

// Shared, non-positional styling. Each tourist's size/position lives on its
// own `className` in projects.js so they can be tuned individually.
const touristBaseClass = 'pointer-events-none fixed z-30 select-none transition-opacity duration-500'

export default function Exhibit() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <header className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <h1 className="font-title mt-3 text-4xl tracking-wide text-gallery-wall-dark md:text-6xl">
          Diego's Gallery of Projects
        </h1>
      </header>

      <ProjectCarousel projects={projects} onActiveChange={setActiveProject} />

      <img
        src="/museum_barriers.png"
        alt=""
        className="pointer-events-none fixed -bottom-10 left-1/2 z-20 w-72 -translate-x-1/2 select-none sm:-bottom-28 sm:w-210"
      />

      {projects.map((p) => {
        if (!p.tourists) return null
        const isActive = activeProject?.id === p.id
        return (
          <div key={p.id}>
            <img
              src={p.tourists.left.src}
              alt=""
              className={`${touristBaseClass} ${p.tourists.left.className} ${
                p.tourists.left.pixelArt ? '[image-rendering:pixelated]' : ''
              } ${isActive ? 'opacity-100' : 'opacity-0'}`}
            />
            <img
              src={p.tourists.right.src}
              alt=""
              className={`${touristBaseClass} ${p.tourists.right.className} ${
                p.tourists.right.pixelArt ? '[image-rendering:pixelated]' : ''
              } ${isActive ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        )
      })}
    </main>
  )
}
