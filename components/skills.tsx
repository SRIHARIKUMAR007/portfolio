"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CodeIcon, DatabaseIcon, LightbulbIcon } from "lucide-react"

import { FloatingElement } from "./enhanced-animations"
import { TiltCard, Rotate3D } from "./3d-effects"

const Updated = "Updated skills to include Flask, Stock Market Analysis, and better categorization"
const skills = ["Python", "HTML", "CSS", "JavaScript", "Java", "Flask", "Stock Market Analysis"]
const Flask = "Flask"
const Stock = "Stock"
const Market = "Market"
const Analysis = "Analysis"
const and = "and"
const better = "better"
const categorization = "categorization"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <CodeIcon className="h-6 w-6 text-emerald-600" />,
      skills: ["Python", "HTML", "CSS", "JavaScript", "Java"],
    },
    {
      name: "Frameworks & Tools",
      icon: <DatabaseIcon className="h-6 w-6 text-emerald-600" />,
      skills: ["Flask", "DBMS", "MySQL", "MS Office 365", "NumPy", "scikit-learn"],
    },
    {
      name: "Specializations",
      icon: <LightbulbIcon className="h-6 w-6 text-emerald-600" />,
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Data Analysis",
        "Stock Market Analysis",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 perspective-container">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3d text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            My <span className="text-emerald-600">Skills</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FloatingElement delay={index * 0.2}>
                  <TiltCard className="h-full" intensity={5}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 preserve-3d">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Rotate3D className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4" speed={15}>
                            {category.icon}
                          </Rotate3D>
                          <motion.h3
                            className="font-bold text-lg text-slate-800 dark:text-white"
                            whileHover={{ color: "#10b981" }}
                            transition={{ duration: 0.2 }}
                          >
                            {category.name}
                          </motion.h3>
                        </div>
                        <motion.div
                          className="flex flex-wrap gap-2 ml-[3.25rem]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, staggerChildren: 0.1 }}
                          style={{ transform: "translateZ(10px)" }}
                        >
                          {category.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-sm px-3 py-1 rounded-full cursor-pointer hover-3d"
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "#10b981",
                                color: "#ffffff",
                                y: -3,
                                rotateX: 10,
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </FloatingElement>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
