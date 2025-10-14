"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight" aria-label="Home">
          CREATIVE.INFLUENCER
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#cars" className="text-muted-foreground hover:text-foreground transition-colors">
            Cars
          </a>
          <a href="#travel" className="text-muted-foreground hover:text-foreground transition-colors">
            Travel
          </a>
          <a href="#brands" className="text-muted-foreground hover:text-foreground transition-colors">
            Brands
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="default" className={cn("bg-primary text-primary-foreground")}>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
