import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Instagram, Facebook, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-normal text-balance tracking-tight md:text-5xl mb-4">
              Get in touch
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Have questions? Want to join? We'd love to hear from you.
            </p>
          </div>

          <Card className="p-8 md:p-12 border-border/50">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:romanian.club@wisc.edu"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                    >
                      <Mail className="h-5 w-5" />
                      <span>romanian.club@wisc.edu</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>@uwromanianclub</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                    >
                      <Facebook className="h-5 w-5" />
                      <span>UW Madison Romanian Club</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Join our Discord</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Meeting times</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Weekly Meetings</p>
                      <p className="text-sm">Thursdays, 6:00 PM - 7:30 PM</p>
                      <p className="text-sm">Memorial Union, Room 345</p>
                    </div>
                    <div className="pt-3">
                      <p className="font-medium text-foreground">Office Hours</p>
                      <p className="text-sm">By appointment</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Join the Club
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
