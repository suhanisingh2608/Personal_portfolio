import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <p className="text-blue-300 font-semibold text-base uppercase tracking-widest">Developer • Builder • Creator</p>
              <h1 className="text-6xl md:text-7xl font-black text-white leading-tight tracking-tight">
                I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Suhani Singh</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              First-year BTech student at Newton School of Technology. Passionate about building elegant solutions through code, winning hackathons, and contributing to open-source. Always learning, always building.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 border border-blue-400/30"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="bg-gray-700/50 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-gray-500"
              >
                Let's Talk
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-12 flex-wrap">
              <div className="group">
                <p className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">5+</p>
                <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">Projects</p>
              </div>
              <div className="group">
                <p className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">3+</p>
                <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">Years Coding</p>
              </div>
              <div className="group">
                <p className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">1</p>
                <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">Hackathon Winner</p>
              </div>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl h-96 md:h-full flex items-center justify-center p-8">
              <div className="text-center text-white space-y-4">
                <div className="text-6xl">👨‍💻</div>
                <p className="text-xl font-semibold">Add your photo here</p>
                <p className="text-blue-200">Replace this with your profile image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
