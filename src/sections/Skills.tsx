import React from 'react'

export default function Skills() {
  const technicalSkills = [
    { category: 'Languages', skills: ['Python', 'JavaScript', 'C++', 'HTML', 'CSS'] },
    { category: 'Frontend', skills: ['React', 'Tailwind CSS', 'Responsive Design', 'Modern UI'] },
    { category: 'Backend', skills: ['Node.js', 'Databases', 'APIs', 'RESTful Services'] },
    { category: 'Tools & Platforms', skills: ['Git', 'GitHub', 'VS Code', 'Linux'] },
  ]

  const softSkills = [
    'Communication',
    'Problem Solving',
    'Time Management',
    'Teamwork',
    'Leadership',
    'Creativity',
    'Adaptability',
    'Critical Thinking',
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical and interpersonal abilities.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-blue-600">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300"
              >
                <p className="text-gray-900 font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { skill: 'Python & Problem Solving', level: 80 },
              { skill: 'JavaScript & Frontend Development', level: 75 },
              { skill: 'Data Structures & Algorithms', level: 75 },
              { skill: 'Web Development & APIs', level: 70 },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">{item.skill}</span>
                  <span className="text-blue-600 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
