"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef(null)
  const revealRef = useRef(null)
  const carRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {

      gsap.set(".stat", { x: -150, opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true
        }
      })

      tl.to(revealRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none"
      }, 0)

      tl.to(carRef.current, {
        x: "100vw",
        ease: "none"
      }, 0)

      tl.to(".stat", {
        x: 0,
        opacity: 1,
        stagger: 0.15
      }, 0.25)

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="h-screen bg-[#222] relative overflow-hidden flex items-center justify-center"
    >

      <div
        ref={revealRef}
        className="absolute inset-0 bg-[#4ade80] flex items-center justify-center z-0"
        style={{ clipPath: "inset(0% 100% 0% 0%)" }}
      >
        <h1 className="text-black text-4xl sm:text-6xl md:text-9xl tracking-[0.2em] font-bold uppercase text-center px-4">
          Welcome
        </h1>
      </div>

      <img
        ref={carRef}
        src="/car.png"
        className="absolute top-1/2 -translate-y-1/2 -left-[30%] sm:-left-[10%] w-32 sm:w-48 md:w-80 z-10"
        alt="Car"
      />

      <div className="absolute top-6 sm:top-20 left-1/2 -translate-x-1/2 sm:left-20 sm:translate-x-0 flex flex-col sm:flex-row gap-4 sm:gap-6 z-20 w-[90%] sm:w-auto">
        <div className="stat bg-lime-400 text-black p-4 sm:p-6 rounded-xl w-full sm:w-60">
          <h2 className="text-2xl sm:text-4xl font-bold">58%</h2>
          <p className="text-sm sm:text-base">Increase in pick up point use</p>
        </div>

        <div className="stat bg-black text-white p-4 sm:p-6 rounded-xl w-full sm:w-60">
          <h2 className="text-2xl sm:text-4xl font-bold">27%</h2>
          <p className="text-sm sm:text-base">Increase in pick up point use</p>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-20 left-1/2 -translate-x-1/2 sm:left-20 sm:translate-x-0 flex flex-col sm:flex-row gap-4 sm:gap-6 z-20 w-[90%] sm:w-auto">
        <div className="stat bg-sky-400 text-black p-4 sm:p-6 rounded-xl w-full sm:w-60">
          <h2 className="text-2xl sm:text-4xl font-bold">23%</h2>
          <p className="text-sm sm:text-base">Decreased in customer phone calls</p>
        </div>

        <div className="stat bg-orange-500 text-black p-4 sm:p-6 rounded-xl w-full sm:w-60">
          <h2 className="text-2xl sm:text-4xl font-bold">40%</h2>
          <p className="text-sm sm:text-base">Decreased in customer phone calls</p>
        </div>
      </div>

    </section>
  )
}