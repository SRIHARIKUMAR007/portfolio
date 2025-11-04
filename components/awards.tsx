"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TrophyIcon, CalendarIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const awards = [
    {
      title: "Best Paper Award",
      event: "5th International Conference on Recent Trends in Engineering, Technology and Management 2025",
      organization: "Suguna College of Engineering",
      date: "May 2025",
      description:
        "Presented a research paper titled FlaskElect: A Python-Based Online Polling System at the 5th International Conference organized by Suguna College of Engineering in collaboration with Samarkand State University, Uzbekistan.",
      link: "https://drive.google.com/file/d/1POrboiA3_MsYUp9wVz1hNgKyeaiwp61g/view?usp=sharing",
    },
    {
      title: "RAJYA PURASKAR",
      event: "Bharat Scouts and Guides",
      organization: "Velankanni Marticulation Higher Secondary School",
      date: "February 2020",
      description:
        "Received the prestigious Rajya Puraskar in Scouts during 10th standard, recognizing outstanding performance in leadership, discipline, community service, and outdoor survival skills.",
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
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            <span className="text-emerald-600">Awards</span> & Recognition
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {awards.map((award, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-emerald-600">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <TrophyIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white">{award.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{award.organization}</p>
                      </div>
                    </div>
                    <div className="ml-[3.25rem]">
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-2">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{award.date}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-2">{award.event}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{award.description}</p>
                      {award.link && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(award.link, "_blank")}
                            className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                          >
                            View Certificate
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
