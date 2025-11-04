"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, FileTextIcon, ExternalLinkIcon, Award, Zap, Shield } from "lucide-react"
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
  ]

  const highlights = [
    { icon: Award, label: "Status", value: "ISSUED", color: "from-indigo-500 to-blue-600" },
    { icon: Zap, label: "Application", value: "IN202541089354", color: "from-blue-500 to-cyan-600" },
    { icon: Shield, label: "Focus Area", value: "Cloud Security & AI", color: "from-cyan-500 to-teal-600" },
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
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden" id="patents">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-400/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
            opacity: [0.2, 0.4, 0.2],
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">Patents</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Patent Card */}
            {patents.map((patent, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={8}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border border-indigo-500/30 shadow-lg bg-gradient-to-br from-indigo-950/40 to-blue-950/40 backdrop-blur-md">
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
                          className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-4 rounded-full"
                          whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <FileTextIcon className="h-6 w-6 text-indigo-400" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 className="font-bold text-lg text-black dark:text-white mb-2">
                            {patent.title}
                          </motion.h3>
                          <div className="space-y-1">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Application: {patent.applicationNumber}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-500">{patent.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center text-slate-600 dark:text-slate-500 text-sm mb-4">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>{patent.date}</span>
                      </div>

                      <p className="text-slate-500 dark:text-slate-400 mb-6">{patent.description}</p>

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

            {/* Highlights Card - Added to fill the right side */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border border-indigo-500/30 shadow-lg bg-gradient-to-br from-indigo-950/40 to-blue-950/40 backdrop-blur-md">
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-black dark:text-white mb-8">Patent Highlights</h3>
                    <div className="space-y-6">
                      {highlights.map((highlight, idx) => {
                        const Icon = highlight.icon
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex items-start gap-4"
                          >
                            <div className={`bg-gradient-to-br ${highlight.color} p-3 rounded-lg flex-shrink-0`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{highlight.label}</p>
                              <p className="text-black dark:text-white font-semibold">{highlight.value}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
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
