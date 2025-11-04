"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon } from "lucide-react"

// Import enhanced animations
import { TextReveal } from "./enhanced-animations"
import { TiltCard } from "./3d-effects"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <MailIcon className="h-5 w-5 text-cyan-600" />,
      label: "Email",
      value: "sharisan2005@gmail.com",
      link: "mailto:sharisan2005@gmail.com",
    },
    {
      icon: <PhoneIcon className="h-5 w-5 text-cyan-600" />,
      label: "Phone",
      value: "+91 9566161606",
      link: "tel:+919566161606",
    },
    {
      icon: <GithubIcon className="h-5 w-5 text-cyan-600" />,
      label: "GitHub",
      value: "SRIHARIKUMAR007",
      link: "https://github.com/SRIHARIKUMAR007",
    },
    {
      icon: <LinkedinIcon className="h-5 w-5 text-cyan-600" />,
      label: "LinkedIn",
      value: "Sri Hari Kumar S",
      link: "https://www.linkedin.com/in/sri-hari-kumar-s-244255250",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-cyan-900 dark:to-blue-900 perspective-container relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
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
          <TextReveal>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Touch</span>
            </motion.h2>
          </TextReveal>

          <div className="max-w-3xl mx-auto">
            <TiltCard className="w-full" intensity={8}>
              <Card className="preserve-3d bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-cyan-500/20 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <motion.h3
                      className="text-2xl font-bold mb-4 text-slate-800 dark:text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3 }}
                    >
                      Let's Connect!
                    </motion.h3>
                    <motion.p
                      className="text-slate-600 dark:text-slate-300 text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.4 }}
                    >
                      I'm always open to discussing new opportunities, collaborations, or just having a chat about
                      technology and AI.
                    </motion.p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center p-6 bg-gradient-to-br from-white/50 to-cyan-50/50 dark:from-slate-700/50 dark:to-cyan-900/50 rounded-xl hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/30 dark:hover:to-blue-900/30 transition-all duration-300 border border-cyan-200/30 dark:border-cyan-700/30"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        whileHover={{
                          scale: 1.05,
                          x: 10,
                          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)",
                        }}
                        style={{ transform: "translateZ(10px)" }}
                      >
                        <motion.div
                          className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 p-4 rounded-full mr-4"
                          whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            background: "linear-gradient(45deg, #06b6d4, #3b82f6)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.label}</p>
                          <motion.a
                            href={item.link}
                            className="text-slate-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-semibold text-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {item.value}
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
