import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const cardRef = useRef(null)
  const [showHoli, setShowHoli] = useState(false)

  const handlePointerMove = (event) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    card.style.setProperty('--tilt-x', `${y * -1.4}deg`)
    card.style.setProperty('--tilt-y', `${x * 1.4}deg`)
  }

  const resetTilt = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--tilt-x', '0deg')
    card.style.setProperty('--tilt-y', '0deg')
  }

  const showHoliOnHover = (event) => {
    if (event.pointerType === 'mouse') setShowHoli(true)
  }

  const hideHoliOnLeave = (event) => {
    if (event.pointerType === 'mouse') setShowHoli(false)
  }

  return (
    <section id="home" className="hero-stage relative overflow-hidden pt-24 md:pt-28" aria-labelledby="hero-title">
      <div className="hero-haze hero-haze-one" />
      <div className="hero-haze hero-haze-two" />

      <div className="container-content relative">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          className="hero-reference-card"
        >
          <div className="hero-scan-grid" aria-hidden="true" />

          <p id="hero-title" className="sr-only">Shibly Mohammad Noman, full stack software engineer</p>

          <div className="hero-wordmark" aria-hidden="true">
            <span className="hero-wordmark-outline">SHIBLY</span>
            <span className="hero-wordmark-solid">NOMAN</span>
          </div>

          <button
            type="button"
            className={`hero-portrait-wrap${showHoli ? ' is-holi' : ''}`}
            onPointerEnter={showHoliOnHover}
            onPointerLeave={hideHoliOnLeave}
            onClick={() => setShowHoli((visible) => !visible)}
            aria-pressed={showHoli}
            aria-label={showHoli ? 'Return to monochrome portrait' : 'Reveal Holi colors'}
          >
            <img
              src="/images/shibly-hero-monochrome-cutout.png"
              alt="Shibly Mohammad Noman"
              className="hero-portrait hero-portrait-monochrome"
            />
            <img
              src="/images/shibly-hero-holi.png"
              alt=""
              aria-hidden="true"
              className="hero-portrait hero-portrait-holi"
            />
            <span className="hero-powder-bloom" aria-hidden="true" />
          </button>

        </motion.div>
      </div>
    </section>
  )
}
