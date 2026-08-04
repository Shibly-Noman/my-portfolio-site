import Navbar from './components/Navbar'
import ReadingProgress from './components/ReadingProgress'
import Hero from './components/Hero'
import Work from './components/Work'
import Stories from './components/Stories'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grain" />
      <ReadingProgress />
      <Navbar />
      <main>
        <Hero />
        <Stories />
        <Work />
      </main>
      <Footer />
    </>
  )
}
