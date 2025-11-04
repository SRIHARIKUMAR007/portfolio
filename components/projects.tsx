"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

// Import enhanced animations
import { MagneticButton } from "./enhanced-animations"
import { TiltCard, Button3D } from "./3d-effects"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "FlaskElect: A Python Based Online Polling System",
      description:
        "Developed an online polling system using Flask, a Python web framework, to create a secure and user-friendly voting platform. Implemented features such as user authentication, real-time voting, and result visualization.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XiXdTVfmi4WP3fMTr4YE0WmpPgwBvp.png",
      technologies: ["Python", "MySQL", "HTML", "CSS", "JavaScript", "Flask"],
      github: "https://github.com/SRIHARIKUMAR007/FLASKELECT-A-python-based-online-polling-system",
      live: null,
      period: "Jan 2025 - Apr 2025",
    },
    {
      title: "Invoice Generator",
      description:
        "Developed an invoice generation system integrated with SQL Workbench for database management. The system stores invoice details such as customer information, product details, and transaction data in a SQL database.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20122648-OzeZJPmowLl90VAjfY7XWpIAxuekZy.png",
      technologies: ["Python", "MySQL", "Database Management"],
      github: "https://github.com/SRIHARIKUMAR007/Invoice-generator",
      live: null,
      period: "Jan 2024 - Apr 2024",
    },
    {
      title: "Weather Data Analysis",
      description:
        "Collected and analyzed extensive multi-year weather data from APIs using Big Data techniques in Google Colab. Conducted exploratory data analysis with Pandas, NumPy, and Matplotlib to detect seasonal trends, outliers, and anomalies.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20130555-iTX91NQVQJh1uuDsvkse0aVI6M7ei0.png",
      technologies: ["Google Colab", "Python", "Pandas", "NumPy", "Matplotlib"],
      github: "https://github.com/SRIHARIKUMAR007/Weather-Data-Analysis",
      live: null,
      period: "Jun 2024 - Nov 2024",
    },
    {
      title: "Diabetes Classification using Data Mining Algorithms",
      description:
        "Developed a classification system to predict diabetes using six data mining algorithms. Applied data preprocessing techniques, performance metric comparison, and feature importance extraction.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20123243-tfausGYz3JtqbFC2XeSmqKk8t8B3zA.png",
      technologies: ["Python", "NumPy", "scikit-learn", "Matplotlib", "Google Colab"],
      github: "https://github.com/SRIHARIKUMAR007/Diabetes-Classification",
      live: null,
      period: "Jan 2025 - Apr 2025",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800 perspective-container">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3d text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            My <span className="text-emerald-600">Projects</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={10}>
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 preserve-3d">
                    <div className="relative h-48 w-full overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500"
                        />
                        <motion.div
                          className="absolute inset-0 bg-emerald-600/20 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>
                    <CardContent className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
                      <div className="mb-4">
                        <motion.h3
                          className="font-bold text-xl text-slate-800 dark:text-white mb-2"
                          whileHover={{ color: "#10b981" }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{project.period}</p>
                        <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                      </div>
                      <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, staggerChildren: 0.1 }}
                      >
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-xs px-2 py-1 rounded-full hover-3d"
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                      <div className="flex gap-4">
                        {project.github && (
                          <MagneticButton>
                            <Button3D className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white px-3 py-1 rounded-md flex items-center gap-2 text-sm">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <GithubIcon className="h-4 w-4 mr-1" />
                                GitHub
                              </a>
                            </Button3D>
                          </MagneticButton>
                        )}
                        {project.live && (
                          <MagneticButton>
                            <Button3D className="bg-emerald-600 text-white px-3 py-1 rounded-md flex items-center gap-2 text-sm">
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <ExternalLinkIcon className="h-4 w-4 mr-1" />
                                Live Demo
                              </a>
                            </Button3D>
                          </MagneticButton>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
