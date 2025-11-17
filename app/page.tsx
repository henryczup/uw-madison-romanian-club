import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Events } from '@/components/events'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
