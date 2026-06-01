/**
 * The Champs Chicken menu — transcribed from the live Champs menu board, with
 * brand-voiced descriptions written for the storefront.
 *
 * Entrees carry the real à-la-carte / meal pricing as a "Make it a Meal"
 * option group. Prices are stored in dollars; use `round2()` from lib/format
 * for any math.
 */

export type CategoryKey = 'entrees' | 'family' | 'kids' | 'sides' | 'drinks' | 'desserts'

export interface MenuCategory {
  key: CategoryKey
  name: string
  tagline: string
}

export interface OptionChoice {
  id: string
  label: string
  priceDelta?: number
}

export interface OptionGroup {
  id: string
  label: string
  required: boolean
  choices: OptionChoice[]
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: CategoryKey
  /** Heatable items show the heat-level picker on their card. */
  heatable: boolean
  options?: OptionGroup[]
  badge?: string
  featured?: boolean
  /** Filename inside public/assets/menu/ — components fall back gracefully. */
  image: string
  /** Set by the admin menu-state layer when an item is marked unavailable. */
  soldOut?: boolean
}

export const CATEGORIES: MenuCategory[] = [
  { key: 'entrees', name: 'Entrees', tagline: 'Sandwiches, tenders & the Snack Attack.' },
  { key: 'family', name: 'Family Meals', tagline: 'Feed the whole crew.' },
  { key: 'kids', name: 'Kids Meals', tagline: 'For the little champs.' },
  { key: 'sides', name: 'Sides', tagline: 'The supporting cast.' },
  { key: 'drinks', name: 'Drinks', tagline: 'Wash it down.' },
  { key: 'desserts', name: 'Desserts', tagline: 'The sweet finish.' },
]

/** "À la carte" or upgrade to a Meal (fries + drink). Delta = meal − à la carte. */
const mealOption = (delta: number, note = 'fries + drink'): OptionGroup => ({
  id: 'serving',
  label: 'Make it a Meal',
  required: true,
  choices: [
    { id: 'alacarte', label: 'À La Carte' },
    { id: 'meal', label: `Meal · ${note}`, priceDelta: delta },
  ],
})

export const MENU: MenuItem[] = [
  // ---- ENTREES --------------------------------------------------------
  {
    id: 'e-sandwich',
    name: 'Champs Chicken Sandwich',
    description:
      'Hand-breaded chicken breast on a toasted potato bun with coleslaw, pickles and Champs sauce. The one that started it all.',
    price: 8.99,
    category: 'entrees',
    heatable: true,
    badge: 'The #1',
    featured: true,
    image: 'slider-meal.jpg',
    options: [mealOption(4.0)],
  },
  {
    id: 'e-tenderloin',
    name: 'Champs Tenderloin Sandwich',
    description:
      'A whole crispy tenderloin on a toasted brioche bun with coleslaw, pickles and Champs sauce.',
    price: 9.99,
    category: 'entrees',
    heatable: true,
    image: 'combo-meal.jpg',
    options: [mealOption(4.0)],
  },
  {
    id: 'e-tenders',
    name: 'Champs Chicken Tenders',
    description:
      'Three jumbo hand-breaded tenders served with pickles and your choice of dipping sauce.',
    price: 8.99,
    category: 'entrees',
    heatable: true,
    badge: 'Fan Favorite',
    featured: true,
    image: 'two-tender-meal.jpg',
    options: [mealOption(4.0)],
  },
  {
    id: 'e-snack-attack',
    name: 'Champs Snack Attack',
    description:
      'Mac n’ cheese or fries loaded with two jumbo tenders, Champs sauce and pickles. Creamy. Crispy. Loaded. Addictive.',
    price: 9.99,
    category: 'entrees',
    heatable: true,
    badge: 'Signature',
    featured: true,
    image: 'over-fries-mac.jpg',
    options: [
      {
        id: 'base',
        label: 'Your Base',
        required: true,
        choices: [
          { id: 'mac', label: 'Mac N Cheese' },
          { id: 'fries', label: 'French Fries' },
        ],
      },
      mealOption(2.0, 'add a drink'),
    ],
  },
  {
    id: 'e-sliders',
    name: 'Champs Chicken Sliders',
    description:
      'Two sliders on toasted brioche buns with coleslaw, pickles and Champs sauce.',
    price: 7.99,
    category: 'entrees',
    heatable: true,
    image: 'double-slider-meal.jpg',
    options: [mealOption(4.0)],
  },

  // ---- FAMILY MEALS ---------------------------------------------------
  {
    id: 'f-tenders',
    name: 'Family Tender Pack',
    description:
      '12 jumbo chicken tenders with two large sides, Texas toast and four sauces. Built to feed the table.',
    price: 39.99,
    category: 'family',
    heatable: true,
    badge: 'Feeds 4–5',
    image: 'tender-box-10.jpg',
  },
  {
    id: 'f-combo',
    name: 'Tenders & Sliders Combo',
    description:
      '6 jumbo tenders and 4 sliders with two large sides, Texas toast and four sauces. A little of everything.',
    price: 39.99,
    category: 'family',
    heatable: true,
    badge: 'Feeds 4–5',
    image: 'loaded-platter.jpg',
  },

  // ---- KIDS MEALS -----------------------------------------------------
  {
    id: 'k-tenders',
    name: 'Kids Chicken Tenders',
    description:
      'Two tenders and one sauce, served with fries and a small drink. For the little champs.',
    price: 5.99,
    category: 'kids',
    heatable: true,
    image: 'tender-box-6.jpg',
  },
  {
    id: 'k-mac',
    name: 'Kids Mac & Cheese',
    description:
      'Creamy three-cheese mac, served with fries and a small drink.',
    price: 5.99,
    category: 'kids',
    heatable: false,
    image: 'mac.jpg',
  },

  // ---- SIDES ----------------------------------------------------------
  {
    id: 's-fries',
    name: 'French Fries',
    description: 'Golden, craggy-edged, salted the second they leave the oil.',
    price: 2.99,
    category: 'sides',
    heatable: false,
    image: 'fries.jpg',
    options: [
      {
        id: 'size',
        label: 'Size',
        required: true,
        choices: [
          { id: 'small', label: 'Small' },
          { id: 'large', label: 'Large', priceDelta: 2.0 },
        ],
      },
      {
        id: 'top',
        label: 'Top It',
        required: true,
        choices: [
          { id: 'plain', label: 'Plain' },
          { id: 'cheese', label: 'Add Cheese', priceDelta: 0.99 },
          { id: 'bacon', label: 'Add Bacon', priceDelta: 0.99 },
        ],
      },
    ],
  },
  {
    id: 's-mac',
    name: 'Mac N Cheese',
    description: 'Three-cheese, creamy, deeply comforting.',
    price: 2.99,
    category: 'sides',
    heatable: false,
    image: 'mac.jpg',
    options: [
      {
        id: 'size',
        label: 'Size',
        required: true,
        choices: [
          { id: 'small', label: 'Small' },
          { id: 'large', label: 'Large', priceDelta: 2.0 },
        ],
      },
      {
        id: 'top',
        label: 'Top It',
        required: true,
        choices: [
          { id: 'plain', label: 'Plain' },
          { id: 'bacon', label: 'Add Bacon', priceDelta: 0.99 },
        ],
      },
    ],
  },
  {
    id: 's-slaw',
    name: 'Coleslaw',
    description: 'Cold, crisp, tangy — your heat-level insurance policy.',
    price: 2.99,
    category: 'sides',
    heatable: false,
    image: 'slaw.jpg',
    options: [
      {
        id: 'size',
        label: 'Size',
        required: true,
        choices: [
          { id: 'small', label: 'Small' },
          { id: 'large', label: 'Large', priceDelta: 2.0 },
        ],
      },
    ],
  },
  // ---- DRINKS ---------------------------------------------------------
  {
    id: 'd-lemonade',
    name: 'Lemonade',
    description: 'House lemonade — sweet, tart and very, very cold.',
    price: 2.49,
    category: 'drinks',
    heatable: false,
    image: 'lemonade.jpg',
    options: [
      {
        id: 'flavor',
        label: 'Flavor',
        required: true,
        choices: [
          { id: 'original', label: 'Original' },
          { id: 'cherry', label: 'Cherry' },
          { id: 'watermelon', label: 'Watermelon' },
          { id: 'blue', label: 'Blue Raspberry' },
          { id: 'mix', label: 'Mix It Up' },
        ],
      },
    ],
  },
  {
    id: 'd-tea',
    name: 'Sweet Tea',
    description: 'Brewed fresh and poured over ice.',
    price: 2.49,
    category: 'drinks',
    heatable: false,
    image: 'fountain.jpg',
  },
  {
    id: 'd-bottle',
    name: 'Bottled Drink',
    description: 'Ice-cold bottled soda — your pick.',
    price: 2.49,
    category: 'drinks',
    heatable: false,
    image: 'fountain.jpg',
  },
  {
    id: 'd-water',
    name: 'Bottled Water',
    description: 'The wise move on a Reaper’s Rush order.',
    price: 1.99,
    category: 'drinks',
    heatable: false,
    image: 'fountain.jpg',
  },

  // ---- DESSERTS -------------------------------------------------------
  {
    id: 'des-banana',
    name: 'Banana Pudding',
    description: 'Cool, creamy banana pudding — the classic cooldown.',
    price: 3.49,
    category: 'desserts',
    heatable: false,
    image: 'banana-pudding.jpg',
  },
  {
    id: 'des-carrot',
    name: 'Carrot Cake',
    description: 'Moist, spiced carrot cake with cream-cheese frosting.',
    price: 3.49,
    category: 'desserts',
    heatable: false,
    image: 'carrot-cake.jpg',
  },
]

export const MENU_BY_ID: Record<string, MenuItem> = MENU.reduce(
  (acc, item) => {
    acc[item.id] = item
    return acc
  },
  {} as Record<string, MenuItem>,
)

export const FEATURED_ITEMS: MenuItem[] = MENU.filter((item) => item.featured)

export function itemsByCategory(category: CategoryKey): MenuItem[] {
  return MENU.filter((item) => item.category === category)
}
