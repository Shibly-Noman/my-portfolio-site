import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { education, profile, work, workTypes } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const typeColor = {
  Blog: 'bg-primary-muted text-primary',
  'Case Study': 'bg-success-muted text-success',
  News: 'bg-foreground/5 text-foreground',
  'Brand / PR': 'bg-primary-muted text-primary',
  'Web App': 'bg-primary-muted text-primary',
  SaaS: 'bg-success-muted text-success',
  'AI / ML': 'bg-foreground/5 text-foreground',
  Media: 'bg-primary-muted text-primary',
}

export default function Work() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? work : work.filter((w) => w.type === filter)

  return (
    <section id="work" className="bg-background-alt py-24 md:py-32">
      <div className="container-content">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading label="About">
            Full-stack engineer, <span className="text-primary">scalable systems.</span>
          </SectionHeading>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">{profile.summary}</p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="pill mb-4 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Selected work
            </span>
            <h3 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Systems that earned <span className="text-primary">their place.</span>
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {workTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    filter === t
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-background text-muted-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.a
                key={item.title}
                href={item.link}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="card group flex h-full flex-col p-7"
              >
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${typeColor[item.type] || 'bg-muted'}`}>
                    {item.type}
                  </span>
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
                <h4 className="mt-5 text-xl font-bold leading-snug">{item.title}</h4>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
                <span className="mt-6 text-sm font-semibold text-muted-foreground">
                  {item.source}
                </span>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {education.length > 0 && (
          <div className="mt-20 border-t border-border pt-12">
            <Reveal>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Education
              </h3>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.08}>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-bold">{e.degree}</p>
                    <p className="text-sm text-muted-foreground">
                      {e.field} · {e.detail}
                    </p>
                    <p className="text-sm font-semibold text-primary">{e.school}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
