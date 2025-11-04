import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Certifications from "@/components/certifications"
import Awards from "@/components/awards"
import Volunteering from "@/components/volunteering"
import ConferencesWorkshops from "@/components/conferences-workshops"
import Publications from "@/components/publications"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-cyan-900 dark:to-blue-900 relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Awards />
      <Publications />
      <ConferencesWorkshops />
      <Volunteering />
      <Contact />
      <Footer />
    </main>
  )
}
