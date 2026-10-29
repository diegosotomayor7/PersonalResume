import { projects } from '../data/projects'
import ProjectCards from '../components/ProjectCards'

const LINKEDIN_URL = 'https://www.linkedin.com/in/diego-sotomayor-0a0b97391'

export default function Exhibit() {
  return (
    <main
      className="min-h-full bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <header className="mx-auto mb-6 flex max-w-7xl flex-col items-center justify-center gap-4 px-6 text-center md:flex-row md:gap-6">
        <h1 className="font-title mt-3 text-4xl tracking-wide text-gallery-wall-dark md:text-6xl">
          Diego's Gallery of Projects
        </h1>
        <div className="relative h-20 w-20 shrink-0 md:h-24 md:w-24">
          <img
            src="/headshot.png"
            alt="Diego Sotomayor"
            className="h-full w-full rounded-full border-4 border-gallery-wall-dark object-cover object-[center_20%] shadow-lg"
          />
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Diego Sotomayor on LinkedIn"
            className="absolute -bottom-1 -right-1 rounded-full shadow-md transition-transform hover:scale-110"
          >
            <img
              src="/linkedinlogo.webp"
              alt=""
              className="h-9 w-9 object-cover md:h-10 md:w-10"
            />
          </a>
        </div>
      </header>

      <ProjectCards projects={projects} />
      
    </main>
  )
}
