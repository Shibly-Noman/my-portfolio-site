import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, profile } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="container-content pt-4">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'border border-border bg-background-alt/85 shadow-sm backdrop-blur-md'
              : 'border border-transparent'
          }`}
        >
          <a href="#home" className="font-display text-xl font-extrabold tracking-tight">
            {profile.wordmark.first}
            <span className="text-primary">.</span>
            {profile.wordmark.second}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary-muted hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href={`mailto:${profile.email}`} className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-foreground sm:inline-flex">
              Let’s Talk
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background-alt md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 top-0 h-0.5 w-4 bg-foreground transition-transform ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 w-4 bg-foreground transition-transform ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 grid gap-1 rounded-3xl border border-border bg-background-alt p-3 md:hidden"
            >
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-semibold text-muted-foreground hover:bg-primary-muted hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
