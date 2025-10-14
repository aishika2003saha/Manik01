import CarCard from "./car-card"

const cars = [
  {
    title: "GT Coupe",
    img: "/red-sports-car-front.png",
    alt: "Red sports car front view",
  },
  {
    title: "Track Edition",
    img: "/black-supercar-side-profile.jpg",
    alt: "Black supercar side profile",
  },
  {
    title: "Luxury Sedan",
    img: "/luxury-sedan-night-city.jpg",
    alt: "Luxury sedan with city lights",
  },
  {
    title: "Off-road",
    img: "/offroad-4x4-mountains.jpg",
    alt: "4x4 off-road in mountains",
  },
  {
    title: "Vintage Classic",
    img: "/vintage-classic-car.jpg",
    alt: "Vintage classic car detail",
  },
  {
    title: "Roadster",
    img: "/convertible-roadster-coast.jpg",
    alt: "Convertible roadster by the coast",
  },
]

export default function CarGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {cars.map((c, i) => (
        <CarCard key={i} title={c.title} img={c.img} alt={c.alt} />
      ))}
    </div>
  )
}
