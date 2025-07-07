"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import {
  CalendarIcon,
  MapPinIcon,
  PresentationIcon as PresentationChartLineIcon,
  BookOpenIcon,
  ExternalLinkIcon,
} from "lucide-react"
import { TiltCard } from "./3d-effects"
import { Button } from "@/components/ui/button"

export default function ConferencesWorkshops() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const events = [
    {
      title: "OpenFlow-SDN Integrated ANPR Traffic Intelligence System",
      type: "Conference Presentation",
      event: "7th International Conference on Engineering and Advancement in Technology 2025",
      date: "June 2025",
      location: "Hyderabad, India",
      organization: "Malla Reddy College of Engineering",
      description:
        "Presented research paper on an intelligent traffic management system using OpenFlow-SDN and ANPR technology. The system enhances traffic flow, reduces congestion, and improves road safety by dynamically adjusting traffic signal timings based on real-time vehicle density and traffic patterns.",
      achievement: "Best Paper Award",
      certificateLink: "https://drive.google.com/file/d/1_eIMEqTLKcipjQoogXvUvzF8Q9cDI4j7/view?usp=sharing",
    },
    {
      title: "FlaskElect: A Secure Python Based Online Polling System",
      type: "Conference Presentation",
      event: "5th International Conference on Recent Trends in Engineering, Technology and Management 2025",
      date: "April 2025",
      location: "Coimbatore, Tamil Nadu",
      organization: "Suguna College of Engineering",
      description:
        "Presented research paper on FlaskElect at international conference. The paper introduced a secure, lightweight, and scalable online polling application developed using Flask framework in Python, featuring user authentication, real-time poll creation, and result visualization.",
      achievement: "Best Paper Award",
      certificateLink: "https://drive.google.com/file/d/1RRRH1kplsM4wSfvV-OhJliqXpCs7wVDN/view?usp=sharing",
    },
    {
      title: "Linear Algebra in Cryptography",
      type: "Conference Presentation",
      event: "PMTIA-2023 (Pure Mathematics, Technology and Its Applications)",
      date: "October 2023",
      location: "SRMIST, Ramapuram, Chennai",
      organization: "SRM Institute of Science and Technology",
      description:
        "Presented paper on the application of Linear Algebra in Cryptography, exploring the role of linear transformations, matrix operations, and vector spaces in designing encryption algorithms including symmetric and asymmetric key systems.",
      achievement: null,
      certificateLink: "https://drive.google.com/file/d/1wZ3_QRYENURAPGH2Q2dKVFkXI3a6qNjc/view?usp=sharing",
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

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 18,
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
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Conferences
            </span>{" "}
            & Workshops
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {events.map((event, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={8}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 border-emerald-200 dark:border-emerald-700 hover:border-emerald-400 dark:hover:border-emerald-500">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <motion.div
                          className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 p-3 rounded-full mr-4"
                          whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {event.type === "Conference Presentation" ? (
                            <PresentationChartLineIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <BookOpenIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                          )}
                        </motion.div>
                        <div>
                          <motion.h3
                            className="font-bold text-lg text-slate-800 dark:text-white"
                            whileHover={{
                              background: "linear-gradient(45deg, #10b981, #0d9488)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {event.title}
                          </motion.h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">{event.type}</p>
                        </div>
                      </div>

                      <div className="ml-[3.25rem]">
                        {event.achievement && (
                          <div className="mb-3">
                            <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900 dark:to-orange-900 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit">
                              🏆 {event.achievement}
                            </span>
                          </div>
                        )}

                        <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">{event.event}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{event.organization}</p>

                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 mb-4">{event.description}</p>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(event.certificateLink, "_blank")}
                            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-none hover:from-emerald-600 hover:to-teal-700 shadow-lg flex items-center gap-2"
                          >
                            <ExternalLinkIcon className="h-4 w-4" />
                            View Certificate
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
