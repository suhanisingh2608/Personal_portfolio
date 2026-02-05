import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      image: '✅',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts and interactive visualizations.',
      technologies: ['React', 'Weather API', 'Chart.js', 'Geolocation'],
      image: '🌤️',
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, categories, and user authentication.',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth'],
      image: '📝',
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Portfolio Generator',
      description: 'An automated portfolio generator that creates professional portfolios from JSON data.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Export'],
      image: '🎨',
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description: 'A dashboard for analyzing social media metrics with charts and data visualization.',
      technologies: ['React', 'Chart.js', 'Recharts', 'APIs'],
      image: '📊',
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of projects I've built demonstrating my skills and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Project Image/Icon */}
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-48 flex items-center justify-center">
                <div className="text-7xl">{project.image}</div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 border-t border-gray-200 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
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
