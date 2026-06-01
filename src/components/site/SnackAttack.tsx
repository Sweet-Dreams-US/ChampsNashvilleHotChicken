import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Flame } from '@/components/brand/Flame'
import { buttonStyles } from '@/components/ui/Button'
import { asset } from '@/lib/asset'
import { cn } from '@/lib/cn'

const TRAITS = ['Creamy', 'Crispy', 'Loaded', 'Addictive']

/**
 * Signature-item spotlight — the Champs "Snack Attack" loaded bowl.
 * (This slot was the second-location teaser in the source theme; repurposed
 * to feature the item Champs tells everyone not to sleep on.)
 */
export function SnackAttack() {
  return (
    <section className="relative overflow-hidden border-y border-bone/10 bg-coal py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-flame-radial opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Eyebrow>Don&apos;t sleep on it</Eyebrow>
          <h2 className="mt-3 font-display text-6xl leading-[0.82] text-bone sm:text-8xl">
            THE SNACK
            <span className="block text-ember neon-ember">ATTACK</span>
          </h2>
          <p className="mt-4 max-w-md font-sans leading-relaxed text-smoke">
            Mac n&apos; cheese or fries, loaded with two jumbo tenders, Champs
            sauce and dill chips — piled into one ridiculous bowl. Be sure to
            ask about it.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {TRAITS.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-bone/10 bg-ash px-3 py-1.5 font-heading text-[11px] font-extrabold uppercase tracking-ember text-bone"
              >
                <Flame size={12} />
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <span className="font-display text-4xl text-flare">$9.99</span>
            <Link to="/menu" className={cn(buttonStyles('primary', 'md'))}>
              Add to Bag
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-bone/10 shadow-plate">
            <img
              src={asset('assets/menu/over-fries-mac.jpg')}
              alt="The Champs Snack Attack — a loaded mac and tenders bowl"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-char/70 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-ember px-3 py-1 font-heading text-[11px] font-extrabold uppercase tracking-ember text-bone">
              Signature
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
