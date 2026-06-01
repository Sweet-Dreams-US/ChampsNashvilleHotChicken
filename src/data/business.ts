/**
 * Champs Chicken — business facts.
 * Sourced from the live Champs Chicken brand kit + Google/Toast listing.
 *
 * NOTE FOR CLIENT: phone + address + hours are confirmed real. Email and
 * social handles below are best-guess placeholders — send us the real ones
 * and we'll drop them in.
 */

export interface DayHours {
  day: string
  short: string
  label: string
  open: string // 24h "HH:MM"
  close: string
}

export const BUSINESS = {
  name: 'Champs Chicken',
  legalName: 'Champs Nashville Hot Chicken',
  tagline: 'Nashville hot done right.',
  slogan: 'This is Champs.',
  blurb:
    'Premium Nashville hot chicken out of Fort Wayne, Indiana. Hand-breaded, cooked to order, and dialed from a friendly Mild to the no-mercy Reaper’s Rush. This isn’t just chicken — this is Champs.',
  established: 2024,

  address: {
    street: '6328 E State Blvd',
    city: 'Fort Wayne',
    state: 'IN',
    zip: '46815',
    note: 'Georgetown Square · next door to Kroger',
  },
  get addressLine(): string {
    return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`
  },

  phone: '(260) 749-2304',
  phoneRaw: '+12607492304',
  email: 'champsnashvillehotchicken@gmail.com', // placeholder — confirm with client
  orderUrl: 'https://order.toasttab.com/online/champs-nashville-hot-chicken',

  mapUrl:
    'https://www.google.com/maps/dir/?api=1&destination=6328+E+State+Blvd,+Fort+Wayne,+IN+46815',

  // placeholder handles — confirm real accounts with client
  socials: {
    instagram: 'https://www.instagram.com/champsnashvillehotchicken',
    facebook: 'https://www.facebook.com/ChampsNashvilleHotChicken',
    tiktok: 'https://www.tiktok.com/@champsnashvillehotchicken',
  },

  /** Monday-first week. Real hours from the Champs brand kit. */
  hours: [
    { day: 'Monday', short: 'Mon', label: '10:30am – 7pm', open: '10:30', close: '19:00' },
    { day: 'Tuesday', short: 'Tue', label: '10:30am – 7pm', open: '10:30', close: '19:00' },
    { day: 'Wednesday', short: 'Wed', label: '10:30am – 7pm', open: '10:30', close: '19:00' },
    { day: 'Thursday', short: 'Thu', label: '10:30am – 7:30pm', open: '10:30', close: '19:30' },
    { day: 'Friday', short: 'Fri', label: '10:30am – 8:30pm', open: '10:30', close: '20:30' },
    { day: 'Saturday', short: 'Sat', label: '10:30am – 8:30pm', open: '10:30', close: '20:30' },
    { day: 'Sunday', short: 'Sun', label: '11am – 5pm', open: '11:00', close: '17:00' },
  ] as DayHours[],
} as const

/** Returns whether the shop is open right now, plus today's hours. */
export function getOpenState(now: Date = new Date()): {
  open: boolean
  today: DayHours
} {
  // JS getDay(): 0=Sun..6=Sat. Our array is Mon-first.
  const jsDay = now.getDay()
  const index = jsDay === 0 ? 6 : jsDay - 1
  const today = BUSINESS.hours[index]
  const minutes = now.getHours() * 60 + now.getMinutes()
  const toMin = (t: string) => {
    const [h, m] = t.split(':').map(Number)
    return h * 60 + m
  }
  const open = minutes >= toMin(today.open) && minutes < toMin(today.close)
  return { open, today }
}
