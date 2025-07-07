"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { TiltCard } from "./3d-effects"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experienceItems = [
    {
      company: "Apollo Hospitals",
      position: "Software Tester and Data Analyst",
      type: "Trainee · Intern",
      period: "Dec 2024 - Jan 2025",
      location: "Chennai",
      description:
        "Completed a one-month internship where I performed manual testing on the Ask Apollo healthcare platform using tester credentials. Additionally, carried out data analysis using AI tools to generate insights from system performance data and support platform optimization.",
    },
    {
      company: "Aadhavan Institute of Allied Health and Research Council",
      position: "Patient Data Analyst",
      type: "Data Analyst Intern · Full-Time",
      period: "Jun 2024 - Jul 2024",
      location: "Vadapalani, Chennai",
      description:
        "Completed a one-month internship where I performed data analysis on patient records and medical reports using AI tools to extract insights and assist in data-driven decision-making. Worked on documenting medicinal products, detailing their composition, usage, and benefits, supported by AI-assisted documentation tools for accuracy and efficiency.",
    },
    {
      company: "BETA BOTS",
      position: "Technical Member",
      type: "Member · Part-Time",
      period: "Nov 2024 - Mar 2025",
      location: "Chennai, Tamil Nadu",
      description:
        "Volunteered as a technical member for the Official Tech Club Beta Bots, actively supporting and contributing to various department events. Assisted with technical setups, troubleshooting, and coordination to ensure smooth execution of club activities and competitions.",
    },
    {
      company: "BETA BOTS",
      position: "Core Member",
      type: "Vice-President · Full-Time",
      period: "Jun 2023 - Aug 2024",
      location: "Chennai, Tamil Nadu",
      description:
        "Served as Vice President and core member of the Official Tech Club Beta Bots, leading the organization and coordination of various technical events and workshops. Collaborated closely with club members to plan, execute, and promote activities that enhanced member engagement and skill development.",
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
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 perspective-container">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3d text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            Work <span className="text-emerald-600">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {experienceItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <TiltCard className="h-full" intensity={5}>
                    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-emerald-600 preserve-3d">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <h3 className="font-bold text-xl text-slate-800 dark:text-white">{item.company}</h3>
                          <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div className="flex items-center">
                            <BriefcaseIcon className="h-4 w-4 text-emerald-600 mr-2" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{item.position}</span>
                            <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">({item.type})</span>
                          </div>
                          <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400" style={{ transform: "translateZ(5px)" }}>
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
