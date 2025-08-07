"use client";

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { TechStack } from '@/components/tech-stack'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-amber-900">
      <Navigation />
      <HeroSection />
      <TechStack />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}
