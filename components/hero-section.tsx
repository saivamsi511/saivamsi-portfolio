import { Button } from '@/components/ui/button'
import { Linkedin, Github, Mail } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="flex-1 text-left lg:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi There,<br />
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Batta Saivamsi</span>
            </h1>
            <p className="text-xl sm:text-2xl text-teal-400 mb-8 font-medium">
              I AM INTO <span className="text-white">FULL STACK DEVELOPMENT</span>
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg mb-8">
              Resume →
            </Button>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/batta-saivamsi-970022269" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="https://github.com/saivamsi511" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Github className="w-6 h-6 text-white" />
              </a>
              <a href="mailto:battasaivamsi123@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0 mt-12 lg:mt-0">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-teal-400 to-orange-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vamsiphoto.jpg-SHe7LPwYGzEM0KHI6b2MSOGIbQHPHu.jpeg" 
                  alt="Batta Saivamsi"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
