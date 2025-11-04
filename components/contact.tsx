"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, SendIcon } from "lucide-react"

// Import enhanced animations
import { MagneticButton, TextReveal } from "./enhanced-animations"
import { TiltCard, Button3D } from "./3d-effects"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

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
    // Update the contact section with enhanced animations:
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 perspective-container">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal>
            <h2 className="text-3d text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark: text-white">
              Get In <span className="text-emerald-600">Touch</span>
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TiltCard className="h-full" intensity={5}>
                <Card className="h-full preserve-3d">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Contact Information</h3>
                    <div className="space-y-6">
                      {contactInfo.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                          whileHover={{ x: 5 }}
                          style={{ transform: "translateZ(10px)" }}
                        >
                          <motion.div
                            className="bg-emerald-100 dark:bg-emerald-900 p-2 rounded-full mr-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {item.icon}
                          </motion.div>
                          <div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                            <motion.a
                              href={item.link}
                              className="text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
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
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TiltCard className="h-full" intensity={3}>
                <Card className="h-full preserve-3d">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Send Me a Message</h3>
                    {submitSuccess ? (
                      <motion.div
                        className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 p-4 rounded-md mb-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Thank you for your message! I'll get back to you soon.
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                            >
                              Name
                            </label>
                            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="hover-3d"
                              />
                            </motion.div>
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                            >
                              Email
                            </label>
                            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                required
                                className="hover-3d"
                              />
                            </motion.div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                          >
                            Subject
                          </label>
                          <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Subject"
                              required
                              className="hover-3d"
                            />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                          >
                            Message
                          </label>
                          <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Your message"
                              rows={5}
                              required
                              className="hover-3d"
                            />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <MagneticButton>
                            <Button3D className="bg-emerald-600 text-white px-6 py-2 rounded-md w-full md:w-auto">
                              <button type="submit" disabled={isSubmitting} className="flex items-center">
                                {isSubmitting ? (
                                  <span className="flex items-center">
                                    <motion.svg
                                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    >
                                      <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                      ></circle>
                                      <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                      ></path>
                                    </motion.svg>
                                    Sending...
                                  </span>
                                ) : (
                                  <span className="flex items-center">
                                    <SendIcon className="h-4 w-4 mr-2" />
                                    Send Message
                                  </span>
                                )}
                              </button>
                            </Button3D>
                          </MagneticButton>
                        </motion.div>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
