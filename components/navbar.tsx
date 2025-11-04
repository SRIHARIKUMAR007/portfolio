"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    setMounted(true)

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
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ]

  const moreItems = [
    { name: "Education", href: "#education" },
    { name: "Publications", href: "#publications" },
    { name: "Patents", href: "#patents" },
    { name: "Proposals", href: "#proposals" },
    { name: "Awards", href: "#awards" },
    { name: "Competitions", href: "#competitions" },
    { name: "Extracurriculars", href: "#extracurriculars" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      })
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
          ? "bg-slate-950/95 dark:bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-teal-500/10"
          : "bg-slate-950/80 dark:bg-slate-950/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer flex-shrink-0 min-w-fit"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-9 h-9 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-8V4c0-1.1-.9-2-2-2s-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 10H8v-2h4v2z" />
              </svg>
            </motion.div>
            <span className="text-sm font-bold text-white whitespace-nowrap">
              Sri Hari Kumar <span className="text-teal-400">S</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "text-teal-400 bg-teal-500/10"
                      : "text-slate-400 hover:text-teal-400 hover:bg-teal-500/10"
                  }`}
                >
                  {item.name}
                </button>
              )
            })}

            {/* More dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-200 whitespace-nowrap">
                More
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-slate-900 rounded-lg shadow-2xl hidden group-hover:flex flex-col z-50 border border-teal-500/20 overflow-hidden">
                {moreItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace("#", "")
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`px-4 py-2 text-left text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        index !== moreItems.length - 1 ? "border-b border-teal-500/10" : ""
                      } ${
                        isActive
                          ? "text-teal-400 bg-teal-500/10"
                          : "text-slate-400 hover:text-teal-400 hover:bg-teal-500/10"
                      }`}
                    >
                      {item.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 ml-auto">
            <motion.div className="hidden lg:block">
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1aS0GTdwZj3CVD1oT_3lfjANExUXQrj8e/view?usp=drivesdk",
                    "_blank",
                  )
                }
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white border-none hover:from-teal-600 hover:to-teal-700 shadow-lg font-medium text-sm px-4"
              >
                Resume
              </Button>
            </motion.div>

            <motion.div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-slate-400 hover:text-teal-400 hover:bg-teal-500/10"
              >
                {mounted && theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-400 hover:text-teal-400 hover:bg-teal-500/10"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <XIcon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <MenuIcon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-teal-500/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
              {[...navItems, ...moreItems].map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-teal-400 bg-teal-500/10"
                        : "text-slate-400 hover:text-teal-400 hover:bg-teal-500/10"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              <motion.div className="pt-2">
                <Button
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1aS0GTdwZj3CVD1oT_3lfjANExUXQrj8e/view?usp=drivesdk",
                      "_blank",
                    )
                    setMobileMenuOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white border-none hover:from-teal-600 hover:to-teal-700 shadow-lg font-medium"
                >
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
