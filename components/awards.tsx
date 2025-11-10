"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TrophyIcon, CalendarIcon, SparklesIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const awards = [
    {
      title: "Best Researcher",
      event: "7th International Conference on Engineering and Advancement in Technology 2025",
      organization: "Malla Reddy College of Engineering",
      date: "June 2025",
      description:
        "Recognized as Best Researcher for innovative and impactful research in AI-SDN integrated traffic intelligence systems.",
      link: "https://drive.google.com/file/d/1O6boQMqa9TFPPizZuUezvHo_itI2tnpI/view?usp=drivesdk",
      featured: true,
    },
    {
      title: "Best Paper Award",
      event: "7th International Conference on Engineering and Advancement in Technology 2025",
      organization: "Malla Reddy College of Engineering",
      date: "June 2025",
      description:
        "The paper was awarded Best Paper for its innovative AI-SDN integrated approach to real-time vehicle monitoring and traffic management.",
      link: "https://drive.google.com/file/d/1Y9FAceVQBzgoIex60bLXZZaAGMP8dDMP/view?usp=sharing",
      featured: true,
    },
    {
      title: "Best Paper Award",
      event: "5th International Conference on Recent Trends in Engineering, Technology and Management 2025",
      organization: "Suguna College of Engineering",
      date: "May 2025",
      description:
        "The paper was awarded Best Paper for its innovative approach in developing a secure, efficient, and scalable electronic polling system using Python and Flask.",
      link: "https://drive.google.com/file/d/1POrboiA3_MsYUp9wVz1hNgKyeaiwp61g/view?usp=sharing",
      featured: true,
    },
    {
      title: "RAJYA PURASKAR",
      event: "Bharat Scouts and Guides",
      organization: "Velankanni Matriculation Higher Secondary School",
      date: "February 2020",
      description:
        "Received the prestigious Rajya Puraskar in Scouts during 10th standard, recognizing outstanding performance in leadership, discipline, community service, and outdoor survival skills.",
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
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
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
            <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Awards</span>{" "}
            & Recognition
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {awards.map((award, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`h-full hover:shadow-2xl transition-all duration-500 border-2 ${
                    award.featured
                      ? "border-gradient-to-r from-yellow-500 to-orange-600 shadow-lg bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/20 dark:to-orange-900/20"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <CardContent className="p-6 relative">
                    {award.featured && (
                      <motion.div
                        className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <SparklesIcon className="h-3 w-3" />
                        Featured
                      </motion.div>
                    )}

                    <div className="flex items-center mb-4">
                      <motion.div
                        className={`p-4 rounded-full mr-4 ${
                          award.featured
                            ? "bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900"
                            : "bg-yellow-100 dark:bg-yellow-900"
                        }`}
                        whileHover={{
                          scale: 1.2,
                          rotate: 15,
                          boxShadow: "0 10px 25px rgba(245, 158, 11, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <TrophyIcon
                          className={`h-6 w-6 ${
                            award.featured
                              ? "text-yellow-600 dark:text-yellow-400"
                              : "text-yellow-600 dark:text-yellow-400"
                          }`}
                        />
                      </motion.div>
                      <div>
                        <motion.h3
                          className="font-bold text-xl text-slate-800 dark:text-white"
                          whileHover={{
                            background: "linear-gradient(45deg, #f59e0b, #ea580c)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {award.title}
                        </motion.h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{award.organization}</p>
                      </div>
                    </div>

                    <div className="ml-[4.5rem]">
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-3">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>{award.date}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-3 font-medium">{award.event}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{award.description}</p>

                      {award.link && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(award.link, "_blank")}
                            className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-none hover:from-yellow-600 hover:to-orange-700 shadow-lg"
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
