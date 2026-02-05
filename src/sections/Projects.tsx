import React from 'react'
import { Github, ExternalLink, Zap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Smart India Hackathon',
      description: 'Built a solution for a real-world problem statement in collaboration with my team.',
      technologies: ['Full Stack', 'Innovation', 'Teamwork'],
      image: '🏆',
      github: '#',
      live: '#',
      color: 'from-yellow-300 to-orange-300',
    },
    {
      id: 2,
      title: 'Hackathon Winner',
      description: 'Won the internal hackathon competition at my college. Fast thinking meets clean code.',
      technologies: ['Speed', 'Creativity', 'Execution'],
      image: '🥇',
      github: '#',
      live: '#',
      color: 'from-amber-300 to-yellow-300',
    },
    {
      id: 3,
      title: 'Web Development Projects',
      description: 'Built responsive web apps with modern tech stacks. User experience is my priority.',
      technologies: ['React', 'Tailwind', 'JavaScript'],
      image: '💻',
      github: '#',
      live: '#',
      color: 'from-blue-300 to-cyan-300',
    },
    {
      id: 4,
      title: 'Open Source Contributions',
      description: 'Contributing to real-world projects through Google Summer of Code. Learning from the global community.',
      technologies: ['Open Source', 'Collaboration', 'Git'],
      image: '🌐',
      github: '#',
      live: '#',
      color: 'from-green-300 to-emerald-300',
    },
    {
      id: 5,
      title: 'DSA & Algorithms',
      description: 'Strengthening my problem-solving skills with data structures and competitive programming.',
      technologies: ['Python', 'C++', 'Problem Solving'],
      image: '📚',
      github: '#',
      live: '#',
      color: 'from-purple-300 to-pink-300',
    },
    {
      id: 6,
      title: 'Team Collaborations',
      description: 'Working with amazing teammates to ship features, fix bugs, and ship fast.',
      technologies: ['Teamwork', 'DevOps', 'Agile'],
      image: '👥',
      github: '#',
      live: '#',
      color: 'from-pink-300 to-red-300',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 rounded-full mb-6">
            <Zap size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700">Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Things I've Built</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From hackathon wins to open-source contributions, here's what I've been working on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300 flex flex-col group"
            >
              {/* Project Image/Icon */}
              <div className={`bg-gradient-to-br ${project.color} h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-6xl">{project.image}</div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 border-t border-gray-200 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-bold text-sm transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-bold text-sm transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
