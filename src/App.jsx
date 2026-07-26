import Navbar from './components/Navbar'
import ReadingProgress from './components/ReadingProgress'
import Hero from './components/Hero'
import Work from './components/Work'
import WhatIDo from './components/WhatIDo'
import Stories from './components/Stories'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grain" />
      <ReadingProgress />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <WhatIDo />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
