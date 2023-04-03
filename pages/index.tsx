import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Musikgesellschaften from '../components/Musikgesellschaften'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer';
import Map from '../components/Map';
import OK from '../components/OK';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amtsmusiktag 2023</title>
        <meta
          name="description"
          content="Der Amtsmusiktag 2023 findet am 9. und 10. Juni 2023 in der Gemeinde Konolfingen statt."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Musikgesellschaften />
        <Schedule />
        <Map />
        <Sponsors />
        <OK />
      </main>
      <Footer />
    </>
  )
}
