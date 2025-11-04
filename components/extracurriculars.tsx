"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, Users2Icon, StarIcon } from "lucide-react"
import { TiltCard } from "./3d-effects"

export default function Extracurriculars() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const activities = [
    {
      title: "Sponsor For National Level Tech Symposium",
      period: "Jan 2025 - Apr 2025",
      organization: "SRM Institute",
      role: "Sponsor",
      description:
        "Sponsored and supported the National Level Tech Symposium, facilitating technical events and fostering innovation.",
      icon: "star",
    },
    {
      title: "Class Representative",
      period: "Aug 2023 - Jun 2024",
      organization: "SRM IST-Ramapuram",
      role: "Representative",
      description:
        "Served as class representative, managing class initiatives and facilitating communication between students and faculty.",
      icon: "users",
    },
    {
      title: "Scout Leader",
      period: "Jun 2017 - Mar 2020",
      organization: "Bharat Scouts and Guides",
      role: "Leader",
      description:
        "Led scouting activities, mentoring junior scouts and organizing community service programs and outdoor expeditions.",
      icon: "star",
    },
    {
      title: "Kho-Kho Zonal Level Player",
      period: "May 2017 - Jan 2018",
      organization: "Velankanni High School",
      role: "Player",
      description:
        "Participated in zonal-level Kho-Kho championships, representing school and demonstrating athletic excellence.",
      icon: "users",
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 22,
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
            <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Extracurricular Activities
            </span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {activities.map((activity, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={5}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-teal-600">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <motion.div
                          className="bg-teal-100 dark:bg-teal-900 p-3 rounded-full"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {activity.icon === "star" ? (
                            <StarIcon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                          ) : (
                            <Users2Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                          )}
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-800 dark:text-white">{activity.title}</h3>
                          <p className="text-teal-600 dark:text-teal-400 font-medium text-sm">{activity.role}</p>
                        </div>
                      </div>

                      <div className="ml-[3.25rem]">
                        <div className="flex items-center gap-2 mb-3 text-sm text-slate-500 dark:text-slate-400">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{activity.period}</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{activity.organization}</p>
                        <p className="text-slate-600 dark:text-slate-300">{activity.description}</p>
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
