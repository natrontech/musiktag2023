import Image from "next/image";
import Container from "./Container"

const Map = () => {

  function downloadPDF() {
    window.open('/data/situationsplan.pdf')
  }

  return (
    <>
      <section id="map" aria-label="Map" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-6xl lg:pr-24">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-5xl">
              Situationsplan
            </h2>
            <p className="mt-4 font-display sm:text-2xl tracking-tight text-gray-900">
              Auf dem Plan sind die verschiedenen Parkplätze für die Besucher des Musiktags markiert. Es gibt Parkplätze in unmittelbarer Nähe des Festgeländes sowie weitere Parkplätze in der Umgebung.
              Auch per Bahn ist das Festgelände gut erreichbar.
            </p>
          </div>
          <Image
            src="/images/situationsplan.png"
            alt="Situationsplan"
            width={1200}
            height={800}
            loader={({ src }) => src}
          />
          <div className="w-full flex justify-center items-center">
          <button onClick={downloadPDF} className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Download PDF
            </span>
          </button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Map;
