import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FoodImage } from '@/components/site/FoodImage'
import { buttonStyles } from '@/components/ui/Button'
import { MENU_BY_ID, type CategoryKey } from '@/data/menu'
import { formatPrice } from '@/lib/format'
import { cn } from '@/lib/cn'

const CATEGORY_LABEL: Partial<Record<CategoryKey, string>> = {
  sides: 'Side',
  drinks: 'Drink',
  desserts: 'Dessert',
}

/**
 * Homepage "extras" spotlight — the best sides, cold drinks and desserts.
 * Six items (two of each) so the grid stays even at 2 columns on mobile and
 * 3 on desktop. Interleaved so the dessert tiles (which fall back to the brand
 * flame placeholder until real photos land) are spread, not clustered.
 */
const EXTRA_IDS = ['s-mac', 'd-lemonade', 'des-banana', 's-fries', 'd-tea', 'des-carrot']

export function ExtrasShowcase() {
  const items = EXTRA_IDS.map((id) => MENU_BY_ID[id]).filter(Boolean)

  return (
    <section className="relative overflow-hidden border-y border-bone/10 bg-coal py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-flame-radial opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Round it out</Eyebrow>
          <h2 className="mt-3 font-display text-5xl leading-[0.88] text-bone sm:text-7xl">
            ON THE <span className="text-ember neon-ember">SIDE</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans leading-relaxed text-smoke">
            Best sides, cold drinks and a sweet finish — the supporting cast
            that turns it into a full-on meal.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.07}>
              <Link
                to="/menu"
                className="group block h-full overflow-hidden rounded-2xl border border-bone/8 bg-ash shadow-lift transition-shadow duration-300 hover:shadow-glow-ember"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <FoodImage
                    image={item.image}
                    alt={item.name}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ash via-transparent to-transparent" />
                  <span className="absolute left-2.5 top-2.5 rounded-md bg-char/80 px-2 py-0.5 font-heading text-[9px] font-extrabold uppercase tracking-ember text-flare backdrop-blur-sm">
                    {CATEGORY_LABEL[item.category]}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 p-3.5">
                  <h3 className="font-heading text-sm font-extrabold leading-tight text-bone">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-display text-xl leading-none text-flare">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-9 flex justify-center">
            <Link to="/menu" className={cn(buttonStyles('primary', 'md'))}>
              See the Full Menu
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
