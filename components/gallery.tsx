import Image from 'next/image'

const images = [
  {
    src: '/romanian-traditional-dance-performance.jpg',
    alt: 'Traditional Romanian dance performance',
  },
  {
    src: '/romanian-food-traditional-dishes.jpg',
    alt: 'Romanian traditional food',
  },
  {
    src: '/student-group-cultural-event.jpg',
    alt: 'Club members at event',
  },
  {
    src: '/romanian-flag-celebration.jpg',
    alt: 'Romanian celebration',
  },
  {
    src: '/students-learning-together.jpg',
    alt: 'Language exchange session',
  },
  {
    src: '/cultural-festival-decorations.jpg',
    alt: 'Cultural festival',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-4xl font-normal text-balance tracking-tight md:text-5xl mb-4">
            Memories we've made
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A glimpse into our vibrant community and the experiences we share together.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/2] overflow-hidden rounded-xl bg-muted"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
