import { Button } from '/components/Button'
import { Container } from '/components/Container'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-red-50">
        {/* <img
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src="/images/background.jpg"
          alt=""
          width={918}
          height={1495}
        /> */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-red-600 sm:text-7xl">
            <span className="">Amtsmusiktag 2023</span>
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-gray-900">
            <p>
            Am <strong>09. & 10. Juni 2023</strong> ist es soweit: Konolfingen wird zum Treffpunkt für alle Freunde der Blasmusik!
            Beim Amtsmusiktag der Blasmusiken erwarten Sie zahlreiche Konzerte, mitreissende Darbietungen und musikalische Höhepunkte, die Ihnen noch lange in Erinnerung bleiben werden.
            Die Veranstaltung bietet eine einzigartige Gelegenheit, die Vielfalt und das Können der Blasmusikvereine hautnah zu erleben.
            Ob Jung oder Alt, Musikliebhaber oder Laie - für jeden Geschmack ist etwas dabei!
            </p>
            <p>
            Lassen Sie sich von der Energie und der Begeisterung der Musikerinnen und Musiker anstecken und geniessen Sie einen unvergesslichen Tag voller Musik und guter Laune.
            Wir freuen uns darauf, Sie in Konolfingen willkommen zu heissen!
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Musikgesellschaften', '18'],
              ['Besucher', '2,000'],
              ['Konzertsaal', 'Kirchgemeinde'],
              ['Ort', 'Konolfingen'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-red-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-gray-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
