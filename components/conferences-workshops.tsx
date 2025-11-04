"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, PresentationIcon as PresentationChartLineIcon, BookOpenIcon } from "lucide-react"
import { TiltCard } from "./3d-effects"

export default function ConferencesWorkshops() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const events = [
    {
      title: "FlaskElect: A Python Based Online Polling System",
      type: "Conference Presentation",
      event: "5th International Conference on Recent Trends in Engineering, Technology and Management",
      date: "April 2025",
      location: "Coimbatore, Tamil Nadu",
      organization: "Suguna College of Engineering",
      description:
        "Presented research paper on FlaskElect at international conference. The paper introduced a secure, lightweight, and scalable online polling application developed using Flask framework in Python, featuring user authentication, real-time poll creation, and result visualization.",
      achievement: "Best Paper Award",
    },
    {
      title: "Linear Algebra in Cryptography",
      type: "Conference Presentation",
      event: "PMTIA-2023",
      date: "October 2023",
      location: "SRMIST, Ramapuram, Chennai",
      organization: "SRM Institute of Science and Technology",
      description:
        "Presented paper on the application of Linear Algebra in Cryptography, exploring the role of linear transformations, matrix operations, and vector spaces in designing encryption algorithms including symmetric and asymmetric key systems.",
      achievement: null,
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            <span className="text-emerald-600">Conferences</span> & Workshops
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {events.map((event, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={8}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-emerald-600">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <motion.div
                          className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {event.type === "Conference Presentation" ? (
                            <PresentationChartLineIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <BookOpenIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                          )}
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-800 dark:text-white">{event.title}</h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">{event.type}</p>
                        </div>
                      </div>

                      <div className="ml-[3.25rem]">
                        {event.achievement && (
                          <div className="mb-3">
                            <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded-full text-xs font-medium">
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

                        <p className="text-slate-600 dark:text-slate-300">{event.description}</p>
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
