import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { education, exploreLinks, work, workTypes } from '../data/site'
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
        <div className="mt-20">
          <Reveal>
            <span className="pill mb-4 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Selected work
            </span>
            <h3 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Systems that earned <span className="text-primary">their place.</span>
            </h3>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {exploreLinks.map((item, index) => (
            <Reveal
              key={item.eyebrow}
              delay={index * 0.08}
              className={index === 0 ? 'sm:col-span-2 lg:col-span-6' : 'lg:col-span-3'}
            >
              <motion.a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="group relative isolate flex min-h-80 overflow-hidden rounded-[2rem] border border-border bg-foreground p-6 text-white shadow-sm sm:p-7 lg:min-h-[25rem]"
              >
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 -z-20 h-full w-full transition duration-700 ease-out group-hover:scale-105 ${
                    item.fit === 'contain' ? 'object-contain object-bottom p-4' : 'object-cover'
                  }`}
                  style={{ objectPosition: item.position }}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground via-foreground/65 to-foreground/10" />
                <div className="absolute inset-0 -z-10 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15" />

                <div className="flex w-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                      {item.eyebrow}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <div>
                    <h4 className="max-w-sm text-3xl font-extrabold leading-[0.96] sm:text-4xl">
                      {item.title}
                    </h4>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/78 sm:text-[15px]">
                      {item.desc}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                      {item.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <div id="projects" className="mt-20 scroll-mt-24 border-t border-border pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Project archive
              </p>
              <p className="mt-2 max-w-xl text-lg text-muted-foreground">
                Filter through the systems, products, and experiments.
              </p>
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
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
