"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, UsersIcon, HeartIcon } from "lucide-react"
import { TiltCard } from "./3d-effects"

export default function Volunteering() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const volunteeringActivities = [
    {
      title: "TEXUS National Symposium",
      role: "Secretary",
      period: "Feb 2025 - Apr 2025",
      organization: "SRM Institute",
      location: "Chennai",
      description:
        "Served as Secretary for the TEXUS National Symposium, coordinating academic presentations and managing event logistics.",
      type: "Leadership",
    },
    {
      title: "TEXUS 25 - National-Level 24-Hour Hackathon",
      role: "Volunteer",
      period: "Mar 2025",
      organization: "SRM Institute",
      location: "Chennai",
      description:
        "Volunteered in organizing a national-level 24-hour hackathon, assisting participants and managing technical infrastructure.",
      type: "Technical Event",
    },
    {
      title: "Paper Presentation Event",
      role: "Organizer",
      period: "Apr 2024",
      organization: "SRM Institute",
      location: "Chennai",
      description:
        "Organized paper presentation events, coordinating with participants and managing presentation schedules.",
      type: "Academic Event",
    },
    {
      title: "Cyber Hackathon",
      role: "Volunteer",
      period: "Mar 2024",
      organization: "SRM Institute",
      location: "Chennai",
      description:
        "Assisted in organizing cybersecurity-focused hackathon, supporting participants and technical setup.",
      type: "Technical Event",
    },
    {
      title: "Codeathon",
      role: "Organizer",
      period: "Nov 2023",
      organization: "Beta Bots Tech Club",
      location: "Chennai",
      description: "Organized coding competition event, managing participant registration and technical coordination.",
      type: "Programming Event",
    },
    {
      title: "Tech-Trek Java Workshop",
      role: "Co-Organizer",
      period: "Oct 2023",
      organization: "Beta Bots Tech Club",
      location: "Chennai",
      description: "Co-organized Java programming workshop, facilitating hands-on learning sessions for students.",
      type: "Workshop",
    },
    {
      title: "Hands-On Session in GUI",
      role: "Co-Organizer",
      period: "Aug 2023",
      organization: "Beta Bots Tech Club",
      location: "Chennai",
      description: "Co-organized GUI development workshop, teaching practical interface design and implementation.",
      type: "Workshop",
    },
    {
      title: "Bharat Scouts and Guides",
      role: "Volunteer",
      period: "Aug 2019",
      organization: "Society Development Rally",
      location: "Chennai",
      description:
        "Participated in community service activities and social development initiatives as part of scouting program.",
      type: "Community Service",
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Leadership":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Technical Event":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Academic Event":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Programming Event":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      case "Workshop":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Community Service":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            <span className="text-emerald-600">Volunteering</span> & Community Service
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {volunteeringActivities.map((activity, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full" intensity={5}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-emerald-600">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <motion.div
                            className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full mr-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {activity.type === "Community Service" ? (
                              <HeartIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <UsersIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                            )}
                          </motion.div>
                          <div>
                            <h3 className="font-bold text-lg text-slate-800 dark:text-white">{activity.title}</h3>
                            <p className="text-emerald-600 dark:text-emerald-400 font-medium">{activity.role}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(activity.type)}`}>
                          {activity.type}
                        </span>
                      </div>

                      <div className="ml-[3.25rem]">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span>{activity.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            <span>{activity.location}</span>
                          </div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{activity.organization}</p>
                        <p className="text-slate-600 dark:text-slate-300">{activity.description}</p>
                      </div>
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
