"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, FileTextIcon, ExternalLinkIcon } from "lucide-react"
import { TiltCard } from "./3d-effects"
import { Button } from "@/components/ui/button"

export default function Patents() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const patents = [
    {
      title: "Trustworthy AI-Based Cloud Security Framework for Human–Machine Collaboration in Aerospace Mechatron",
      status: "ISSUED",
      applicationNumber: "IN202541089354",
      date: "Oct 2025",
      location: "Gunidy, Chennai",
      description:
        "Developed a comprehensive framework integrating AI-based security protocols for cloud systems supporting human-machine collaboration in aerospace applications with enhanced trust mechanisms.",
      proofLink: "https://drive.google.com/file/d/1NywJlKZnOiOVp3LSJsPrvFoY4skTTRDw/view?usp=drivesdk",
      featured: true,
    },
    {
      title: "Advanced Machine Learning Pipeline for Real-Time Data Analytics",
      status: "PENDING",
      applicationNumber: "IN202541089355",
      date: "Nov 2025",
      location: "Chennai",
      description:
        "Innovative machine learning pipeline architecture designed for processing and analyzing large-scale datasets in real-time with optimized performance metrics and scalability.",
      proofLink: "https://drive.google.com/file/d/1NywJlKZnOiOVp3LSJsPrvFoY4skTTRDw/view?usp=drivesdk",
      featured: true,
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
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-500/10 rounded-full blur-3xl"
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
            <span className="bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">Patents</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {patents.map((patent, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={8}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 border-gradient-to-r from-indigo-500 to-blue-600 shadow-lg bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-900/20 dark:to-blue-900/20">
                    <CardContent className="p-6 relative">
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {patent.status}
                      </motion.div>

                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900 p-4 rounded-full"
                          whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <FileTextIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">
                            {patent.title}
                          </motion.h3>
                          <div className="space-y-1">
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                              Application: {patent.applicationNumber}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{patent.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>{patent.date}</span>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 mb-6">{patent.description}</p>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(patent.proofLink, "_blank")}
                          className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-none hover:from-indigo-600 hover:to-blue-700 shadow-lg flex items-center gap-2"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                          View Patent Proof
                        </Button>
                      </motion.div>
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
