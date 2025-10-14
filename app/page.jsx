import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import CarGallery from "@/components/car-gallery"
import TravelGrid from "@/components/travel-grid"
import BrandsMarquee from "@/components/brands-marquee"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="cars" className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty mb-6">The Garage</h2>
        <p className="text-muted-foreground mb-8">A peek at the collection — performance, style, and a little flex.</p>
        <CarGallery />
      </section>

      <section id="travel" className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty mb-6">Visited Places</h2>
        <p className="text-muted-foreground mb-8">From city nights to coastlines — snapshots from around the world.</p>
        <TravelGrid />
      </section>

      <section id="brands" className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty mb-6">Brand Collaborations</h2>
        <p className="text-muted-foreground mb-4">Partners and friends along the journey.</p>
        <BrandsMarquee />
      </section>

      <Footer />
    </main>
  )
}
