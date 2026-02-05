import React from "react";
import { Zap } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "C++", "HTML/CSS"],
    },
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "Responsive Design"],
    },
    { category: "Backend", skills: ["Node.js", "Databases", "APIs"] },
    { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Linux"] },
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Leadership",
    "Creativity",
    "Adaptability",
    "Time Management",
    "Critical Thinking",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 via-pastel-purple/30 to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 rounded-full mb-6">
            <Zap size={16} className="text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">
              Skills
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            What I Can Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A mix of technical chops and soft skills that help me build great
            things and work well with others.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-200/50 transition-all duration-300 group"
              >
                <h4 className="text-lg font-bold text-indigo-600 mb-4 group-hover:text-indigo-700">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-gray-700 font-medium text-sm"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-pastel-pink to-pastel-purple rounded-full border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300 font-semibold text-gray-900 text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Levels */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Proficiency Levels
          </h3>
          <div className="space-y-8">
            {[
              {
                skill: "Python & Problem Solving",
                level: 80,
                color: "from-yellow-400 to-orange-400",
              },
              {
                skill: "JavaScript & Frontend Development",
                level: 75,
                color: "from-blue-400 to-cyan-400",
              },
              {
                skill: "Data Structures & Algorithms",
                level: 75,
                color: "from-purple-400 to-pink-400",
              },
              {
                skill: "Web Development & APIs",
                level: 70,
                color: "from-green-400 to-emerald-400",
              },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-3">
                  <span className="font-bold text-gray-900">{item.skill}</span>
                  <span className="font-bold text-indigo-600">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
