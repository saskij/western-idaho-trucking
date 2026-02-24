import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import About from '@/components/About'
import Services from '@/components/Services'
import Fleet from '@/components/Fleet'
import Safety from '@/components/Safety'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Fleet />
        <Safety />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
