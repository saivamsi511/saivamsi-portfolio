import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    {
      title: "Nature Based Bug Prediction Model",
      description: "A machine learning model built with Python and Django to predict bugs in software systems using nature-inspired algorithms.",
      technologies: ["Python", "Machine Learning", "Django", "Data Analysis"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/ml-bug-prediction-dashboard.png"
    },
    {
      title: "User Registration System",
      description: "A complete user registration and authentication system built with PHP and MySQL with secure login functionality.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/saivamsi511/User-Registration-Using-MySQL",
      liveUrl: "#",
      image: "/user-registration-system.png"
    },
    {
      title: "E-Commerce Frontend Application",
      description: "A responsive e-commerce application frontend built with Bootstrap, featuring modern UI/UX design and mobile-first approach.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/saivamsi511/Ecommerce-app-front-end-using-bootstrap",
      liveUrl: "#",
      image: "/ecommerce-homepage.png"
    },
    {
      title: "Real-Time Chat Application",
      description: "A full-stack real-time chat application with user authentication, message history, and responsive design.",
      technologies: ["React.js", "Node.js", "MySQL", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/modern-chat-app.png"
    },
    {
      title: "Secure OTP Generator & Email System",
      description: "A Java Swing application for generating secure OTPs and delivering them via email with encryption.",
      technologies: ["Java", "Swing", "Email API", "Security"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/java-desktop-app.png"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks with categories, deadlines, and progress tracking.",
      technologies: ["React.js", "Node.js", "MySQL", "REST API"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/task-management-dashboard.png"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          <span className="text-white">My</span> <span className="text-teal-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={project.image || "/placeholder.svg?height=200&width=400&text=Project+Screenshot"} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white border-0"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white border-0"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
