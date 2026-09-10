import { formatPrice } from "./config";

export type Category =
  | "airport-transfers"
  | "private-tours"
  | "seasonal-tours"
  | "day-trips"
  | "experiences"
  | "executive-transportation"
  | "cruise-terminal-transfers"
  | "chauffeur-service";

export interface TourPackage {
  slug: string;
  category: Category;
  title: string;
  subtitle: string;
  image: string;
  price?: number;
  compareAt?: number;
  fromPrice?: boolean;
  priceLabel?: string;
  quoteOnly?: boolean;
  duration?: string;
  capacity?: string;
  badge?: string;
  summary: string;
  highlights: string[];
  itinerary?: { time: string; title: string; detail: string }[];
  includes: string[];
  featured?: boolean;
}

export const FLEET = [
  {
    slug: "suburban-high-country",
    name: "Chevrolet Suburban High Country",
    year: "2023",
    type: "Black Luxury SUV",
    image: "/images/fleet-suburban.jpg",
    passengers: "Up to 6 passengers",
    luggage: "6 large + 4 carry-on suitcases",
    from: 120,
    blurb:
      "Our flagship vehicle. A jet-black High Country Suburban with first-class rear seating — the default choice for airport transfers, family travel and executive movement across the Tri-State area.",
    features: [
      "Heated & ventilated leather seating",
      "Complimentary bottled water & Wi-Fi",
      "Flight tracking with 60 min complimentary wait",
      "Tolls, taxes & parking included",
    ],
  },
  {
    slug: "executive-sedan",
    name: "Executive Sedan",
    year: "Mercedes-Benz S-Class / Cadillac CT6",
    type: "Black Executive Sedan",
    image: "/images/fleet-sedan.jpg",
    passengers: "Up to 3 passengers",
    luggage: "3 large + 2 carry-on suitcases",
    from: undefined as number | undefined,
    blurb:
      "Quiet, discreet and impeccably presented. The S-Class / CT6 sedan is built for business travel, client meetings, red-carpet arrivals and hourly as-directed service.",
    features: [
      "Chauffeur in suit, meet & greet at arrivals",
      "Privacy, discretion & punctuality first",
      "Hourly as-directed packages available",
      "Corporate accounts & invoicing",
    ],
  },
  {
    slug: "private-jet-charter",
    name: "Private Aircraft & Jet Charters",
    year: "Light, midsize & heavy jets",
    type: "Private Aviation Connections",
    image: "/images/fleet-jet.jpg",
    passengers: "4 to 14 passengers",
    luggage: "Door-to-door baggage handling",
    from: undefined as number | undefined,
    blurb:
      "From Teterboro (TEB) to any destination worldwide. We coordinate your ground transfer and your flight as one seamless journey — a single point of contact from curb to cabin.",
    features: [
      "Curated, safety-audited aircraft operators",
      "Ground transfer synchronized with your wheels-up time",
      "Catering, security & itinerary handling on request",
      "Empty-leg opportunities on request",
    ],
  },
] as const;

export const PACKAGES: TourPackage[] = [
  {
    slug: "manhattan-to-jfk",
    category: "airport-transfers",
    title: "New York → JFK International",
    subtitle: "Private SUV Transfer · Chevrolet Suburban High Country",
    image: "/images/airport-transfer.jpg",
    price: 120,
    compareAt: 155,
    fromPrice: true,
    duration: "45 – 75 min depending on traffic",
    capacity: "Up to 6 passengers",
    badge: "Most Booked",
    summary:
      "Our best-selling airport transfer: a black Chevrolet Suburban High Country picked up at your door in Manhattan and delivered to any JFK terminal. One flat promotional rate — tolls, taxes and gratuity included.",
    highlights: [
      "Flat all-inclusive rate — no surge, no hidden fees",
      "Live flight tracking + 60 minutes complimentary wait",
      "Curbside terminal drop-off at all JFK terminals",
      "Child seats available on request, free of charge",
    ],
    includes: [
      "Professional chauffeur in suit",
      "Bottled water & phone charging cables",
      "All tolls, taxes and airport fees",
      "Meet & greet inside arrivals on request",
    ],
  },
  {
    slug: "manhattan-to-ewr",
    category: "airport-transfers",
    title: "New York → Newark Liberty (EWR)",
    subtitle: "Private SUV Transfer · Chevrolet Suburban High Country",
    image: "/images/nyc-skyline.jpg",
    price: 140,
    compareAt: 160,
    fromPrice: true,
    duration: "35 – 60 min depending on traffic",
    capacity: "Up to 6 passengers",
    badge: "Promo Rate",
    summary:
      "Seamless door-to-terminal service to EWR from Manhattan, Brooklyn or the Tri-State area, including Holland & Lincoln Tunnel tolls — already covered by your flat rate.",
    highlights: [
      "Tunnel tolls included in the flat rate",
      "Direct drop-off at Terminal A, B or C",
      "Ideal for late-night and early-morning departures",
      "Sprinter van upgrades for groups",
    ],
    includes: [
      "Professional chauffeur in suit",
      "Bottled water & phone charging cables",
      "All tolls, taxes and airport fees",
      "60 minutes complimentary wait time",
    ],
  },
  {
    slug: "all-airports-sedan-suburban",
    category: "airport-transfers",
    title: "JFK · LGA · EWR · HPN",
    subtitle: "Executive Sedan or Suburban — every airport, every hour",
    image: "/images/fleet-sedan.jpg",
    quoteOnly: true,
    priceLabel: "Solicite Cotización",
    duration: "24 / 7 availability",
    capacity: "1 – 6 passengers · groups on request",
    summary:
      "LaGuardia, Westchester, Teterboro, Manhattan heliports or a private terminal — tell us where you land and we quote you a flat rate in minutes, day or night.",
    highlights: [
      "Sedan (S-Class / CT6) or Suburban High Country",
      "Teterboro TEB & private FBO arrivals coordinated",
      "Group vans and Sprinters on request",
      "Quote answered in under 10 minutes on WhatsApp",
    ],
    includes: [
      "Personalised flat quote, all-inclusive",
      "Professional chauffeur in suit",
      "Flight tracking and complimentary wait time",
      "Corporate invoicing available",
    ],
  },
  {
    slug: "helicopter-experience",
    category: "experiences",
    title: "Manhattan Helicopter Tour",
    subtitle: "Skyline flight over New York City",
    image: "/images/helicopter-tour.jpg",
    price: 129,
    fromPrice: true,
    duration: "20 – 30 min flight",
    capacity: "Up to 5 passengers per aircraft",
    badge: "Unforgettable",
    summary:
      "See New York the way it was meant to be seen. A private transfer to the heliport and a golden-hour flight over the Empire State Building, Statue of Liberty and the Manhattan skyline.",
    highlights: [
      "Door-to-heliport private transfer included",
      "Photo-worthy window seating arranged for you",
      "Champagne add-on available",
      "Weather-protected rebooking guarantee",
    ],
    includes: [
      "Round-trip ground transportation",
      "Helicopter flight over Manhattan",
      "All handling and heliport fees",
      "Digital flight photos on request",
    ],
  },
  {
    slug: "upper-lower-manhattan",
    category: "experiences",
    title: "Excursión Alto y Bajo Manhattan",
    subtitle: "Upper & Lower Manhattan Highlights",
    image: "/images/times-square.jpg",
    price: 45,
    duration: "4 – 5 hours",
    capacity: "Small group or private",
    badge: "Best Value",
    summary:
      "De Wall Street a Harlem: una excursión que recorre los dos extremos de la isla de Manhattan en un solo día — el mejor punto de partida para su primera visita a Nueva York.",
    highlights: [
      "Bajo Manhattan: Wall Street, Charging Bull, One World Trade",
      "9/11 Memorial & the Oculus",
      "Alto Manhattan: Harlem, Apollo Theater, Cathedral of St. John",
      "Times Square & Rockefeller Center photo stop",
    ],
    includes: [
      "Transporte privado en vehículo de lujo",
      "Guía conductor bilingüe (Español / English)",
      "Paradas fotográficas en los puntos emblemáticos",
      "Agua embotellada a bordo",
    ],
  },
  {
    slug: "contrast-flavor-of-new-york",
    category: "private-tours",
    title: "Contrast with the Flavor of New York",
    subtitle: "Private SUV + driver · 5 – 6 hours",
    image: "/images/dumbo-bridge.jpg",
    price: 250,
    duration: "5 – 6 hours",
    capacity: "Private — up to 6 passengers",
    badge: "Private Tour",
    summary:
      "One private vehicle, one dedicated driver, and the tastes that define New York. From the calm of Washington Square Park to the waterfront of DUMBO, with coal-oven pizza and artisan chocolate in between.",
    highlights: [
      "Washington Square Park & Greenwich Village",
      "DUMBO waterfront with Manhattan Bridge views",
      "Grimaldi's / Juliana's legendary coal-oven pizza",
      "Jacques Torres Chocolate — tasting included",
    ],
    itinerary: [
      { time: "10:00", title: "Private pickup at your hotel", detail: "Your chauffeur meets you in the lobby with a name sign. Bottled water ready on board." },
      { time: "10:30", title: "Washington Square Park", detail: "The arch, the fountain and the bohemian heart of Greenwich Village." },
      { time: "11:30", title: "DUMBO & the Manhattan Bridge", detail: "Waterfront photo session on Washington Street — the most photographed street in Brooklyn." },
      { time: "12:30", title: "Grimaldi's / Juliana's Pizza", detail: "Coal-oven pizza where modern New York pizza was born. Tasting included." },
      { time: "14:00", title: "Jacques Torres Chocolate", detail: "Hot chocolate and hand-made confections from New York's master chocolatier." },
      { time: "15:30", title: "Return to Manhattan", detail: "Drop-off at your hotel, your concierge or any address in the city." },
    ],
    includes: [
      "Private Chevrolet Suburban High Country + driver",
      "All parking and tolls",
      "Pizza and chocolate tastings",
      "Fully flexible itinerary — stop as long as you like",
    ],
  },
  {
    slug: "contrastes-de-new-york",
    category: "private-tours",
    title: "Contrastes de New York",
    subtitle: "Lo mejor de la ciudad en una sola experiencia",
    image: "/images/nyc-skyline.jpg",
    price: 50,
    duration: "4 – 5 hours",
    capacity: "Group or private upgrade",
    summary:
      "El contraste es la esencia de Nueva York: rascacielos y parques, Brooklyn y Manhattan, el clásico y lo moderno. Un recorrido esencial a un precio inmejorable.",
    highlights: [
      "Times Square y el corazón de Midtown",
      "Central Park: Bethesda Terrace & Bow Bridge",
      "Puente de Brooklyn y vistas al skyline",
      "Empire State Building (exterior) y Flatiron",
    ],
    includes: [
      "Transporte turístico de lujo",
      "Guía conductor bilingüe",
      "Paradas fotográficas guiadas",
      "Agua embotellada a bordo",
    ],
  },
  {
    slug: "christmas-lights-tour",
    category: "seasonal-tours",
    title: "Blessed Journey Christmas Lights Tour",
    subtitle: "Dyker Heights · Brooklyn · Manhattan — December only",
    image: "/images/christmas-lights.jpg",
    price: 250,
    duration: "5 – 6 hours · evenings",
    capacity: "Private — up to 6 passengers",
    badge: "Seasonal · December",
    featured: true,
    summary:
      "Our most requested seasonal experience. A private black Suburban, a thermos of hot chocolate, and the most spectacular Christmas lights in America — from the legendary displays of Dyker Heights to the Rockefeller Center tree.",
    highlights: [
      "Dyker Heights, Brooklyn — the famous decorated mansions",
      "DUMBO waterfront at night",
      "Grimaldi's / Juliana's coal-oven pizza stop",
      "Jacques Torres Chocolate — hot chocolate included",
      "Rockefeller Center Christmas Tree & ice rink",
      "Fifth Avenue windows: Saks, Bergdorf Goodman, Tiffany's",
    ],
    itinerary: [
      { time: "16:30", title: "Private pickup", detail: "Your chauffeur collects you from your hotel or any address in Manhattan." },
      { time: "17:30", title: "Dyker Heights Christmas Lights", detail: "Two full blocks of the most lavish residential holiday displays in the United States." },
      { time: "19:00", title: "DUMBO & pizza", detail: "Night views of the Manhattan Bridge, then Grimaldi's or Juliana's for coal-oven pizza." },
      { time: "20:00", title: "Jacques Torres Chocolate", detail: "Hot chocolate and confections to warm up before heading into Manhattan." },
      { time: "20:45", title: "Rockefeller Center", detail: "The Tree, the rink and the golden Prometheus statue — the postcard moment of the season." },
      { time: "21:30", title: "Fifth Avenue windows", detail: "A slow cruise past Saks, Bergdorf Goodman and Tiffany & Co., then drop-off at your hotel." },
    ],
    includes: [
      "Private Chevrolet Suburban High Country + driver",
      "Hot chocolate at Jacques Torres",
      "Pizza stop in DUMBO",
      "All parking, tolls and tolls of the evening",
    ],
  },
  {
    slug: "philadelphia-amish",
    category: "day-trips",
    title: "Philadelphia & Amish Country",
    subtitle: "Full-day private excursion from New York",
    image: "/images/amish-country.jpg",
    price: 1200,
    duration: "12 – 13 hours · departs 7:00 AM",
    capacity: "Private — up to 6 passengers",
    badge: "Full Day",
    summary:
      "Two worlds in one day. The birthplace of the United States in the morning, and the quiet, horse-drawn pace of Lancaster's Amish Country in the afternoon — all in your own private Suburban.",
    highlights: [
      "Independence Hall & the Liberty Bell",
      "Philadelphia Museum of Art — the Rocky steps",
      "Lancaster Amish Country: buggy ride through farmland",
      "Farm-to-table Amish lunch",
    ],
    includes: [
      "Private vehicle + chauffeur for the full day",
      "All tolls, parking and fuel",
      "Amish farm lunch",
      "Flexible pacing — your schedule, your stops",
    ],
  },
  {
    slug: "washington-vip-bible-museum",
    category: "day-trips",
    title: "Washington VIP con Museo de la Biblia",
    subtitle: "Full-day private VIP excursion from New York",
    image: "/images/washington-dc.jpg",
    price: 1200,
    duration: "13 – 14 hours · departs 6:30 AM",
    capacity: "Private — up to 6 passengers",
    badge: "VIP Full Day",
    summary:
      "La capital de la nación, sin filas y sin prisas. Un día privado en Washington D. C. que combina historia, fe y los monumentos más iconicos del país, con entrada prioritaria al Museo de la Biblia.",
    highlights: [
      "Museo de la Biblia — entrada incluida",
      "Capitolio, Casa Blanca (exterior) y Memorial Lincoln",
      "Memorial de la Segunda Guerra Mundial y Reflecting Pool",
      "Catedral Nacional de Washington",
    ],
    includes: [
      "Vehículo privado + chófer por el día completo",
      "Entrada al Museo de la Biblia",
      "Peajes, estacionamiento y combustible",
      "Guía conductor bilingüe",
    ],
  },
  {
    slug: "sight-sound-philadelphia",
    category: "day-trips",
    title: "Philadelphia Sight & Sound Experience",
    subtitle: "Liberty Bell · Amish Country · JOSHUA at Sight & Sound",
    image: "/images/philadelphia.jpg",
    price: 1150,
    duration: "16 hours · departs 6:00 AM",
    capacity: "Private — up to 6 passengers",
    badge: "Show + Tour",
    summary:
      "A 6:00 AM departure for a day that ends on the largest stage in Lancaster. Liberty Bell, Amish Country, and the acclaimed JOSHUA production at Sight & Sound Theatres — tickets and transport arranged as one.",
    highlights: [
      "6:00 AM private departure from New York",
      "JOSHUA — live at Sight & Sound Theatres, Lancaster",
      "Liberty Bell & Independence Hall photo stop",
      "Amish Country and traditional lunch stop",
    ],
    includes: [
      "Private vehicle + chauffeur for the full day",
      "Sight & Sound JOSHUA show tickets",
      "All tolls, parking and fuel",
      "Reserved seating coordination",
    ],
  },
];

export const CATEGORIES: Record<
  Category,
  {
    label: string;
    navLabel?: string;
    title: string;
    heroImage: string;
    intro: string;
    bullets?: { title: string; text: string }[];
  }
> = {
  "airport-transfers": {
    label: "Airport Transfers",
    navLabel: "Airport Transfers",
    title: "Private Airport Transfers in New York",
    heroImage: "/images/airport-transfer.jpg",
    intro:
      "Flat promotional rates, black Suburbans and sedans, and chauffeurs who track your flight. JFK from $120 — EWR from $140 — all airports quoted in minutes.",
    bullets: [
      { title: "Flight tracking", text: "We monitor your landing and adjust pickup automatically." },
      { title: "60 min free wait", text: "Inside the terminal, at no extra cost." },
      { title: "All-inclusive rates", text: "Tolls, taxes, airport fees and gratuity included." },
    ],
  },
  "private-tours": {
    label: "Private Tours",
    navLabel: "Private Tours",
    title: "Private Tours of New York City",
    heroImage: "/images/dumbo-bridge.jpg",
    intro:
      "Your own vehicle, your own driver, your own pace. From the flavors of Brooklyn to the skyline of Manhattan — every tour is private and fully flexible.",
  },
  "seasonal-tours": {
    label: "Seasonal Tours",
    navLabel: "Seasonal Tours",
    title: "Seasonal Experiences",
    heroImage: "/images/christmas-lights.jpg",
    intro:
      "A small collection of unforgettable seasonal journeys — offered only when New York is at its most magical.",
  },
  "day-trips": {
    label: "Day Trips",
    navLabel: "Day Trips",
    title: "Private Day Trips from New York",
    heroImage: "/images/washington-dc.jpg",
    intro:
      "Philadelphia, Amish Country and Washington D. C. — full-day private excursions with your own chauffeur, departing from any address in the Tri-State area.",
  },
  experiences: {
    label: "Experiences",
    title: "Signature Experiences",
    heroImage: "/images/helicopter-tour.jpg",
    intro:
      "Short, spectacular and perfectly arranged — helicopter flights and city highlights that fit between two meetings.",
  },
  "executive-transportation": {
    label: "Executive Transportation",
    title: "Executive Ground Transportation",
    heroImage: "/images/fleet-sedan.jpg",
    intro:
      "Corporate travel, roadshows, client meetings and red-carpet arrivals — moved with discretion in black S-Class, CT6 and Suburban vehicles, available hourly or as-directed.",
    bullets: [
      { title: "Hourly as-directed", text: "Keep the vehicle and chauffeur for the whole agenda." },
      { title: "Corporate accounts", text: "Consolidated monthly invoicing and dedicated dispatch." },
      { title: "Roadshows & events", text: "Multi-vehicle movements coordinated by one dispatcher." },
      { title: "Red-carpet arrivals", text: "Weddings, galas, fashion week and premieres." },
    ],
  },
  "cruise-terminal-transfers": {
    label: "Cruise Terminal Transfers",
    title: "Cruise Terminal Transfers",
    heroImage: "/images/cruise-terminal.jpg",
    intro:
      "Manhattan Cruise Terminal, Brooklyn Cruise Terminal and Cape Liberty — curb-to-pier service with luggage assistance and guaranteed on-time arrival for your sailing.",
    bullets: [
      { title: "Manhattan Cruise Terminal", text: "Piers 88, 90 and 94 — Midtown West." },
      { title: "Brooklyn Cruise Terminal", text: "Red Hook, Brooklyn — Cape Liberty alternative." },
      { title: "Group capacity", text: "Suburbans, executive sedans and Sprinter vans for full parties." },
    ],
  },
  "chauffeur-service": {
    label: "Professional Chauffeur Service",
    title: "Professional Chauffeur Service",
    heroImage: "/images/hero-chauffeur.jpg",
    intro:
      "More than a driver. A trained, uniformed chauffeur who knows Manhattan, arrives early, opens doors and disappears into the background — exactly as it should be.",
    bullets: [
      { title: "Meet & greet", text: "Name sign inside arrivals, luggage assistance, no waiting." },
      { title: "Discretion", text: "NDA-friendly service for executives and public figures." },
      { title: "Local knowledge", text: "Tunnel, bridge and terminal expertise — always the fastest route." },
    ],
  },
};

export const SERVICE_CARDS: { label: string; text: string; image: string; to: string }[] = [
  {
    label: "Executive Transportation",
    text: "Black S-Class, CT6 & Suburban · hourly as-directed",
    image: "/images/fleet-sedan.jpg",
    to: "/services/executive-transportation",
  },
  {
    label: "Private NYC Tours",
    text: "Your own vehicle and driver · fully flexible",
    image: "/images/dumbo-bridge.jpg",
    to: "/services/private-tours",
  },
  {
    label: "Airport Transfers",
    text: "JFK from $120 · EWR from $140 · 24/7",
    image: "/images/airport-transfer.jpg",
    to: "/services/airport-transfers",
  },
  {
    label: "Cruise Terminal Transfers",
    text: "Manhattan · Brooklyn · Cape Liberty",
    image: "/images/cruise-terminal.jpg",
    to: "/services/cruise-terminal-transfers",
  },
  {
    label: "Professional Chauffeur",
    text: "Meet & greet, discretion, punctuality",
    image: "/images/hero-chauffeur.jpg",
    to: "/services/chauffeur-service",
  },
  {
    label: "Day Trips",
    text: "Philadelphia, Amish Country & Washington D.C.",
    image: "/images/philadelphia.jpg",
    to: "/services/day-trips",
  },
];

export const bySlug = (slug?: string | null) => PACKAGES.find((p) => p.slug === slug);

export const byCategory = (category: Category) => PACKAGES.filter((p) => p.category === category);

export function packagePriceLabel(pkg: TourPackage): string {
  if (pkg.priceLabel) return pkg.priceLabel;
  if (pkg.quoteOnly) return "Quote on request";
  if (pkg.price === undefined) return "On request";
  return `${pkg.fromPrice ? "From " : ""}${formatPrice(pkg.price)}`;
}

export function relatedTo(pkg: TourPackage, count = 3): TourPackage[] {
  const same = PACKAGES.filter((p) => p.slug !== pkg.slug && p.category === pkg.category);
  const rest = PACKAGES.filter((p) => p.slug !== pkg.slug && p.category !== pkg.category);
  return [...same, ...rest].slice(0, count);
}