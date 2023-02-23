import { Container } from '/components/Container'

const sponsors = [
  { name: 'Transistor', logo: '/images/logos/laravel.svg' },
  { name: 'Tuple', logo: '/images/logos/laravel.svg' },
  { name: 'StaticKit', logo: '/images/logos/laravel.svg' },
  { name: 'Mirage', logo: '/images/logos/laravel.svg' },
  { name: 'Laravel', logo: '/images/logos/laravel.svg' },
  { name: 'Statamic', logo: '/images/logos/laravel.svg' },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-red-900 sm:text-5xl">
          Die Sponsoren des Anlasses
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
