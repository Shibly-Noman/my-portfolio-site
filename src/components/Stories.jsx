import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { chapters } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const N = chapters.length

/** A single chapter card — shared by the pinned (desktop) and stacked (mobile) views. */
function ChapterCard({ ch, active }) {
  return (
    <article
      className={`card relative flex w-full max-w-xl flex-col overflow-hidden p-7 transition-colors md:p-9 ${
        active ? 'border-primary shadow-lg' : 'border-border'
      }`}
    >
      {/* ghost chapter number */}
      <span className="pointer-events-none absolute right-4 top-1 font-display text-[7rem] font-extrabold leading-none text-primary/5">
        {String(ch.n).padStart(2, '0')}
      </span>

      <div className="relative flex items-center justify-between">
        <span className="pill text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Chapter {ch.n}
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {ch.kicker}
        </span>
      </div>

      <h3 className="relative mt-6 text-2xl font-extrabold md:text-3xl">{ch.title}</h3>
      <p className="relative mt-1 font-semibold text-primary">{ch.company}</p>
      <p className="relative text-sm font-medium text-muted-foreground">
        {ch.role} · {ch.period}
      </p>

      <p className="relative mt-4 text-[15px] leading-relaxed text-muted-foreground">{ch.desc}</p>

      <ul className="relative mt-5 space-y-2">
        {ch.points.map((p) => (
          <li key={p} className="flex gap-2.5 text-sm leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-6 grid grid-cols-3 gap-2 pt-1">
        {ch.metrics.map((m) => (
          <div key={m.label} className="rounded-2xl bg-success-muted px-3 py-3 text-center">
            <div className="font-display text-lg font-extrabold text-success">{m.value}</div>
            <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default function Stories() {
  const wrapRef = useRef(null)
  const [active, setActive] = useState(0)

  // Native scroll drives the section: progress goes 0 → 1 across the tall
  // wrapper while the inner panel stays pinned (sticky). We compute it manually
  // from the wrapper's position so there's no wheel-hijacking and no reliance on
  // a layout measurement taken while the (responsive) wrapper was hidden.
  const progress = useMotionValue(0)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const update = () => {
      const travel = el.offsetHeight - window.innerHeight
      if (travel <= 0) return
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / travel))
      progress.set(p)
      setActive(Math.min(N - 1, Math.max(0, Math.round(p * (N - 1)))))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [progress])

  // Shift the card strip vertically — one viewport per chapter — tracking scroll.
  const y = useTransform(progress, (p) => `${-p * (N - 1) * 100}vh`)

  // Background drifts a little as the story progresses.
  const bgPos = useTransform(progress, (p) => `50% ${p * 100}%`)

  // Click a rail dot → scroll the window to that chapter's slice.
  const goTo = (i) => {
    const wrap = wrapRef.current
    if (!wrap) return
    const top = wrap.getBoundingClientRect().top + window.scrollY
    const travel = wrap.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + (i / (N - 1)) * travel, behavior: 'smooth' })
  }

  return (
    <section id="stories">
      {/* ───────── Desktop: pinned scrollytelling ───────── */}
      <div
        ref={wrapRef}
        className="relative hidden md:block"
        style={{ height: `${N * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* drifting background */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundPosition: bgPos,
              backgroundSize: '100% 220%',
              backgroundImage:
                'radial-gradient(60% 50% at 75% 50%, var(--primary-muted), transparent 70%)',
            }}
          />

          <div className="container-content grid h-full grid-cols-12 items-center gap-10">
            {/* Left: persistent frame + live progress */}
            <div className="col-span-5 flex h-screen flex-col justify-center">
              <SectionHeading label="An interactive archive">
                <span className="text-primary">Experience</span> behind the code
              </SectionHeading>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">
                Scroll through the career as chapters — from media applications to AI-powered
                products and high-scale SaaS.
              </p>

              <div className="mt-10 flex items-baseline gap-3">
                <span className="font-display text-7xl font-extrabold leading-none text-primary">
                  {String(active + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-2xl font-bold text-muted-foreground">
                  / {String(N).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {chapters[active].kicker} · {chapters[active].company}
              </p>

              {/* progress rail */}
              <div className="mt-8 flex items-center gap-3">
                <div className="relative h-0.5 flex-1 rounded-full bg-border">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-primary"
                    animate={{ width: `${((active + 1) / N) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-between">
                    {chapters.map((ch, i) => (
                      <button
                        key={ch.n}
                        onClick={() => goTo(i)}
                        aria-label={`Go to chapter ${ch.n}`}
                        className={`h-3 w-3 rounded-full border-2 transition-colors ${
                          i <= active ? 'border-primary bg-primary' : 'border-border bg-background-alt'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: shifting card strip */}
            <div className="relative col-span-7 h-screen overflow-hidden">
              <motion.div style={{ y }}>
                {chapters.map((ch, i) => (
                  <div key={ch.n} className="flex h-screen items-center justify-center">
                    <motion.div
                      className="w-full"
                      animate={{
                        scale: active === i ? 1 : 0.94,
                        opacity: active === i ? 1 : 0.45,
                      }}
                      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    >
                      <ChapterCard ch={ch} active={active === i} />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── Mobile: simple stacked list ───────── */}
      <div className="px-6 py-24 md:hidden">
        <SectionHeading label="An interactive archive">
          <span className="text-primary">Experience</span> behind the code
        </SectionHeading>
        <p className="mt-5 text-lg text-muted-foreground">
          The career as chapters — from media applications to AI-powered products and high-scale SaaS.
        </p>
        <div className="mt-10 space-y-6">
          {chapters.map((ch) => (
            <Reveal key={ch.n}>
              <ChapterCard ch={ch} active />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
