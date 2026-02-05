import React from 'react'
import { Calendar, MapPin, Award } from 'lucide-react'

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
        'Currently in first year',
        'Active participant in Smart India Hackathon (SIH)',
        'Winner of internal hackathon competition',
        'Active contributor to open-source and GSoC projects',
      ],
    },
  ]

  const certifications = [
    { name: 'Smart India Hackathon Participant', issuer: 'Ministry of Education, Govt. of India', year: 2024 },
    { name: 'Internal Hackathon Winner', issuer: 'Newton School of Technology', year: 2024 },
    { name: 'Google Summer of Code Contributor', issuer: 'Google Open Source', year: 2024 },
  ]

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-2">Background</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Education & Awards</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My academic journey and achievements so far.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Academic Background</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg p-8 border-l-4 border-blue-400 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-lg text-blue-300 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    GPA: {edu.gpa}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-blue-300" />
                    <span>
                      {edu.startYear} {edu.endYear ? `- ${edu.endYear}` : `- Present`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-blue-300" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-white mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-auto">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
