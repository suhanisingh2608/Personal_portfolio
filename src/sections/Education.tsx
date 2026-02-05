import React from 'react'
import { Calendar, MapPin, Award, Trophy } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Newton School of Technology',
      startYear: 2024,
      currentYear: true,
      location: 'Pune, Maharashtra',
      gpa: '8.2/10',
      highlights: [
        'First year student',
        'Active SIH participant',
        'Internal hackathon winner 🏆',
        'Open-source contributor (GSoC)',
      ],
    },
  ]

  const certifications = [
    { name: 'Smart India Hackathon Participant', issuer: 'Ministry of Education', year: 2024, icon: '🏆' },
    { name: 'Internal Hackathon Winner', issuer: 'Newton School', year: 2024, icon: '🥇' },
    { name: 'Google Summer of Code Contributor', issuer: 'Google Open Source', year: 2024, icon: '🌐' },
  ]

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-gray-50 via-pastel-blue/20 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 rounded-full mb-6">
            <Trophy size={16} className="text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Education & Achievements</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">My Journey So Far</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Growing as a developer, one achievement at a time.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 md:p-10 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-lg text-indigo-600 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-6 py-3 rounded-full font-bold inline-block">
                    GPA: {edu.gpa}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-indigo-600" />
                    <span className="font-medium">
                      {edu.startYear} {edu.endYear ? `- ${edu.endYear}` : `- Present`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-pink-600" />
                    <span className="font-medium">{edu.location}</span>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-4">What I've been up to:</p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Certifications & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{cert.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{cert.issuer}</p>
                <p className="text-sm font-bold text-indigo-600">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
