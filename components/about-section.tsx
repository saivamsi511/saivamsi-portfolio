export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          <span className="text-teal-400">About</span> <span className="text-white">Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-400/20 to-orange-400/20 p-1">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pass_photo.jpg-hOnAlpk8plCXtnmihJ2XowfTWTMygs.jpeg" 
                alt="Batta Saivamsi"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-orange-400 mb-2">I'm Batta Saivamsi</h3>
            <p className="text-teal-400 text-lg mb-6">Full Stack Developer</p>
            
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science & Engineering 
                at NBKRIST with a CPI of 8.4. I have hands-on experience in building end-to-end web applications 
                using modern technologies like React.js, Node.js, Python, and Java.
              </p>
              
              <p>
                Currently working as a Full Stack Developer Intern at KodNest, where I contribute to scalable, 
                responsive, and user-friendly web applications. I've solved 300+ problems on LeetCode and have 
                experience with cloud technologies like AWS.
              </p>
              
              <p>
                Beyond coding, I'm actively involved in sports and have achieved first positions in Shotput and Chess 
                at college level, and captained the Kabaddi team to a runners-up position.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">Education</h4>
                <p className="text-gray-400">B.Tech CSE, NBKRIST</p>
                <p className="text-teal-400">CPI: 8.4 (2025)</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Contact</h4>
                <p className="text-gray-400">battasaivamsi123@gmail.com</p>
                <p className="text-gray-400">+91-6302076297</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
