"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AwardIcon, CalendarIcon, ExternalLinkIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: "Python For Data Science",
      issuer: "NPTEL",
      date: "April 2025",
      description:
        "Completed NPTEL Certification in Python for Data Science, gaining foundational and practical skills in data analysis, visualization, and machine learning using Python.",
    },
    {
      title: "Computer Organization and Architecture",
      issuer: "Udemy",
      date: "September 2023",
      description:
        "Completed Udemy Certification in Computer Organization and Architecture, covering core concepts of computer systems, memory management, CPU architecture, and instruction sets.",
    },
    {
      title: "Crash Course in Python",
      issuer: "Google",
      date: "August 2023",
      description:
        'Completed "Crash Course on Python" by Google, acquiring essential Python programming skills for problem-solving and application development.',
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google",
      date: "July 2022",
      description:
        'Completed "Introduction to Generative AI" by Google, gaining foundational knowledge of generative AI concepts, tools, and applications.',
      proofLink: "https://drive.google.com/file/d/1Ck-fV85PPSYFJeEAGKrwd9RsPrnNCYK8/view?usp=drivesdk",
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
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            <span className="text-emerald-600">Certifications & Tests</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4">
                        <AwardIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white">{cert.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="ml-[3.25rem]">
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-2">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{cert.description}</p>
                      {cert.proofLink && (
                        <motion.a
                          href={cert.proofLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          View Proof
                          <ExternalLinkIcon className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4">
                      <AwardIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 dark:text-white">Common Internship Test</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Internship Studio</p>
                    </div>
                  </div>
                  <div className="ml-[3.25rem]">
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-2">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>December 2024</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                      Common Internship Test (CIT) conducted by Government of India
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm font-semibold mb-4">
                      Score: <span className="text-emerald-600 dark:text-emerald-400">60/100</span>
                    </p>
                    <motion.a
                      href="https://drive.google.com/file/d/1Ck-fV85PPSYFJeEAGKrwd9RsPrnNCYK8/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      View Certificate
                      <ExternalLinkIcon className="h-4 w-4" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
