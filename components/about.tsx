"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { StaggerContainer, StaggerItem, TextReveal } from "./enhanced-animations"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
              About <span className="text-cyan-600">Me</span>
            </h2>
          </TextReveal>

          <StaggerContainer className="max-w-3xl mx-auto">
            <StaggerItem>
              <motion.p
                className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                Final-year IT undergraduate focused on AI with growing expertise in prompt engineering. I translate
                complex requirements into precise solutions through research, clear communication, and collaborative
                development—combining technical depth with strategic thinking to solve real-world problems.
              </motion.p>
            </StaggerItem>

            <StaggerItem>
              <motion.p
                className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                Specialized in AI, machine learning, data analytics, and software development. Hands-on experience with
                healthcare platforms, real-time systems, and secure applications. CGPA: 8.98/10 at SRM Institute.
              </motion.p>
            </StaggerItem>
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  )
}
