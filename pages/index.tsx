import Head from 'next/head'
import { pb } from '../lib/pocketbase';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Musikgesellschaften from '../components/Musikgesellschaften'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer';
import Map from '../components/Map';

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
      </main>
      <Footer />
    </>
  )
}
