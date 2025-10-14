import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="h-full w-full opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Creator | Designer | Traveler</p>
        <h1 className="text-pretty text-4xl md:text-6xl font-semibold tracking-tight mt-4">
          Building visuals that move — cars, cities, and brand stories.
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          I turn ideas into moments worth sharing. Effects-driven visuals, clean aesthetics, and collaborations that
          stand out.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Button className="bg-primary text-primary-foreground" asChild>
            <a href="#brands">See Collabs</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#cars">Enter the Garage</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
