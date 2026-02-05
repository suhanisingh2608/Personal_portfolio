import React from 'react'
import { Code2, Lightbulb, Target, Heart } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Passionate Builder',
      description: 'I love turning ideas into working code and solving real problems.'
    },
    {
      icon: Lightbulb,
      title: 'Always Learning',
      description: 'New tech, new frameworks, new challenges—I\'m in for all of it.'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'I build to make a difference, not just for the sake of building.'
    },
    {
      icon: Heart,
      title: 'Community Minded',
      description: 'Open-source contributions and helping others learn matter to me.'
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100/80 rounded-full mb-6">
            <Heart size={16} className="text-pink-600" />
            <span className="text-sm font-semibold text-pink-700">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">A little bit about me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a first-year BTech student at Newton School of Technology who genuinely loves building things. I thrive in hackathons, contribute to open-source, and am constantly pushing myself to learn and grow.
          </p>
        </div>

        {/* Story section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <div className="bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl h-80 flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-center space-y-4">
              <div className="text-6xl">🎓</div>
              <p className="font-bold text-gray-700">Your Photo</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                My coding journey started with curiosity—what if I could build something cool? That question led me to participate in Smart India Hackathon and win my college's internal hackathon. Every line of code taught me something new.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Today, I'm actively contributing to open-source through Google Summer of Code, strengthening my data structures and algorithms skills, and taking on projects that challenge me. I believe the best way to learn is by building real things and solving actual problems.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-gray-900">Things I love:</p>
              <div className="grid grid-cols-2 gap-2">
                {['Hackathons 🏆', 'Open Source 🌐', 'Clean Code 💯', 'Problem Solving 🧩', 'New Tech 🚀', 'Teaching Others 👥'].map((item) => (
                  <div key={item} className="bg-pastel-blue rounded-lg px-4 py-2 text-sm font-medium text-indigo-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-gradient-to-br from-gray-50 to-pastel-blue rounded-2xl p-6 hover:shadow-lg hover:shadow-indigo-200/50 transition-all duration-300 group border border-gray-200"
              >
                <Icon className="w-10 h-10 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
