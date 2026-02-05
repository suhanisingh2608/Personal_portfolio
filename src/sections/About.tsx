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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know who I am, what drives me, and what I'm passionate about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600 space-y-4">
              <div className="text-6xl">🎓</div>
              <p className="font-semibold">Your Photo</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a first-year student with a passion for technology and innovation. My journey began when I discovered the power of code to create meaningful digital experiences. Since then, I've been on a mission to learn, grow, and contribute to the tech community.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding or studying, you can find me exploring new technologies, collaborating with peers, or working on personal projects that challenge my skills. I believe in the power of continuous learning and staying updated with industry trends.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Quick learner with strong problem-solving abilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Strong communication and teamwork skills</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Attention to detail and dedication to quality</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Passion for staying current with technology trends</span>
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
