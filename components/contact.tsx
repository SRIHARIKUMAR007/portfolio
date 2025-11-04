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
      icon: <MailIcon className="h-5 w-5 text-emerald-600" />,
      label: "Email",
      value: "sharisan2005@gmail.com",
      link: "mailto:sharisan2005@gmail.com",
    },
    {
      icon: <PhoneIcon className="h-5 w-5 text-emerald-600" />,
      label: "Phone",
      value: "+91 9566161606",
      link: "tel:+919566161606",
    },
    {
      icon: <GithubIcon className="h-5 w-5 text-emerald-600" />,
      label: "GitHub",
      value: "SRIHARIKUMAR007",
      link: "https://github.com/SRIHARIKUMAR007",
    },
    {
      icon: <LinkedinIcon className="h-5 w-5 text-emerald-600" />,
      label: "LinkedIn",
      value: "Sri Hari Kumar S",
      link: "https://www.linkedin.com/in/sri-hari-kumar-s-244255250",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 perspective-container">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal>
            <h2 className="text-3d text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
              Get In <span className="text-emerald-600">Touch</span>
            </h2>
          </TextReveal>

          <div className="max-w-2xl mx-auto">
            <TiltCard className="w-full" intensity={5}>
              <Card className="preserve-3d">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Let's Connect!</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      I'm always open to discussing new opportunities, collaborations, or just having a chat about
                      technology and AI.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        style={{ transform: "translateZ(10px)" }}
                      >
                        <motion.div
                          className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                          <motion.a
                            href={item.link}
                            className="text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
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
