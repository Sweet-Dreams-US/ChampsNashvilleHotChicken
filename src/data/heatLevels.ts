/**
 * The Champs heat ladder — the brand's signature interactive motif.
 *
 * Four named levels straight off the Champs menu board (Mild, Original,
 * Nashville Hot, Reaper's Rush). The internal keys (mild|hot|blaze|reaper) are
 * kept stable because the cart line IDs and admin seed data reference them —
 * only the display names, blurbs and colors are Champs-specific. "Original" is
 * the house default.
 */

export type HeatKey = 'mild' | 'hot' | 'blaze' | 'reaper'

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
    key: 'mild',
    name: 'Mild',
    flames: 1,
    color: '#F4B731',
    blurb: 'A little heat, a lot of flavor.',
    scoville: '~2K SHU',
  },
  {
    key: 'hot',
    name: 'Original',
    flames: 2,
    color: '#FF7A1A',
    blurb: 'Classic heat. The perfect start.',
    scoville: '~25K SHU',
  },
  {
    key: 'blaze',
    name: 'Nashville Hot',
    flames: 4,
    color: '#E5202A',
    blurb: 'The real deal. Bring the heat.',
    scoville: '~150K SHU',
  },
  {
    key: 'reaper',
    name: 'Reaper’s Rush',
    flames: 5,
    color: '#8E1118',
    blurb: 'For the heat lovers. No mercy.',
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
