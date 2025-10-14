"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useRef, useEffect } from "react"

export default function CarCard({ title, img, alt }) {
  const ref = useRef(null)
  const raf = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rect = el.getBoundingClientRect()

    const onResize = () => {
      rect = el.getBoundingClientRect()
    }

    const onMove = (e) => {
      const x = (e.clientX ?? (e.touches?.[0]?.clientX || 0)) - rect.left
      const y = (e.clientY ?? (e.touches?.[0]?.clientY || 0)) - rect.top
      const px = x / rect.width - 0.5
      const py = y / rect.height - 0.5
      const rx = py * 8
      const ry = -px * 8
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
      })
    }

    const onLeave = () => {
      cancelAnimationFrame(raf.current)
      el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)"
    }

    const supportsHover = window.matchMedia("(hover: hover)").matches

    if (supportsHover) {
      el.addEventListener("pointermove", onMove)
      el.addEventListener("pointerleave", onLeave)
      window.addEventListener("resize", onResize)
    }

    return () => {
      if (supportsHover) {
        el.removeEventListener("pointermove", onMove)
        el.removeEventListener("pointerleave", onLeave)
        window.removeEventListener("resize", onResize)
      }
    }
  }, [])

  return (
    <Card
      ref={ref}
      className={cn("relative overflow-hidden rounded-xl border bg-card transition-transform will-change-transform")}
      style={{ transform: "perspective(800px) rotateX(0deg) rotateY(0deg)" }}
    >
      <img src={img || "/placeholder.svg"} alt={alt} className="h-56 w-full object-cover" height={224} />
      <div className="absolute inset-x-0 bottom-0 bg-background/70 backdrop-blur px-4 py-3">
        <p className="font-medium">{title}</p>
      </div>
    </Card>
  )
}
