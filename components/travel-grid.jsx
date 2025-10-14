import { Card } from "@/components/ui/card"

const places = [
  {
    country: "United States",
    tag: "US",
    img: "/nyc-skyline.png",
    alt: "New York City skyline at dusk",
  },
  {
    country: "United Kingdom",
    tag: "UK",
    img: "/london-tower-bridge.jpg",
    alt: "London Tower Bridge",
  },
  {
    country: "Japan",
    tag: "JP",
    img: "/tokyo-shibuya-crossing-night.jpg",
    alt: "Tokyo Shibuya Crossing at night",
  },
  {
    country: "Italy",
    tag: "IT",
    img: "/venice-gondola.png",
    alt: "Venice canal with gondola",
  },
  {
    country: "United Arab Emirates",
    tag: "UAE",
    img: "/dubai-downtown-skyline.jpg",
    alt: "Dubai downtown skyline",
  },
  {
    country: "France",
    tag: "FR",
    img: "/paris-eiffel-tower-sunset.png",
    alt: "Paris Eiffel Tower at sunset",
  },
]

export default function TravelGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {places.map((p, i) => (
        <Card key={i} className="overflow-hidden rounded-xl">
          <div className="relative">
            <img src={p.img || "/placeholder.svg"} alt={p.alt} className="h-60 w-full object-cover" height={240} />
            <div className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 text-xs">
              <span className="font-medium">{p.tag}</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">{p.country}</h3>
            <p className="text-sm text-muted-foreground">Memories and moments captured.</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
