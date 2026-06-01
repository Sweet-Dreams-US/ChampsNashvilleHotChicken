import { asset } from '@/lib/asset'
import { cn } from '@/lib/cn'

interface LogoProps {
  size?: number
  showWordmark?: boolean
  compact?: boolean
  className?: string
}

/**
 * The Champs Chicken logo lockup: the flaming-rooster emblem in an ember-ringed
 * badge beside the "CHAMPS / CHICKEN" wordmark (CHAMPS in brand red, CHICKEN in
 * cream), with a small "Nashville Hot" line. The emblem art is clipped to the
 * disc (scaled to crop its square margin), so the client's final logo file can
 * be dropped in at public/assets/champs-emblem.png with no code change.
 */
export function Logo({ size = 46, showWordmark = true, compact = false, className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className="relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-char shadow-glow-ember ring-2 ring-ember"
        style={{ width: size, height: size }}
      >
        <img
          src={asset('assets/champs-emblem.png')}
          alt="Champs Chicken"
          className="h-full w-full scale-[1.16] object-cover"
        />
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
