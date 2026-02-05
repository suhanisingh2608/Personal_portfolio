import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-blue-600 font-semibold text-lg">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Suhani Singh</span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              A first-year BTech student at Newton School of Technology, Pune. Enthusiastic learner passionate about solving real-world problems through code, open-source contributions, and collaborative innovation. I thrive in hackathons and love building impactful solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 flex-wrap">
              <div>
                <p className="text-3xl font-bold text-gray-900">5+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">3+</p>
                <p className="text-gray-600">Years of Learning</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">10+</p>
                <p className="text-gray-600">Skills Mastered</p>
              </div>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl h-96 md:h-full flex items-center justify-center p-8">
              <div className="text-center text-white space-y-4">
                <div className="text-6xl">👨‍💻</div>
                <p className="text-xl font-semibold">Add your photo here</p>
                <p className="text-blue-100">Replace this with your profile image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
