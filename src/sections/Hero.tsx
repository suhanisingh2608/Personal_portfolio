import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse-soft"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/80 rounded-full w-fit">
              <Sparkles size={16} className="text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">First-year builder 🚀</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="text-gray-900">Hey, I'm</span>{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Suhani</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              I turn ideas into code, win hackathons, and contribute to open-source. Learning something new every day and building cool stuff along the way. 💻
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
              >
                See My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-200 text-gray-900 font-bold rounded-xl hover:bg-gray-300 transition-all duration-300"
              >
                Let's Connect
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-8 flex-wrap">
              <div>
                <p className="text-3xl font-black text-indigo-600">5+</p>
                <p className="text-sm text-gray-600 font-medium">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-black text-pink-500">1</p>
                <p className="text-sm text-gray-600 font-medium">Hackathon Winner</p>
              </div>
              <div>
                <p className="text-3xl font-black text-purple-600">∞</p>
                <p className="text-sm text-gray-600 font-medium">Always Learning</p>
              </div>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-3xl shadow-2xl h-96 md:h-full min-h-96 flex items-center justify-center p-8 relative group">
              <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative text-center space-y-4 z-10">
                <div className="text-7xl animate-bounce-gentle">👩‍💻</div>
                <p className="text-white font-bold text-lg">Add your photo here</p>
                <p className="text-white/80 text-sm">Make it uniquely you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
