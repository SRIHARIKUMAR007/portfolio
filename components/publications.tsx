"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, BookOpenIcon, ExternalLinkIcon } from "lucide-react"
import { TiltCard } from "./3d-effects"
import { Button } from "@/components/ui/button"

export default function Publications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const publications = [
    {
      title: "OpenFlow-SDN Integrated ANPR Traffic Intelligence System with AI-Driven Real-Time Vehicle Monitoring",
      conference: "Lecture Notes in Network and Systems, Springer Book Series",
      date: "September 2025",
      location: "Springer - Scopus Indexed",
      isbn: "TBD",
      proceedingNumber: "SPRINGER-2025",
      description:
        "Published paper on intelligent traffic management system using OpenFlow-SDN for real-time vehicle monitoring achieving 95% detection accuracy in Springer's prestigious book series.",
      proceedingsLink: "https://drive.google.com/file/d/1HCPDL2K_0VvnDnQ0vinq9oDG_tbTGlQ6/view?usp=sharing",
      featured: true,
    },
    {
      title: "Aligning Intent and Impact: An Integrated Model for Educational Reform Sustainability",
      conference: "Journal of Techniques - Sciences – Methods",
      date: "August 2025",
      location: "UGC-CARE (Group II) - Elsevier Scopus",
      isbn: "TBD",
      proceedingNumber: "JOURNAL-2025",
      description:
        "Published research on educational reform sustainability models, integrating intent and impact assessment frameworks for long-term institutional effectiveness.",
      proceedingsLink: "#",
      featured: false,
    },
    {
      title: "FlaskElect: A Python Based Online Polling System",
      conference: "5th International Conference on Recent Trends in Engineering, Technology and Management",
      date: "April 2025",
      location: "Coimbatore, Tamil Nadu",
      isbn: "978-81-985365-8-7",
      proceedingNumber: "ICRTETM-2025-P-089",
      description:
        "Developed a secure and efficient online polling system using Flask framework with user authentication, dynamic poll creation, real-time vote tracking, and comprehensive result visualization.",
      proceedingsLink: "https://drive.google.com/file/d/1H5wY_c60aQNZgNsqUHJ9dewm1HU_cOgx/view?usp=sharing",
      featured: true,
    },
    {
      title: "Linear Algebra in Cryptography",
      conference: "PMTIA-2023 (Pure Mathematics, Technology and Its Applications)",
      date: "October 2023",
      location: "SRMIST, Ramapuram, Chennai",
      isbn: "978-81-19765-43-2",
      proceedingNumber: "PMTIA-2023-P-056",
      description:
        "Explored the fundamental role of linear algebra in cryptographic systems, including matrix operations, vector spaces, and linear transformations in designing secure encryption algorithms.",
      proceedingsLink: "https://drive.google.com/file/d/132Zkc02a7nI-xsjnNJRQBOUAPKx4RzTT/view?usp=sharing",
      featured: false,
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

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 240, 120, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
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
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Publications
            </span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {publications.map((publication, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={10}>
                  <Card
                    className={`h-full hover:shadow-2xl transition-all duration-500 border-2 ${
                      publication.featured
                        ? "border-gradient-to-r from-purple-500 to-pink-600 shadow-lg bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20"
                        : "border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <CardContent className="p-6 relative">
                      {publication.featured && (
                        <motion.div
                          className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          Featured
                        </motion.div>
                      )}

                      <div className="flex items-center mb-4">
                        <motion.div
                          className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-4 rounded-full mr-4"
                          whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <BookOpenIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </motion.div>
                        <div>
                          <motion.h3
                            className="font-bold text-lg text-slate-800 dark:text-white mb-2"
                            whileHover={{
                              background: "linear-gradient(45deg, #a855f7, #ec4899)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {publication.title}
                          </motion.h3>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 rounded-full">
                              {publication.proceedingNumber}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="ml-[4.5rem]">
                        <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                          {publication.conference}
                        </h4>

                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span>{publication.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            <span>{publication.location}</span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <span className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm font-medium">
                            ISBN: {publication.isbn}
                          </span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 mb-4">{publication.description}</p>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(publication.proceedingsLink, "_blank")}
                            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-none hover:from-purple-600 hover:to-pink-700 shadow-lg flex items-center gap-2"
                          >
                            <ExternalLinkIcon className="h-4 w-4" />
                            View Proceedings
                          </Button>
                        </motion.div>
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
