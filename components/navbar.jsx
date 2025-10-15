"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-[10001] border-b border-transparent bg-background/80 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight" aria-label="Home">
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
                "block w-6 h-0.5 bg-black mb-1.5 transition-transform duration-300 ease-in-out",
                menuOpen && "rotate-45 translate-y-2"
              )}
            />
            {/* Middle Line */}
            <span
              className={cn(
                "block w-6 h-0.5 bg-black mb-1.5 transition-opacity duration-300 ease-in-out",
                menuOpen && "opacity-0"
              )}
            />
            {/* Bottom Line */}
            <span
              className={cn(
                "block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out",
                menuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 z-[9999]",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={handleMenuClose}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform duration-300 z-[10000]",
          menuOpen ? "translate-x-0" : "translate-x-full",
          "w-4/5 max-w-5xl p-16 flex flex-col justify-start"
        )}
      >
        <h2 className="text-5xl font-bold mb-12">Menu</h2>
        <nav className="flex flex-col gap-8 text-3xl">
          <a href="#cars" className={cn("hover:text-blue-500 transition-colors")} onClick={handleMenuClose}>Cars</a>
          <a href="#travel" className={cn("hover:text-blue-500 transition-colors")} onClick={handleMenuClose}>Travel</a>
          <a href="#brands" className={cn("hover:text-blue-500 transition-colors")} onClick={handleMenuClose}>Brands</a>
        </nav>

      </div>
    </>
  )
}
