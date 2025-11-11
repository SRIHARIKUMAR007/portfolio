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
import Patents from "@/components/patents"
import Proposals from "@/components/proposals"
import Volunteering from "@/components/volunteering"
import ConferencesWorkshops from "@/components/conferences-workshops"
import Publications from "@/components/publications"
import Competitions from "@/components/competitions"
import Extracurriculars from "@/components/extracurriculars"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Patents />
      <Proposals />
      <Awards />
      <Publications />
      <ConferencesWorkshops />
      <Volunteering />
      <Competitions />
      <Extracurriculars />
      <Contact />
      <Footer />
    </main>
  )
}
