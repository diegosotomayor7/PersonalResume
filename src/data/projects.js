// Each project is a "piece" in the gallery.
// Replace the samples below with your real work.
// `image` paths can live in /public or be imported from /src/assets.

export const projects = [
  {
    id: 'sample-one',
    title: 'Pokemon: Higher or Lower',
    year: 2025,
    medium: 'Python, JavaScript, HTML, CSS',
    image: '/logos/pokelogo.png',
    poster: '/posters/pokemon_poster.png',
    media: { type: 'video', src: '/videos/pokemon.mp4' },
    description:
      'A Chrome extension that lets users play a simple game of "Higher or Lower" with Pokemon stats. The extension displays two random Pokemon, prompting the user to guess which one has a higher base stat total. The game keeps track of the user\'s score and provides feedback on their guesses.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension', 'ChromeAPI', 'PokeAPI'],
    github: 'https://github.com/diegosotomayor7/Chrome-Extension-Higher-or-Lower-Pokemon-Version-',
  },
  {
    id: 'sample-two',
    title: 'NASA SUITS Competition',
    year: 2026,
    medium: 'Frontend: React, Backend: FastAPI',
    image: '/logos/nasa_suits_logo.jpg',
    poster: '/posters/nasa_poster.png',
    media: { type: 'video', src: '/videos/nasa.mp4' },
    description:
      "NASA SUITS (Spacesuit User Interface Technologies for Students) is a challenge that tasks university teams with designing and building software interfaces for space exploration. For the 2026 competition, my team built a three-screen display system that helps astronauts autonomously navigate the lunar south pole and search for a damaged Lunar Terrain Vehicle (LTV). My task was to design a telemetry dashboard that would reduce astronaut cognitive load during high-stakes tasks. Our design was selected as one of the top 5 designs in the nation, earning us the opportunity to test our interface in person at the Johnson Space Center.",
    tech: ['React', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Docker'],
    github: 'https://github.com/Rice-ARVR/OWL-SUITS-2026-PR',
  },
  {
    id: 'sample-three',
    title: 'TXR Hackathon Project',
    year: 2026,
    medium: 'Figma, Unity',
    image: '/logos/vrheadset.webp',
    poster: '/posters/txr_poster.png',
    media: { type: 'video', src: '/videos/txr.mp4' },
    description:
      'A fun, virtual reality project built for the TXR Hackathon. Designed to make training for underwater welding cheaper and safer, this VR experience allows users to practice welding in a simulated underwater environment. I designed the score, oxygen and time components of the interface and wrote the code to integrate them with the Unity game engine. The project was awarded the "Best Solution" award.',
    tech: ['Figma', 'Unity', 'C#', 'Meta Quest'],
    github: null,
  },
  {
    id: 'sample-four',
    title: 'Graph Machine Learning Research',
    year: 2026,
    medium: 'PyTorch',
    image: '/logos/graph.png',
    media: { type: 'image', src: '/posters/graphsposter.png' },
    description:
      'Research project focused on answering the question: "Is Link Prediction beneficial for downstream Node Classification?" Implemented downstream Graph Convolutional Network (GCN) Node Classification, and three Link Prediction methods. Then augmented graphs based on two approaches. Saw an increase of 2.5% in classification accuracy in the Cora dataset. Working on a paper to submit to a peer-reviewed journal.',
    tech: ['PyTorch', 'GNNs', 'GCNs', 'Graph Machine Learning', 'Matplotlib', 'NumPy', 'SciPy'],
    github: null,
  },
]
