"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
// Import the enhanced animation components
import { StaggerContainer, StaggerItem, TextReveal, MorphingBackground } from "./enhanced-animations"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <MorphingBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
              About <span className="text-emerald-600">Me</span>
            </h2>
          </TextReveal>

          <StaggerContainer className="max-w-3xl mx-auto">
            <StaggerItem>
              <motion.p
                className="text-slate-600 dark:text-slate-300 mb-6 text-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I am an innovative and AI-enthusiastic IT undergraduate with strong knowledge of artificial intelligence
                tools, machine learning libraries, and data processing techniques. I am passionate about leveraging
                emerging technologies and AI frameworks to deliver efficient, scalable, and user-friendly solutions in
                collaborative, result-oriented environments.
              </motion.p>
            </StaggerItem>

            <StaggerItem>
              <motion.p
                className="text-slate-600 dark:text-slate-300 mb-6 text-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Currently pursuing my B.Tech in Information Technology at SRM Institute of Science and Technology, I
                have gained valuable experience through internships at Apollo Hospitals and Aadhavan Institute of Allied
                Health and Research Council, where I applied my skills in software testing, data analysis, and
                AI-assisted documentation.
              </motion.p>
            </StaggerItem>

            <StaggerItem>
              <motion.p
                className="text-slate-600 dark:text-slate-300 text-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I am experienced in problem-solving, system optimization, and developing intelligent, data-driven
                software applications. My technical skills include Python, DBMS, MySQL, HTML, CSS, and various Microsoft
                Office applications.
              </motion.p>
            </StaggerItem>
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  )
}
