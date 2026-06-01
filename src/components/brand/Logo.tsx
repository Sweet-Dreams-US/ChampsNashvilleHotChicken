import { cn } from '@/lib/cn'
import { Flame } from '@/components/brand/Flame'

interface LogoProps {
  size?: number
  showWordmark?: boolean
  compact?: boolean
  className?: string
}

/**
 * The Champs Chicken logo lockup: a flame-lit ember badge beside the
 * "CHAMPS / CHICKEN" wordmark (CHAMPS in brand red, CHICKEN in cream), with a
 * small "Nashville Hot" line. Pure CSS/SVG — crisp at any size, no image
 * dependency, so swapping in the client's exact logo art later is trivial.
 */
export function Logo({ size = 46, showWordmark = true, compact = false, className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className="relative grid shrink-0 place-items-center rounded-full bg-char shadow-glow-ember ring-2 ring-ember"
        style={{ width: size, height: size }}
      >
        <Flame size={size * 0.5} />
      </span>
      {showWordmark && (
        <span
          className={cn(
            'font-display leading-[0.76] text-bone',
            compact ? 'text-lg' : 'text-2xl',
          )}
        >
          <span className="block tracking-billboard text-ember neon-ember">CHAMPS</span>
          <span className="block tracking-billboard">CHICKEN</span>
          {!compact && (
            <span className="mt-1 block font-heading text-[8px] font-extrabold uppercase tracking-[0.34em] text-molten">
              Nashville Hot
            </span>
          )}
        </span>
      )}
    </span>
  )
}
