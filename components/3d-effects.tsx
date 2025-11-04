"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

// 3D Tilt Card Effect
export function TiltCard({
  children,
  className = "",
  intensity = 15,
}: {
  children: React.ReactNode
  className?: string
  intensity?: number
}) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position relative to card center
    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -intensity
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * intensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`transform-gpu ${className}`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease",
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}

// 3D Flip Card
export function FlipCard({
  frontContent,
  backContent,
  className = "",
}: {
  frontContent: React.ReactNode
  backContent: React.ReactNode
  className?: string
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`flip-card cursor-pointer ${className}`}
      onClick={handleFlip}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="flip-card-front absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          {frontContent}
        </div>
        <div
          className="flip-card-back absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)",
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  )
}

// 3D Parallax Effect
export function Parallax3D({
  children,
  depth = 20,
  className = "",
}: {
  children: React.ReactNode
  depth?: number
  className?: string
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate position relative to the center of the screen
      const x = (clientX - innerWidth / 2) / innerWidth
      const y = (clientY - innerHeight / 2) / innerHeight

      setPosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`} style={{ perspective: "1000px" }}>
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          transform: `translateX(${position.x * depth}px) translateY(${position.y * depth}px)`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// 3D Text Effect
export function Text3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-3d ${className}`}>
      <span className="text-3d-shadow">{children}</span>
    </div>
  )
}

// 3D Button Effect
export function Button3D({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <motion.button
      className={`btn-3d ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.95, translateY: 4, rotateX: 10 }}
      whileHover={{ translateY: -4, rotateX: -10 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  )
}

// 3D Rotating Element
export function Rotate3D({
  children,
  className = "",
  speed = 10,
}: {
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  return (
    <motion.div
      className={`rotate-3d ${className}`}
      animate={{ rotateY: 360 }}
      transition={{
        duration: speed,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  )
}
