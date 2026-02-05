import React from 'react'
import { Calendar, MapPin, Award } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      startYear: 2023,
      currentYear: true,
      location: 'City, State',
      gpa: '3.8/4.0',
      highlights: [
        'Currently in first year',
        'Strong focus on web development and software engineering',
        'Active in tech clubs and hackathons',
      ],
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      startYear: 2019,
      endYear: 2023,
      location: 'City, State',
      gpa: '3.9/4.0',
      highlights: [
        'Advanced Placement (AP) courses in Computer Science and Mathematics',
        'Coding competition awards and recognition',
      ],
    },
  ]

  const certifications = [
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: 2024 },
    { name: 'React Fundamentals', issuer: 'Frontend Masters', year: 2024 },
    { name: 'Web Development Bootcamp', issuer: 'Online Academy', year: 2023 },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic background and professional certifications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Academic Background</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    GPA: {edu.gpa}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-gray-700 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-blue-600" />
                    <span>
                      {edu.startYear} {edu.endYear ? `- ${edu.endYear}` : `- Present`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-blue-600" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications & Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-auto">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
