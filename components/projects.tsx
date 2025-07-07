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
      title: "OpenFlow-SDN Integrated ANPR Traffic Intelligence System",
      description:
        "Developed an intelligent traffic management system using OpenFlow-SDN for real-time vehicle monitoring and traffic optimization. Integrated Automatic Number Plate Recognition (ANPR) to identify and track vehicles, achieving 95% detection accuracy with optimized response times.",
      image: "/images/anpr-dashboard.png",
      technologies: ["Python", "OpenFlow", "SDN", "ANPR", "AI", "Real-time Processing"],
      github: "https://github.com/SRIHARIKUMAR007/OpenFlow-SDN-Integrated-ANPR-Traffic-Intelligence-System",
      live: null,
      period: "Apr 2025 - Jun 2025",
      featured: true,
    },
    {
      title: "FlaskElect: Secure E-Voting Platform",
      description:
        "Engineered a secure e-voting platform using Flask framework. Features include user authentication, real-time voting updates, secure vote storage, and comprehensive result visualization with admin dashboard.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XiXdTVfmi4WP3fMTr4YE0WmpPgwBvp.png",
      technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/SRIHARIKUMAR007/FLASKELECT-A-python-based-online-polling-system",
      live: null,
      period: "Jan 2025 - Apr 2025",
      featured: true,
    },
    {
      title: "Advanced Diabetes Prediction using Machine Learning",
      description:
        "Engineered an advanced diabetes prediction system using multiple machine learning algorithms. Applied data preprocessing techniques, performance metric comparison, and feature importance extraction. Achieved highest accuracy with Random Forest Classifier.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20123243-tfausGYz3JtqbFC2XeSmqKk8t8B3zA.png",
      technologies: ["Python", "Machine Learning", "scikit-learn", "Data Analysis", "NumPy"],
      github: "https://github.com/SRIHARIKUMAR007/Diabetes-Prediction-using-Multiple-Data-Mining-Algorithms",
      live: null,
      period: "Jan 2025 - Apr 2025",
      featured: false,
    },
    {
      title: "Big Data Analysis of Global Weather Patterns",
      description:
        "Conducted comprehensive big data analysis on global weather patterns using Google Colab. Leveraged Pandas, NumPy, and Matplotlib for data processing and visualization. Identified key trends and climate anomalies.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20130555-iTX91NQVQJh1uuDsvkse0aVI6M7ei0.png",
      technologies: ["Google Colab", "Python", "Pandas", "NumPy", "Matplotlib", "Big Data"],
      github: "https://github.com/SRIHARIKUMAR007/Weather-Data-Analysis",
      live: null,
      period: "Jun 2024 - Nov 2024",
      featured: false,
    },
    {
      title: "Invoice Generator with Database Integration",
      description:
        "Developed a comprehensive invoice generation system integrated with SQL Workbench for robust database management. Features customer management, product catalog, and automated invoice generation.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20122648-OzeZJPmowLl90VAjfY7XWpIAxuekZy.png",
      technologies: ["Python", "MySQL", "SQL Workbench", "Database Design"],
      github: "https://github.com/SRIHARIKUMAR007/Invoice-generator",
      live: null,
      period: "Jan 2024 - Apr 2024",
      featured: false,
    },
    {
      title: "AI-Powered Pong Game",
      description:
        "Developed a classic Pong game in Java with intelligent AI opponent. Incorporated advanced AI logic using conditional statements for ball movement prediction, collision detection, and adaptive gameplay.",
      image: "/images/pong-game.png",
      technologies: ["Java", "AI Logic", "Game Development", "JDK"],
      github: "https://github.com/SRIHARIKUMAR007/Pong-Game",
      live: null,
      period: "Aug 2023 - Jan 2024",
      featured: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const handleGitHubClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-cyan-900 dark:to-blue-900 perspective-container relative overflow-hidden"
    >
      {/* Clean animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <TiltCard className="h-full" intensity={15}>
                  <Card
                    className={`h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 preserve-3d ${
                      project.featured
                        ? "border-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                        : "border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-cyan-600/30 to-transparent opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      {project.featured && (
                        <motion.div
                          className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          Featured
                        </motion.div>
                      )}
                    </div>

                    <CardContent className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
                      <div className="mb-4">
                        <motion.h3
                          className="font-bold text-xl text-slate-800 dark:text-white mb-2"
                          whileHover={{
                            background: "linear-gradient(45deg, #06b6d4, #3b82f6)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                          transition={{ duration: 0.3 }}
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
                        transition={{ delay: 0.3, staggerChildren: 0.1 }}
                      >
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 dark:from-cyan-900 dark:to-blue-900 dark:text-cyan-200 text-xs px-3 py-1 rounded-full hover-3d cursor-pointer"
                            whileHover={{
                              scale: 1.15,
                              y: -3,
                              background: "linear-gradient(45deg, #06b6d4, #3b82f6)",
                              color: "#ffffff",
                            }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>

                      <div className="flex gap-4">
                        {project.github && (
                          <MagneticButton>
                            <Button3D
                              className="bg-white/10 backdrop-blur-sm border border-cyan-500/30 text-slate-800 dark:text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-cyan-500/20 cursor-pointer"
                              onClick={() => handleGitHubClick(project.github)}
                            >
                              <GithubIcon className="h-4 w-4 mr-1" />
                              GitHub
                            </Button3D>
                          </MagneticButton>
                        )}
                        {project.live && (
                          <MagneticButton>
                            <Button3D
                              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm cursor-pointer"
                              onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
                            >
                              <ExternalLinkIcon className="h-4 w-4 mr-1" />
                              Live Demo
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
