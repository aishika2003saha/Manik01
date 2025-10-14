export default function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="container mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-semibold">CREATIVE.INFLUENCER</p>
          <p className="text-muted-foreground mt-1">Effects-first visuals. Cars, travel, and brand stories.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Business inquiries: hello@example.com</p>
          <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
