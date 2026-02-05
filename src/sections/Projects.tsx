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
          <p className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Projects I've Built</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real problems, creative solutions, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex flex-col group"
            >
              {/* Project Image/Icon */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                <div className="text-7xl">{project.image}</div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-blue-600/20 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 border-t border-gray-700/50 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-300 font-semibold text-sm transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-300 font-semibold text-sm transition-colors"
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
