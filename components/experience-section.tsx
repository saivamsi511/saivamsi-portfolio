import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin } from 'lucide-react'

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "KodNest",
      location: "Remote",
      duration: "Feb 2025 – Present",
      type: "Internship",
      description: [
        "Contributing to end-to-end development of web applications using React.js, Node.js, and modern tech stacks in an agile environment.",
        "Collaborating with cross-functional teams to implement scalable, responsive, and user-friendly features."
      ],
      technologies: ["React.js", "Node.js", "Agile", "Full Stack Development"]
    },
    {
      title: "Software Intern",
      company: "YHills",
      location: "Remote",
      duration: "May 2023 – Jul 2023",
      type: "Internship",
      description: [
        "Completed a 120-day full-stack internship, building real-world projects with HTML, CSS, JavaScript, React.js, and Node.js.",
        "Gained hands-on experience through 55+ hours of live training, focusing on RESTful APIs, Git, and responsive design."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "RESTful APIs", "Git"]
    }
  ]

  const achievements = [
    {
      title: "Cricket Tournament Organizer",
      description: "Organized a Cricket Tournament under Mandal Level with 5+ teams participating from village level.",
      date: "Sept-Oct 2024"
    },
    {
      title: "Kabaddi Team Captain",
      description: "Captained the Kabaddi team and achieved runners-up position out of eight teams.",
      date: "2020"
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          <span className="text-white">My</span> <span className="text-teal-400">Experience</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-8">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                        {exp.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-orange-400 font-semibold text-lg">
                      {exp.company}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-300 flex items-start">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-white/20 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-8">Achievements & Leadership</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                    <CardDescription className="text-teal-400">
                      {achievement.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Card className="bg-gradient-to-r from-teal-500/20 to-orange-500/20 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Ethical Hacking Certification</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
