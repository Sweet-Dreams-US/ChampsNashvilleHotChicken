/**
 * The Champs heat ladder — the brand's signature interactive motif.
 *
 * Champs advertises four named heat levels (Mild, Original, Nashville Hot,
 * Reaper's Rush). We also offer a "Plain" base for the no-heat crowd, giving
 * five rungs total. The internal keys (none|mild|hot|blaze|reaper) are kept
 * stable because the cart line IDs and admin seed data reference them — only
 * the display names, blurbs and colors are Champs-specific.
 */

export type HeatKey = 'none' | 'mild' | 'hot' | 'blaze' | 'reaper'

export interface HeatLevel {
  key: HeatKey
  name: string
  /** Lit flames on the 0–5 heat meter. */
  flames: number
  /** Hex pulled from tailwind theme `heat.*`. */
  color: string
  blurb: string
  scoville: string
}

export const HEAT_LEVELS: HeatLevel[] = [
  {
    key: 'none',
    name: 'Plain',
    flames: 0,
    color: '#74B49A',
    blurb: 'All crunch, zero burn. That crust still wins.',
    scoville: 'No Heat',
  },
  {
    key: 'mild',
    name: 'Mild',
    flames: 1,
    color: '#F4B731',
    blurb: 'A little heat, a lot of flavor. The easy entry.',
    scoville: '~2K SHU',
  },
  {
    key: 'hot',
    name: 'Original',
    flames: 2,
    color: '#FF7A1A',
    blurb: 'Classic heat. The perfect start, and our house standard.',
    scoville: '~25K SHU',
  },
  {
    key: 'blaze',
    name: 'Nashville Hot',
    flames: 4,
    color: '#E5202A',
    blurb: 'The real deal. Bring the heat — lips buzzing, eyes wide.',
    scoville: '~150K SHU',
  },
  {
    key: 'reaper',
    name: 'Reaper’s Rush',
    flames: 5,
    color: '#8E1118',
    blurb: 'For the heat lovers. No mercy, no apologies. You were warned.',
    scoville: '1.5M+ SHU',
  },
]

export const HEAT_BY_KEY: Record<HeatKey, HeatLevel> = HEAT_LEVELS.reduce(
  (acc, level) => {
    acc[level.key] = level
    return acc
  },
  {} as Record<HeatKey, HeatLevel>,
)

/** Default heat for a heatable item when first added to the bag — "Original". */
export const DEFAULT_HEAT: HeatKey = 'hot'
