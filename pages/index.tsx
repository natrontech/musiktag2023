import Head from 'next/head'
import { pb } from '../lib/pocketbase';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Speakers from '../components/Speakers'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer';

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
        <Speakers />
        <Schedule />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
