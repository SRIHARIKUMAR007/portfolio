"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCapIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { TiltCard } from "./3d-effects"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationItems = [
    {
      institution: "SRM IST-Ramapuram",
      degree: "B.Tech in Information Technology",
      period: "Sept 2022 - Present",
      location: "Chennai",
      grade: "8.98/10",
    },
    {
      institution: "Velankanni Matriculation Higher Secondary School",
      degree: "12th · SSC (Computer Science)",
      period: "Jun 2021 - May 2022",
      location: "Chennai, Tamil Nadu",
      grade: "84.66%",
    },
    {
      institution: "Velankanni Matriculation Higher Secondary School",
      degree: "10th · SSC",
      period: "Jun 2019 - Mar 2020",
      location: "Chennai, Tamil Nadu",
      grade: "80%",
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
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800 perspective-container">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3d text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            <span className="text-emerald-600">Education</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {educationItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={8}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-emerald-600 stack-3d">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <motion.div
                          className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <GraduationCapIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-800 dark:text-white">{item.institution}</h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">{item.period}</p>
                        </div>
                      </div>
                      <div className="ml-[3.25rem]" style={{ transform: "translateZ(10px)" }}>
                        <p className="text-slate-700 dark:text-slate-300 mb-2">{item.degree}</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.location}</p>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-2">Grade: {item.grade}</p>
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
