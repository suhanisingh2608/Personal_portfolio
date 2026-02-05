import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Smart India Hackathon Project',
      description: 'Participated in Smart India Hackathon with a real-world problem statement, gaining practical exposure to ideation, development, and team collaboration.',
      technologies: ['Full Stack', 'Problem Solving', 'Teamwork'],
      image: '🏆',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Internal Hackathon Winner',
      description: 'Won the internal hackathon at Newton School of Technology, demonstrating strong technical skills and innovative thinking under time pressure.',
      technologies: ['Development', 'Innovation', 'Speed'],
      image: '🥇',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Web Development Projects',
      description: 'Built multiple responsive web applications using modern tech stacks, focusing on clean code and user experience.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
      image: '💻',
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Open Source Contributions',
      description: 'Active contributor to open-source projects through Google Summer of Code (GSoC), learning from the global developer community.',
      technologies: ['Git', 'Collaboration', 'Open Source', 'Community'],
      image: '🌐',
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Data Structures & Algorithms',
      description: 'Strengthened fundamentals through implementation of DSA concepts and solving complex programming problems.',
      technologies: ['Python', 'C++', 'DSA', 'Problem Solving'],
      image: '📚',
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'Collaborative Projects',
      description: 'Worked on various team projects that enhanced problem-solving skills and practical exposure to software development.',
      technologies: ['Teamwork', 'Development', 'Learning', 'Innovation'],
      image: '👥',
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
