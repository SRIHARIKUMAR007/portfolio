"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, LightbulbIcon, ExternalLinkIcon } from "lucide-react"
import { TiltCard } from "./3d-effects"
import { Button } from "@/components/ui/button"

export default function Proposals() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const proposals = [
    {
      title: "DeafBlind Notify Band – Tactile Smartband for Alerts & Assistance",
      status: "Proposal Application",
      organization: "Tamil Nadu State Council for Science and Technology",
      date: "Oct 2025",
      description:
        "Innovative wearable technology designed to provide tactile notifications and assistance for deaf-blind individuals, enhancing independence and safety through smart vibration patterns and haptic feedback.",
      proofLink: "https://drive.google.com/file/d/1fiTpWLDcFUtrlspklv3Ojh-Yhns7g8B4/view?usp=drivesdk",
      featured: true,
    },
    {
      title: "IoT-Based Environmental Monitoring System for Smart Cities",
      status: "Under Review",
      organization: "National Innovation Council",
      date: "Nov 2025",
      description:
        "Comprehensive IoT solution for real-time environmental monitoring across urban areas, enabling data-driven decision-making for sustainable city management and pollution control.",
      proofLink: "https://drive.google.com/file/d/1fiTpWLDcFUtrlspklv3Ojh-Yhns7g8B4/view?usp=drivesdk",
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
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-rose-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 25,
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
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Proposals</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {proposals.map((proposal, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={8}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 border-gradient-to-r from-rose-500 to-pink-600 shadow-lg bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-rose-900/20 dark:to-pink-900/20">
                    <CardContent className="p-6 relative">
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {proposal.status}
                      </motion.div>

                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900 p-4 rounded-full"
                          whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            boxShadow: "0 10px 25px rgba(244, 63, 94, 0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <LightbulbIcon className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">
                            {proposal.title}
                          </motion.h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{proposal.organization}</p>
                        </div>
                      </div>

                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>{proposal.date}</span>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 mb-6">{proposal.description}</p>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(proposal.proofLink, "_blank")}
                          className="bg-gradient-to-r from-rose-500 to-pink-600 text-white border-none hover:from-rose-600 hover:to-pink-700 shadow-lg flex items-center gap-2"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                          View Proposal Proof
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
