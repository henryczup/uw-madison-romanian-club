import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock } from 'lucide-react'

const events = [
  {
    title: 'Traditional Romanian Night',
    date: 'March 15, 2024',
    time: '6:00 PM - 9:00 PM',
    location: 'Memorial Union',
    description: 'Experience authentic Romanian cuisine, music, and dance performances.',
  },
  {
    title: 'Language Exchange Meetup',
    date: 'March 22, 2024',
    time: '5:00 PM - 7:00 PM',
    location: 'College Library',
    description: 'Practice Romanian language skills and help others learn in a casual setting.',
  },
  {
    title: 'Romanian Film Screening',
    date: 'April 5, 2024',
    time: '7:00 PM - 10:00 PM',
    location: 'Union South',
    description: 'Watch and discuss contemporary Romanian cinema with subtitles.',
  },
]

export function Events() {
  return (
    <section id="events" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-4xl font-normal text-balance tracking-tight md:text-5xl mb-4">
            Upcoming events
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Join us for exciting activities celebrating Romanian culture and community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.title} className="p-6 space-y-4 border-border/50 transition-all hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-balance">{event.title}</h3>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{event.description}</p>

              <Button variant="outline" className="w-full">
                RSVP
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
