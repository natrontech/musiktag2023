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
          content="At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected."
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
