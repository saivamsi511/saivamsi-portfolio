import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          <span className="text-white">Get In</span> <span className="text-teal-400">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you want to discuss a potential collaboration or just say hello, 
              feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-teal-500/20">
                  <Mail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">battasaivamsi123@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-orange-500/20">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-400">+91-6302076297</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-teal-500/20">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">Tirupati, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-orange-500/20">
                  <Linkedin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <a href="https://linkedin.com/in/batta-saivamsi-970022269" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">
                    linkedin.com/in/batta-saivamsi-970022269
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">First Name</label>
                  <Input 
                    placeholder="Your first name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Last Name</label>
                  <Input 
                    placeholder="Your last name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  placeholder="What's this about?" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Your message..." 
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
