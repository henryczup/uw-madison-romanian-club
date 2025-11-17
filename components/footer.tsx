export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Romanian Club</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Celebrating Romanian culture and building community at UW Madison.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#about" className="transition-colors hover:text-accent">About Us</a>
              <a href="#events" className="transition-colors hover:text-accent">Events</a>
              <a href="#gallery" className="transition-colors hover:text-accent">Gallery</a>
              <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">University</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="https://www.wisc.edu" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                UW Madison
              </a>
              <a href="#" className="transition-colors hover:text-accent">Student Organizations</a>
              <a href="#" className="transition-colors hover:text-accent">Campus Life</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 UW Madison Romanian Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
