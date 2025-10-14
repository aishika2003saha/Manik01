"use client"

const brands = [
  "Brand One",
  "Brand Two",
  "Brand Three",
  "Brand Four",
  "Brand Five",
  "Brand Six",
  "Brand Seven",
  "Brand Eight",
]

export default function BrandsMarquee() {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-card">
      <div className="mask-gradient pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="marquee flex items-center gap-8 py-6 will-change-transform">
        {[...brands, ...brands].map((b, i) => (
          <div key={i} className="shrink-0 flex items-center justify-center h-12 w-40 rounded-md bg-muted text-center">
            <img
              src={`/.jpg?height=40&width=120&query=${encodeURIComponent(b + "%20logo")}`}
              alt={`${b} logo`}
              className="h-8 w-auto"
              height={32}
            />
          </div>
        ))}
      </div>
      <style>{`
        .marquee {
          animation: marquee-scroll 18s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mask-gradient {
          background: linear-gradient(90deg, var(--color-card) 0%, transparent 10%, transparent 90%, var(--color-card) 100%);
        }
      `}</style>
    </div>
  )
}
