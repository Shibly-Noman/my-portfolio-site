import { useState } from 'react'
import { profile } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import MagneticButton from './ui/MagneticButton'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <section id="contact" className="bg-background-alt py-24 md:py-32">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: invite */}
          <div>
            <SectionHeading label="Contact">
              Let’s build something <span className="text-primary">reliable.</span>
            </SectionHeading>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Have a system to scale, a product to ship, or a tough engineering problem? I’d love to hear about it.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 rounded-3xl border border-border bg-background p-5 transition-colors hover:border-primary"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-muted text-primary">✉</span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</span>
                    <span className="font-semibold">{profile.email}</span>
                  </span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-3xl border border-border bg-background p-5 transition-colors hover:border-primary"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-muted text-primary">GH</span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">GitHub</span>
                    <span className="font-semibold">{profile.githubLabel}</span>
                  </span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-3xl border border-border bg-background p-5 transition-colors hover:border-primary"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-muted text-primary">in</span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">LinkedIn</span>
                    <span className="font-semibold">{profile.linkedinLabel}</span>
                  </span>
                </a>
                <a
                  href={profile.phoneHref}
                  className="flex items-center gap-4 rounded-3xl border border-border bg-background p-5 transition-colors hover:border-primary"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-muted text-primary">☎</span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</span>
                    <span className="font-semibold">{profile.phone}</span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="card flex h-full flex-col gap-4 p-7 md:p-9">
              <div>
                <label className="text-sm font-semibold" htmlFor="name">Name</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-semibold" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-semibold" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell me about the project…"
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
                />
              </div>
              <MagneticButton as="button" type="submit" className="btn-primary w-full" strength={0.2}>
                Send Message
                <span aria-hidden="true">→</span>
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
