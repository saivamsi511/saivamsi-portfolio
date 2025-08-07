export function TechStack() {
  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Java', icon: '☕' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'Servlets', icon: '🔧' },
    { name: 'JDBC', icon: '🔗' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '📝' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Postman', icon: '📮' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Hibernate', icon: '💾' },
  ]

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center group hover:opacity-100 transition-opacity">
              <div className="text-2xl mb-1">{tech.icon}</div>
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
