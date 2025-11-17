import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-semibold tracking-tight text-foreground">
            Romanian Club
          </div>
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#events" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Events
          </Link>
          <Link href="#gallery" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Gallery
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>

        <Button size="sm" className="hidden md:inline-flex">
          Join Us
        </Button>
      </div>
    </header>
  )
}
