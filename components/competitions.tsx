"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, AwardIcon, MapPinIcon } from "lucide-react"
import { TiltCard } from "./3d-effects"

export default function Competitions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const competitions = [
    {
      title: "Kho-Kho",
      achievement: "Semi-Finalist",
      date: "Oct 2018",
      location: "Velankanni Matriculation Higher Secondary School",
      description: "Participated and reached semi-finalist stage in the Inter-School Kho-Kho championship.",
    },
    {
      title: "Hand Ball",
      achievement: "4th Place",
      date: "Nov 2018",
      location: "Velankanni Matriculation Higher Secondary School",
      description: "Achieved 4th place in the Inter-School handball tournament competition.",
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
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
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
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Sports & Competitions
            </span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {competitions.map((competition, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={8}>
                  <Card className="h-full hover:shadow-lg transition-all duration-500 border-2 border-amber-200 dark:border-amber-700">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 p-3 rounded-full"
                          whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            boxShadow: "0 10px 25px rgba(217, 119, 6, 0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <AwardIcon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-slate-800 dark:text-white">{competition.title}</h3>
                          <p className="text-amber-600 dark:text-amber-400 font-medium text-sm">
                            {competition.achievement}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          <span>{competition.date}</span>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                          <MapPinIcon className="h-4 w-4 mr-2" />
                          <span>{competition.location}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-4">{competition.description}</p>
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
