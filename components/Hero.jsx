"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const headlineRef = useRef(null)
  const statsRef = useRef([])
  const carRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".letter", {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out"
      })

      gsap.from(statsRef.current, {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        delay: 0.8,
        duration: 0.8,
        ease: "power3.out"
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const progress = scrollY / window.innerHeight

      gsap.to(carRef.current, {
        x: progress * 400,
        rotate: progress * 10,
        ease: "power2.out",
        duration: 0.3
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headline = "WELCOME ITZFIZZ".split("")

  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      
      <h1
        ref={headlineRef}
        className="text-4xl md:text-6xl tracking-[0.6em] font-light mb-10"
      >
        {headline.map((letter, i) => (
          <span key={i} className="letter inline-block">
            {letter}
          </span>
        ))}
      </h1>

      <div className="flex gap-12 text-center">
        {["85% Speed", "120% Growth", "98% Efficiency"].map((item, i) => (
          <div
            key={i}
            ref={(el) => (statsRef.current[i] = el)}
            className="text-sm md:text-lg font-light opacity-80"
          >
            {item}
          </div>
        ))}
      </div>

      <img
        ref={carRef}
        src="/car.png"
        className="absolute bottom-10 left-10 w-48 md:w-72"
      />
    </section>
  )
}