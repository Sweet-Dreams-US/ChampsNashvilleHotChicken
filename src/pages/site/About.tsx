import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/site/PageHeader'
import { asset } from '@/lib/asset'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Flame } from '@/components/brand/Flame'
import { buttonStyles } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const STATS = [
  { value: 'Premium', label: 'Ingredients' },
  { value: 'To Order', label: 'Always Cooked' },
  { value: 'Fort Wayne', label: 'Proudly From' },
  { value: 'Bold', label: 'Flavor' },
]

// The Champs brand pillars.
const VALUES = [
  {
    n: '01',
    title: 'Quality First',
    copy: 'We use only premium ingredients to deliver the best — no corners cut, no exceptions.',
  },
  {
    n: '02',
    title: 'Bold Flavor',
    copy: 'We bring the heat and the flavor that Nashville is known for, dialed to whatever you can handle.',
  },
  {
    n: '03',
    title: 'Community Driven',
    copy: 'We’re here to serve our Fort Wayne community and build real connections, one order at a time.',
  },
  {
    n: '04',
    title: 'Passion in Everything',
    copy: 'We put our heart into every order, because you deserve our best every single time.',
  },
]

export function About() {
  return (
    <div>
      <PageHeader
        eyebrow="Our Mission"
        title={
          <>
            THIS IS <span className="text-ember neon-ember">CHAMPS</span>
          </>
        }
        intro="A Fort Wayne spot with a simple mission — serve high-quality Nashville hot chicken that brings people together and leaves a lasting impression."
        image={asset('assets/photos/header-basket.jpg')}
      />

      {/* origin */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Nashville hot, done right</Eyebrow>
            <h2 className="mt-3 font-display text-4xl leading-[0.95] text-bone sm:text-5xl">
              GREAT HOT CHICKEN SHOULDN&apos;T BE HARD TO FIND
            </h2>
            <div className="mt-5 space-y-4 font-sans leading-relaxed text-smoke">
              <p>
                We wanted the real thing — that Nashville-style crust that
                crackles, that slow-building burn, that chicken so fresh it
                practically steams when you open the box.
              </p>
              <p>
                So we built it. Champs is hand-breaded, cooked to order, and
                dialed to whatever heat you can handle. Sandwiches, tenders, the
                loaded Snack Attack — premium ingredients, bold flavor, zero
                shortcuts. This isn&apos;t just chicken. This is Champs.
              </p>
            </div>
            <Link to="/menu" className={cn(buttonStyles('primary', 'md'), 'mt-7')}>
              See What We Cook
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-2xl border border-bone/8 bg-ash p-7">
              <div className="pointer-events-none absolute inset-0 bg-flame-radial opacity-50" />
              <div className="relative grid grid-cols-2 gap-5">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl leading-none text-flare">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-heading text-[11px] font-extrabold uppercase tracking-ember text-smoke">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative mt-6 flex items-center gap-2 border-t border-bone/8 pt-5">
                <Flame size={26} />
                <p className="font-heading text-sm font-bold uppercase tracking-ember text-bone">
                  Crispy. Juicy. Hot.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* values / pillars */}
      <section className="border-y border-bone/10 bg-coal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-3 font-display text-5xl leading-[0.9] text-bone sm:text-6xl">
              THE CHAMPS <span className="text-ember">WAY</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <Reveal key={value.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-bone/8 bg-ash p-6">
                  <span className="font-display text-5xl leading-none text-ember/30">
                    {value.n}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-extrabold text-bone">
                    {value.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-snug text-smoke">
                    {value.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* mission band */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ember/30 bg-ash px-6 py-12 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-flame-radial opacity-40" />
            <p className="relative font-heading text-sm font-extrabold uppercase tracking-ember text-ember">
              ● Our Mission
            </p>
            <h2 className="relative mt-3 font-display text-4xl leading-[0.95] text-bone sm:text-6xl">
              NASHVILLE HOT, <span className="text-ember neon-ember">DONE RIGHT</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl font-sans text-smoke">
              We’re committed to using premium ingredients, perfecting every
              detail, and delivering bold flavor in every bite. This isn’t just
              chicken — this is Champs.
            </p>
            <p className="relative mt-5 font-script text-3xl text-flare">
              This is Champs.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
