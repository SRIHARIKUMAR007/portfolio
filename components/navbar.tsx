"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ]

  const moreItems = [
    { label: "Publications", id: "publications" },
    { label: "Patents", id: "patents" },
    { label: "Proposals", id: "proposals" },
    { label: "Awards", id: "awards" },
    { label: "Competitions", id: "competitions" },
    { label: "Extracurriculars", id: "extracurriculars" },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all ${scrolled ? "bg-slate-950/95 backdrop-blur" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="text-xl font-bold text-cyan-400 hover:text-cyan-300">
          Sri Hari Kumar S
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3 py-2 text-slate-300 hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}

          {/* More Dropdown */}
          <div className="relative group">
            <button className="px-3 py-2 text-slate-300 hover:text-cyan-400 transition">More</button>
            <div className="absolute left-0 mt-0 w-48 bg-slate-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {moreItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/1aS0GTdwZj3CVD1oT_3lfjANExUXQrj8e/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}
          {moreItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1aS0GTdwZj3CVD1oT_3lfjANExUXQrj8e/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
