"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar({ isLoaded }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [peelActive, setPeelActive] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)
  const videoRef = useRef(null)

  // Sequential portrait videos playlist (user: place files in /public)
  const playlist = [
    "/video1.mp4", // Replace with actual file
    "/video2.mp4", // Replace with actual file
    "/video3.mp4"  // Replace with actual file
  ]

  // Lock scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add('overflow-hidden')
      document.body.classList.add('overflow-hidden')
    } else {
      document.documentElement.classList.remove('overflow-hidden')
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuOpen])

  // Top peel animation logic
  useEffect(() => {
    if (menuOpen) {
      setPeelActive(true)
    } else {
      // Delay peel off for smooth transition
      const timer = setTimeout(() => setPeelActive(false), 700)
      return () => clearTimeout(timer)
    }
  }, [menuOpen])

  // Close on Escape
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') setMenuOpen(false)
  }, [])
  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  const handleMenuClose = () => setMenuOpen(false)

  // Handle video sequencing
  const handleVideoEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % playlist.length)
  }

  // When currentVideo changes, load new source
  useEffect(() => {
    if (videoRef.current) {
      // Force load and play next video
      videoRef.current.src = playlist[currentVideo]
      const playPromise = videoRef.current.play()
      if (playPromise?.catch) {
        playPromise.catch(() => {/* autoplay might be blocked */})
      }
    }
  }, [currentVideo, playlist])

  // Autoplay / pause based on menu state
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (menuOpen) {
      // Start from beginning of playlist on open (optional). Comment out if resume desired.
      // setCurrentVideo(0)
      const playPromise = v.play()
      if (playPromise?.catch) playPromise.catch(() => {})
    } else {
      v.pause()
    }
  }, [menuOpen])

  return (
    <>
      {/* Top Peel Transition Overlay */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-[11000] pointer-events-none",
          peelActive ? "" : "opacity-0"
        )}
        aria-hidden="true"
        style={{
          transition: 'opacity 0.5s cubic-bezier(.22,.61,.36,1)',
          opacity: peelActive ? 1 : 0
        }}
      >
        <div
          className={cn(
            "mx-auto w-full h-[0px] bg-gradient-to-b from-white via-white/90 to-white/0 shadow-2xl",
            menuOpen
              ? "animate-peelDown"
              : peelActive
                ? "animate-peelUp"
                : ""
          )}
          style={{
            maxWidth: '100vw',
            transition: 'height 0.7s cubic-bezier(.22,.61,.36,1), transform 0.7s cubic-bezier(.22,.61,.36,1)',
          }}
        />
      </div>
  {/* ...existing code... */}
      <header
        className={cn(
          "sticky top-0 z-[10001] border-b border-transparent transition-all duration-700",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full",
          menuOpen
            ? "bg-transparent"
            : "bg-background/80 supports-[backdrop-filter]:bg-background/60"
        )}
      >
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <a
            href="#"
            className={cn(
              "font-semibold tracking-tight transition-colors",
              menuOpen ? "text-white" : "text-foreground"
            )}
            aria-label="Home"
          >
            MANIK AGARWAL
          </a>

          {/* Hamburger Button */}
          <button
            className="flex flex-col justify-center items-center w-6 h-6 relative z-50 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Top Line */}
            <span
              className={cn(
                "block w-6 h-0.5 mb-1.5 transition-transform duration-300 ease-in-out",
                menuOpen ? "bg-white rotate-45 translate-y-2" : "bg-black"
              )}
            />
            {/* Middle Line */}
            <span
              className={cn(
                "block w-6 h-0.5 mb-1.5 transition-opacity duration-300 ease-in-out",
                menuOpen ? "bg-white opacity-0" : "bg-black"
              )}
            />
            {/* Bottom Line */}
            <span
              className={cn(
                "block w-6 h-0.5 transition-transform duration-300 ease-in-out",
                menuOpen ? "bg-white -rotate-45 -translate-y-2" : "bg-black"
              )}
            />
          </button>
        </div>
      </header>

  {/* ...existing code... */}
      <div
        className={cn(
          "fixed inset-0 z-[10000] flex transition-opacity duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.12),transparent_70%)]" />
        {/* Content split */}
        <div className="relative flex w-full">
          {/* Left portrait video area */}
          <div className="flex-1 flex items-center justify-center p-6 md:p-10">
            <div className="relative w-[260px] md:w-[320px] lg:w-[360px] aspect-[9/16] rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black/30">
              {/* Video element */}
              <video
                ref={videoRef}
                key={currentVideo} // forces re-render if needed
                className="absolute inset-0 w-full h-full object-cover"
                src={playlist[0]}
                muted
                playsInline
                autoPlay
                onEnded={handleVideoEnded}
                loop={false}
              />
              {/* Overlay gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
              {/* Optional next button (mobile accessibility) */}
              <button
                onClick={handleVideoEnded}
                aria-label="Play next video"
                className="absolute top-2 right-2 text-[10px] px-2 py-1 rounded bg-white/15 hover:bg-white/30 text-white tracking-wide backdrop-blur-sm"
              >Next</button>
            </div>
          </div>
          {/* Right menu column */}
            <div className={cn(
              "w-[340px] sm:w-[380px] md:w-[420px] lg:w-[460px] xl:w-[500px] flex flex-col justify-center px-8 md:px-12 ",
              "transform transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]",
              menuOpen ? "translate-x-0" : "translate-x-10"
            )}>
              <nav className="flex flex-col gap-8 mr-20" aria-label="Primary">
                {[
                  { label: 'Cars', href: '#cars', preview: 1 }, // video2.mp4
                  { label: 'Travel', href: '#travel', preview: 0 }, // video1.mp4
                  { label: 'Brands', href: '#brands', preview: 2 }, // video3.mp4
                  { label: 'Contact', href: '#footer', preview: null },
                ].map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleMenuClose}
                    style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
                    className={cn(
                      "group flex items-center justify-end gap-5 text-3xl md:text-4xl font-medium tracking-tight text-white/70 hover:text-white",
                      "opacity-0 translate-x-8 transition-all duration-700",
                      menuOpen && "opacity-100 translate-x-0"
                    )}
                    onMouseEnter={() => {
                      if (item.preview !== null) setCurrentVideo(item.preview)
                    }}
                    onFocus={() => {
                      if (item.preview !== null) setCurrentVideo(item.preview)
                    }}
                  >
                    <span className="h-px w-10 bg-white/20 group-hover:bg-white/40 transition-colors" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
              
              
            </div>
        </div>
      </div>
    </>
  )
}
