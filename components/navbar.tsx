"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"
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
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200/20 dark:border-slate-700/20"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
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
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            SH
          </div>
          <span className="text-lg font-bold text-slate-800 dark:text-white hidden md:block">Sri Hari Kumar S</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.slice(0, 6).map((item) => {
            const isActive = activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "")
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
                }`}
              >
                {item.name}
              </button>
            )
          })}

          {/* More dropdown */}
          <div className="relative group">
            <button className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-all duration-200">
              More
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-slate-200 dark:border-slate-700">
              {navItems.slice(6).map((item) => {
                const isActive =
                  activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "")
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full px-4 py-2 text-left text-sm font-medium transition-all duration-200 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 ${
                      isActive
                        ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>

          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1aS0GTdwZj3CVD1oT_3lfjANExUQrj8e/view?usp=drivesdk",
                "_blank",
              )
            }
            className="ml-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none hover:from-cyan-600 hover:to-blue-700 shadow-lg"
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:bg-cyan-100 dark:hover:bg-cyan-900/20"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? <XIcon key="close" className="h-5 w-5" /> : <MenuIcon key="menu" className="h-5 w-5" />}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/20 dark:border-slate-700/20 max-h-96 overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.replace("#", "") || (item.href === "#" && activeSection === "")
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium text-left transition-all duration-200 ${
                      isActive
                        ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                        : "text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              <Button
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1aS0GTdwZj3CVD1oT_3lfjANExUQrj8e/view?usp=drivesdk",
                    "_blank",
                  )
                  setMobileMenuOpen(false)
                }}
                className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none hover:from-cyan-600 hover:to-blue-700"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
