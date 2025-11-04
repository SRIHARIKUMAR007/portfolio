"use client"
import { motion } from "framer-motion"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Image from "next/image"
import { Text3D, Button3D, Parallax3D } from "./3d-effects"

// Add these enhanced motion variants at the top of the component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      duration: 0.3,
    },
  },
}

export default function Hero() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden perspective-container">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div className="md:w-1/2" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="perspective-container">
              <Text3D className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">
                Hi, I'm{" "}
                <motion.span
                  className="text-emerald-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Sri Hari Kumar
                </motion.span>
              </Text3D>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              IT Professional specializing in AI and Data Analysis
            </motion.h2>

            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              Innovative and AI-enthusiastic IT undergraduate with strong knowledge of artificial intelligence tools,
              machine learning libraries, and data processing techniques.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button3D className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md">
                <a href="#contact">Contact Me</a>
              </Button3D>
              <Button3D className="bg-white dark:bg-slate-800 border border-emerald-600 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-md">
                <a
                  href="https://drive.google.com/file/d/1fmqC1e9gUZgXALtSGR0paPc1lpFa7XY7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button3D>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 mt-8">
              {/* Add hover animations to social links */}
              <motion.a
                href="https://github.com/SRIHARIKUMAR007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors hover-3d"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sri-hari-kumar-s-244255250"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors hover-3d"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedinIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:sharisan2005@gmail.com"
                className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors hover-3d"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <MailIcon className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          <Parallax3D className="md:w-1/2 flex justify-center" depth={30}>
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600 shadow-xl image-3d"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/passport%20pic.jpg-AwUXoyHKqA3EjL3J7k7xwjY3wIa4vi.jpeg"
                alt="Sri Hari Kumar"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </Parallax3D>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button3D className="bg-transparent text-slate-600 dark:text-slate-300 p-2 rounded-full">
            <a href="#about">
              <ArrowDownIcon className="h-6 w-6 animate-bounce" />
            </a>
          </Button3D>
        </motion.div>
      </div>
    </section>
  )
}
