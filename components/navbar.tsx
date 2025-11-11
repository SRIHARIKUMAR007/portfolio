"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = [
        "about",
        "education",
        "experience",
        "projects",
        "skills",
        "publications",
        "awards",
        "patents",
        "proposals",
        "competitions",
        "extracurriculars",
        "contact",
      ]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Publications", href: "#publications" },
    { name: "Patents", href: "#patents" },
    { name: "Proposals", href: "#proposals" },
    { name: "Awards", href: "#awards" },
    { name: "Competitions", href: "#competitions" },
    { name: "Extracurriculars", href: "#extracurriculars" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(sectionId)
      if (element) {
        const navHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: "smooth",
        })
      }
    }
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-700/20"
          : "bg-slate-950/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
            whileHover={{ rotate: 360, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
            transition={{ duration: 0.8 }}
          >
            SH
          </motion.div>
          <span className="text-xl font-bold text-white hidden md:block">
            Sri Hari Kumar{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </span>
        </motion.div>

        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.slice(0, 7).map((item, index) => {
            const isActive = activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "")
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap text-sm font-medium ${
                  isActive ? "text-cyan-400 bg-cyan-500/10" : "text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                }`}
              >
                {item.name}
              </motion.button>
            )
          })}

          <div className="relative group">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="px-4 py-2 rounded-lg transition-all duration-200 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 text-sm font-medium"
            >
              More ▼
            </motion.button>
            <div className="absolute right-0 mt-2 w-48 bg-slate-900 rounded-lg shadow-xl hidden group-hover:block z-50 border border-slate-700/20">
              {navItems.slice(7).map((item, index) => {
                const isActive =
                  activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "")
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full px-4 py-2 text-left transition-all duration-200 text-sm font-medium ${
                      index !== navItems.slice(7).length - 1 ? "border-b border-slate-700/20" : ""
                    } ${
                      isActive
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            href="https://drive.google.com/file/d/1aS0GTdwZj3CVD1oT_3lfjANExUQrj8e/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 shadow-lg transition-all duration-300 text-sm font-medium"
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button - removed theme toggle icon */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/20 max-h-96 overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const isActive =
                  activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "")
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className={`px-4 py-3 rounded-lg transition-all duration-200 w-full text-left text-sm font-medium ${
                      isActive
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                )
              })}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.03 }}
                href="https://drive.google.com/file/d/1aS0GTdwZj3CVD1oT_3lfjANExUQrj8e/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 shadow-lg text-center text-sm font-medium"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
