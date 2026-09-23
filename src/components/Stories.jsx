import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion'
import { chapters } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

// Present the career from the latest work back to the starting point so the
// story opens with AI/LLM work and resolves into the media foundations.
const orderedChapters = [...chapters].reverse()
// A chapter gets one scroll step for each image it contains. Those extra steps
// only swap the photo in the fixed card — they never create duplicate cards.
const storySteps = orderedChapters.flatMap((chapter) => {
  const photoCount = chapter.photos?.length ?? 1
  return Array.from({ length: photoCount }, (_, photoIndex) => ({ chapter, photoIndex }))
})
const STORY_STEP_COUNT = storySteps.length
const fallbackPhoto = '/images/shibly-hero-monochrome-cutout.png'

/** A single chapter card — shared by the pinned (desktop) and stacked (mobile) views. */
function ChapterCard({ ch, active, photoIndex = 0 }) {
  const photoSlides = ch.photos?.length
    ? ch.photos
    : [{ src: ch.photo, alt: '', position: ch.photoPosition }]
  const currentPhoto = photoSlides[Math.min(photoIndex, photoSlides.length - 1)]
  const isFallbackPhoto = !currentPhoto?.src

  return (
    <article
      className={`card relative w-full max-w-xl overflow-hidden transition-colors ${
        active ? 'border-primary shadow-lg' : 'border-border'
      }`}
    >
      <div className="relative h-56 overflow-hidden bg-muted md:h-64">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentPhoto?.src || fallbackPhoto}
            src={currentPhoto?.src || fallbackPhoto}
            alt={currentPhoto?.alt || ''}
            initial={photoSlides.length > 1 ? { opacity: 0, x: '-105%' } : false}
            animate={{ opacity: 1, x: 0 }}
            exit={photoSlides.length > 1 ? { opacity: 0, x: '105%' } : undefined}
            transition={{ duration: 0.48, ease: 'easeOut' }}
            className={`absolute inset-0 h-full w-full ${
              isFallbackPhoto ? 'object-contain object-bottom' : 'object-cover'
            }`}
            style={currentPhoto?.position ? { objectPosition: currentPhoto.position } : undefined}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
        <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-4 text-white">
          <span className="text-xs font-bold uppercase tracking-[0.16em]">{ch.kicker}</span>
          <span className="font-display text-5xl font-extrabold leading-none text-white/90">
            {String(ch.n).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="p-7 md:p-9">
        <h3 className="text-2xl font-extrabold md:text-3xl">{ch.title}</h3>
        <p className="mt-1 font-semibold text-primary">{ch.company}</p>
        <p className="text-sm font-medium text-muted-foreground">
          {ch.role} · {ch.period}
        </p>

        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{ch.desc}</p>

        {ch.projects?.length > 0 && (
          <section className="mt-7 border-t border-border pt-5" aria-label="Projects">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Projects
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {ch.projects.length} {ch.projects.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {ch.projects.map((project) => (
                <article
                  key={project.name}
                  className="overflow-hidden rounded-xl border border-border bg-background"
                >
                  <div className="flex h-20 items-center justify-center bg-white p-3">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="border-t border-border px-3 py-2.5">
                    <p className="truncate text-sm font-bold">{project.name}</p>
                    <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-primary">
                      {project.label || 'Project'}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

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
      setActive(Math.min(STORY_STEP_COUNT - 1, Math.max(0, Math.floor(p * STORY_STEP_COUNT))))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [progress])

  // Background drifts a little as the story progresses.
  const bgPos = useTransform(progress, (p) => `50% ${p * 100}%`)
  const activeStep = storySteps[active]
  const activeChapter = activeStep.chapter
  const activeChapterIndex = orderedChapters.findIndex((chapter) => chapter.n === activeChapter.n)

  return (
    <section id="stories">
      {/* ───────── Desktop: pinned scrollytelling ───────── */}
      <div
        ref={wrapRef}
        className="relative hidden md:block"
        style={{ height: `${STORY_STEP_COUNT * 100}vh` }}
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
            {/* Left: the current company changes with scroll position. */}
            <div className="col-span-5 flex h-screen flex-col justify-center">
              <motion.div
                key={activeChapter.n}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                  Experience / {String(activeChapterIndex + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-4 max-w-md text-5xl font-extrabold leading-[0.95] md:text-6xl">
                  {activeChapter.company}
                </h2>
                <p className="mt-5 max-w-md text-lg font-semibold text-foreground">
                  {activeChapter.role}
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">
                  {activeChapter.period}
                </p>
                <p className="mt-8 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {activeChapter.kicker}
                </p>
              </motion.div>
            </div>

            {/* Right: one persistent card. Multi-image chapters change only the photo. */}
            <div className="relative col-span-7 h-screen overflow-hidden">
              <div className="flex h-full items-center justify-center">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={activeChapter.n}
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  >
                    <ChapterCard
                      ch={activeChapter}
                      active
                      photoIndex={activeStep.photoIndex}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
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
          The career as chapters — from AI powered products to high scale SaaS and the media foundations underneath it all.
        </p>
        <div className="mt-10 space-y-6">
          {orderedChapters.map((ch) => (
            <Reveal key={ch.n}>
              <ChapterCard ch={ch} active />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
