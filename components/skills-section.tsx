export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "HTML/CSS", "MySQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Spring Boot", "Hibernate", "Django"]
    },
    {
      title: "Tools & Technologies",
      skills: ["VS Code", "GitHub", "Postman", "Power BI", "Jupiter Notebook"]
    },
    {
      title: "Web Technologies",
      skills: ["RESTful APIs", "Servlets", "JDBC", "Responsive Design"]
    },
    {
      title: "Cloud & Others",
      skills: ["AWS Cloud (Basics)", "Git", "Data Structures & Algorithms"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          <span className="text-white">My</span> <span className="text-teal-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">Problem Solving</h3>
            <p className="text-teal-400 text-lg">Solved 300+ problems on LeetCode</p>
            <p className="text-gray-400 mt-2">Strong foundation in Data Structures and Algorithms</p>
          </div>
        </div>
      </div>
    </section>
  )
}
