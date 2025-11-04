"use client"
import { motion } from "framer-motion"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, SparklesIcon } from "lucide-react"
import Image from "next/image"
import { Text3D, Button3D, Parallax3D } from "./3d-effects"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
}

export default function Hero() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden perspective-container">
      {/* Subtle background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-slate-400/10 to-slate-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div className="md:w-1/2" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="perspective-container">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <SparklesIcon className="h-4 w-4 text-cyan-500" />
                <span className="text-sm text-slate-600 dark:text-slate-300">AI & ML Specialist</span>
              </motion.div>

              <Text3D className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">
                Hi, I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Sri Hari Kumar S
                </motion.span>
              </Text3D>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              Innovative IT undergraduate specializing in AI, machine learning, and data analytics
            </motion.h2>

            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              Results-driven and detail-oriented IT undergraduate specializing in AI, machine learning, and data
              analytics. Eager to contribute technical skills and learn from experienced professionals.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button3D className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg shadow-lg">
                <a href="#contact">Contact Me</a>
              </Button3D>
              <Button3D className="bg-white/10 backdrop-blur-sm border border-teal-500/30 text-teal-400 px-6 py-3 rounded-lg">
                <a
                  href="https://drive.google.com/file/d/1aS0GTdwZj3CVD1oT_3lfjANExUXQrj8e/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button3D>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 mt-8">
              <motion.a
                href="https://github.com/SRIHARIKUMAR007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <GithubIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sri-hari-kumar-s-244255250"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <LinkedinIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:sharisan2005@gmail.com"
                className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MailIcon className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          <Parallax3D className="md:w-1/2 flex justify-center" depth={40}>
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-cyan-500/30 shadow-xl"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2020.00.26_509dddb1-9LzuD1X29fzoaak2ZegxiEDfc63q7o.jpg"
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
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <Button3D className="bg-transparent text-slate-600 dark:text-slate-300 p-3 rounded-full border border-cyan-500/30">
              <a href="#about">
                <ArrowDownIcon className="h-6 w-6" />
              </a>
            </Button3D>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
