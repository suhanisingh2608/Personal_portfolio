import React from 'react'
import { Code2, Lightbulb, Target } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Developer',
      description: 'Building responsive and performant web applications with modern technologies.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Creative thinker who enjoys tackling complex challenges and finding elegant solutions.'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Dedicated to continuous learning and delivering high-quality results.'
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know who I am, what drives me, and what I'm passionate about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-100 space-y-4">
              <div className="text-6xl">🎓</div>
              <p className="font-semibold">Your Photo</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a first-year BTech student at Newton School of Technology, Pune, with a passion for technology and innovation. My journey has been shaped by hands-on experiences in hackathons, open-source contributions, and collaborative problem-solving. I believe in learning by doing and challenging myself with real-world problems.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I've had the privilege of participating in prestigious competitions like Smart India Hackathon (SIH) and winning the internal hackathon at my institution. These experiences have given me practical exposure to ideation, teamwork, and building solutions under real-world constraints. Currently, I'm actively involved in Google Summer of Code (GSoC), contributing to open-source projects and learning from the global developer community.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Strong problem-solving and hands-on development skills</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Excellent teamwork and collaborative mindset</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Passionate about open-source contributions and hackathons</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Quick learner dedicated to continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
