import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              UW Madison Student Organization
            </div>
            
            <h1 className="font-serif text-5xl font-normal leading-tight text-balance tracking-tight md:text-6xl lg:text-7xl">
              Celebrate Romanian heritage at Madison
            </h1>
            
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed md:text-xl">
              Connect with fellow students, experience authentic Romanian culture, and create lasting friendships in a welcoming community.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Join Our Community
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/traditional-romanian-patterns-cultural-design.jpg"
              alt="Romanian cultural patterns"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
