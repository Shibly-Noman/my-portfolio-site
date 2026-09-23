import { voiceExamples, voicePrinciples } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Styleguide() {
  return (
    <section id="styleguide" className="py-24 md:py-32">
      <div className="container-content">
        <SectionHeading label="Voice & style">
          How I <span className="text-primary">write</span> and what I won’t.
        </SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            A portfolio for a writer should show the craft, not just describe it. Here’s the voice I
            bring to every brief.
          </p>
        </Reveal>

        {/* Principles */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {voicePrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card h-full p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Do / Don't */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="rounded-4xl border border-border bg-foreground/[0.03] p-7">
              <h3 className="flex items-center gap-2 text-lg font-bold text-muted-foreground">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-muted text-sm">✕</span>
                Don’t
              </h3>
              <ul className="mt-5 space-y-4">
                {voiceExamples.map((e) => (
                  <li key={e.dont} className="text-[15px] italic leading-relaxed text-muted-foreground line-through decoration-muted-foreground/40">
                    “{e.dont}”
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-4xl border border-success/30 bg-success-muted/50 p-7">
              <h3 className="flex items-center gap-2 text-lg font-bold text-success">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-success text-sm text-white">✓</span>
                Do
              </h3>
              <ul className="mt-5 space-y-4">
                {voiceExamples.map((e) => (
                  <li key={e.do} className="text-[15px] font-medium leading-relaxed">
                    “{e.do}”
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
