/**
 * Every word on the page. SELENE is a concept brand — names, dates and
 * missions are illustrative placeholders, and the page says so.
 */

export const brand = {
  name: 'Selene',
  wordmark: 'SELENE · VIVEK',
  email: 'vivek@selene.space',
};

export const nav = [
  {label: 'Log', href: '#log'},
  {label: 'Trajectory', href: '#trajectory'},
  {label: 'Missions', href: '#missions'},
  {label: 'Reserve', href: '#reserve'},
];

export const hero = {
  title: 'EARTHRISE',
  kicker: 'A lunar expedition concept by Vivek',
  site: 'Station Vivek · Mare Tranquillitatis · 0.67°N 23.47°E',
};

export const intro = {
  eyebrow: 'Mission log',
  heading: 'The journey that leaves the planet behind.',
  body: 'Four days out across the dark, a week on the lunar plains, and one view nobody ever forgets. Experience the voyage, frame by frame.',
};

export const log = [
  {tag: 'T−0', title: 'Launch', body: 'Nine minutes of thunder, then silence and the curved glow of the Earth.', image: '/media/cards/m1-launch.webp'},
  {tag: 'Day 3', title: 'Lunar orbit', body: 'The far side scrolls past the window. Your reflection against the silent void.', image: '/media/cards/m2-orbit.webp'},
  {tag: 'Day 4', title: 'Station Vivek', body: 'Pressurised habitats, a warm meal, and an observation deck pointed home.', image: '/media/cards/m3-base.webp'},
  {tag: 'Day 5', title: 'First steps', body: 'Footprints in the undisturbed regolith that will outlast centuries.', image: '/media/cards/m4-walk.webp'},
];

/** Legs of the Earth → Moon trajectory, in drawing order. */
export const trajectory = {
  eyebrow: 'Trajectory',
  heading: '384,400 km, charted as you scroll.',
  legs: [
    {day: 'Day 0', title: 'Parking orbit', body: 'Two checkout revolutions around Earth before systems green-light the burn.'},
    {day: 'Day 0', title: 'Trans-lunar injection', body: 'A high-thrust ignition casts the ship into the cislunar corridor.'},
    {day: 'Day 3', title: 'Lunar orbit insertion', body: 'Retrofire on the far side in radio blackout. Gravitational capture achieved.'},
    {day: 'Day 4', title: 'Terminal descent', body: 'Twelve powered minutes down to the dust of Station Vivek.'},
  ],
};

export const missions = {
  eyebrow: 'Expedition Classes',
  heading: 'Three ways to touch the void.',
  note: 'Concept missions — curated flight profiles.',
  items: [
    {name: 'Orbiter', days: 6, lines: ['Two lunar orbits', 'Far-side flyover', 'Earthrise from orbit'], cta: 'Join the Orbiter list'},
    {name: 'Lander', days: 10, lines: ['Four nights at Station Vivek', 'Two surface EVAs', 'Earthrise from the surface'], cta: 'Join the Lander list', featured: true},
    {name: 'Resident', days: 28, lines: ['A full lunar day and night', 'Highland traverse excursion', 'Science crew rotation'], cta: 'Join the Resident list'},
  ],
};

export const reserve = {
  eyebrow: 'Manifest',
  heading: 'Reserve your place in the stars.',
  body: 'No payment, no commitment. We will notify you when flight windows open.',
  /** Illustrative launch window for the countdown (the Apollo 11 anniversary). */
  window: '2031-07-20T20:17:00Z',
  windowLabel: 'Next launch window (Vivek-1)',
};
