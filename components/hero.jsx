"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div
            className="h-full w-full opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Dynamic Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/10 pointer-events-none" />

        {/* Large MANIK Text - Full Width Background */}
        <div className="absolute inset-0 flex items-start justify-center pt-16 md:pt-20 pointer-events-auto z-10">
          <div 
            className="text-[28vw] md:text-[24vw] lg:text-[18vw] font-bold text-muted-foreground/15 select-none transition-all duration-700 hover:text-muted-foreground/8 hover:scale-105 cursor-default group"
            style={{ 
              fontFamily: "'Orbitron', monospace",
              fontWeight: '800',
              letterSpacing: '0.1em',
              lineHeight: '0.7',
              textShadow: '0 0 100px rgba(0,0,0,0.1)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              width: '100vw',
              textAlign: 'center',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            MANIK
            {/* Hover darkening effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/15 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
          </div>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="relative min-h-[85vh] flex items-center justify-center pt-8 md:pt-12">
            
            {/* Central Image - Hero Focus */}
            <div className="relative transition-all duration-1000">
              <div className="relative group">
                {/* Enhanced Glow Effects */}
                <div className="absolute -inset-12 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-2xl opacity-70" />
                
                {/* Main Image Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden border-8 border-background shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out">
                  <Image
                    src="/manik-logo.png" // Your uploaded image
                    alt="Manik - Content Creator"
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-8 h-8 bg-primary rounded-full animate-pulse" />
                <div className="absolute -bottom-12 -left-12 w-10 h-10 bg-accent/60 rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/3 -left-16 w-6 h-6 bg-primary/40 rounded-full animate-bounce delay-500" />
                <div className="absolute bottom-1/4 -right-16 w-4 h-4 bg-accent rounded-full animate-pulse delay-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Areas - Positioned Around the Image */}
        
        {/* Left Side - Subtitle (Vertically Centered with Image) */}
        <div className="absolute top-1/2 left-8 md:left-16 transform -translate-y-1/2 z-30 transition-all duration-1000">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
              <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground/80 font-medium">
                Creator • Designer • Traveler
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Visual Storyteller Tag (Vertically Centered with Image) */}
        <div className="absolute top-1/2 right-8 md:right-16 transform -translate-y-1/2 z-30 transition-all duration-1000">
          <div className="text-right">
            <p className="text-lg md:text-xl font-light text-muted-foreground/70 tracking-wider">
              Visual Storyteller
            </p>
          </div>
        </div>

        

        {/* Bottom Right - CTA Buttons */}
        <div className="absolute bottom-16 right-8 md:bottom-20 md:right-16 z-30 transition-all duration-1000">
          <div className="flex flex-col gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1" 
              asChild
            >
              <a href="#brands">See Collabs</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-border/50 hover:border-primary/50 px-8 py-6 text-base font-semibold hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:-translate-y-1" 
              asChild
            >
              <a href="#cars">Enter the Garage</a>
            </Button>
          </div>
        </div>

        {/* Center Bottom - Stats */}
        <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000">
          <div className="flex items-center gap-6 md:gap-8 bg-background/80 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-full border border-border/50">
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-primary">50+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects</div>
            </div>
            <div className="w-px h-5 md:h-6 bg-border/50" />
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-primary">25+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Brands</div>
            </div>
            <div className="w-px h-5 md:h-6 bg-border/50" />
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-primary">100K+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Views</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}