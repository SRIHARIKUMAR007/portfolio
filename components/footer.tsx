"use client"

import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Sri Hari Kumar <span className="text-cyan-500">S</span>
            </h2>
            <p className="text-slate-400 mt-2">AI & ML Specialist | Software Developer</p>
          </div>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/SRIHARIKUMAR007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-500 transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sri-hari-kumar-s-244255250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-500 transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedinIcon className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:sharisan2005@gmail.com"
              className="text-slate-400 hover:text-cyan-500 transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <MailIcon className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sri Hari Kumar S. All rights reserved.
          </p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="bg-slate-800 border-slate-700 hover:bg-slate-700 hover:text-cyan-500"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
