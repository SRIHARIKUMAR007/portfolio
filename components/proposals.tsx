"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, LightbulbIcon, ExternalLinkIcon, Users, Lightbulb, Target } from "lucide-react"
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
  ]

  const highlights = [
    { icon: Users, label: "Target Users", value: "Deaf-Blind Community", color: "from-rose-500 to-pink-600" },
    { icon: Lightbulb, label: "Technology", value: "Haptic Feedback", color: "from-pink-500 to-rose-600" },
    { icon: Target, label: "Organization", value: "TN State Council", color: "from-rose-600 to-orange-600" },
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
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden" id="proposals">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-rose-400/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Proposals</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Proposal Card */}
            {proposals.map((proposal, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={8}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border border-rose-500/30 shadow-lg bg-gradient-to-br from-rose-950/40 to-pink-950/40 backdrop-blur-md">
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
                          className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 p-4 rounded-full"
                          whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            boxShadow: "0 10px 25px rgba(244, 63, 94, 0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <LightbulbIcon className="h-6 w-6 text-rose-400" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 className="font-bold text-lg text-black dark:text-white mb-2">
                            {proposal.title}
                          </motion.h3>
                          <p className="text-sm text-slate-400 dark:text-slate-300">{proposal.organization}</p>
                        </div>
                      </div>

                      <div className="flex items-center text-slate-400 dark:text-slate-300 text-sm mb-4">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>{proposal.date}</span>
                      </div>

                      <p className="text-slate-300 dark:text-slate-200 mb-6">{proposal.description}</p>

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

            {/* Highlights Card - Added to fill the right side */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border border-rose-500/30 shadow-lg bg-gradient-to-br from-rose-950/40 to-pink-950/40 backdrop-blur-md">
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-black dark:text-white mb-8">Project Highlights</h3>
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
                              <p className="text-sm text-slate-400 dark:text-slate-300 mb-1">{highlight.label}</p>
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
