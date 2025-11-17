import { Card } from '@/components/ui/card'
import { Users, Heart, Calendar, Globe } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with Romanian students and those interested in Romanian culture.',
  },
  {
    icon: Heart,
    title: 'Cultural Events',
    description: 'Experience traditional celebrations, food, music, and customs.',
  },
  {
    icon: Calendar,
    title: 'Regular Meetings',
    description: 'Weekly gatherings to plan events, share stories, and build friendships.',
  },
  {
    icon: Globe,
    title: 'Open to All',
    description: 'Everyone is welcome regardless of background or heritage.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-4xl font-normal text-balance tracking-tight md:text-5xl mb-4">
            Who we are
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A vibrant student organization dedicated to celebrating and sharing Romanian culture at UW Madison.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 space-y-4 border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center rounded-lg bg-accent/10 p-3">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
