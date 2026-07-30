export const siteConfig = {
  name: "Sandhu Motors",
  tagline: "Heavy Vehicle Experts | BS4 & BS6 Diagnostics | Trusted Since 1996",
  shortDescription:
    "Commercial truck and heavy vehicle repair workshop in Nanded, Maharashtra, serving fleets and owner-drivers since 1996.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sandhumotors.in",
  founded: 1996,
  address: {
    line1: "Khalsa Road Carrier",
    line2: "Near Guru Gobind Singh Ji Petroleum",
    line3: "Bondhar Tarf Haveli, Kamtha Kh Bypass",
    line4: "Nanded Airport Area",
    city: "Nanded",
    state: "Maharashtra",
    pin: "431605",
    country: "India",
    full:
      "Khalsa Road Carrier, Near Guru Gobind Singh Ji Petroleum, Bondhar Tarf Haveli, Kamtha Kh Bypass, Nanded Airport Area, Nanded, Maharashtra 431605",
  },
  contact: {
    phonePrimary: "+91 99602 23737",
    phonePrimaryHref: "tel:+919960223737",
    phoneAlternate: "+91 77758 43737",
    phoneAlternateHref: "tel:+917775843737",
    email: "sandhumotors37@gmail.com",
    whatsappHref:
      "https://wa.me/919960223737?text=" +
      encodeURIComponent(
        "Hello Sandhu Motors, I would like to book my commercial vehicle for service."
      ),
  },
  social: {
    facebook: "https://www.facebook.com/sandhumotors37/",
    instagram: "https://www.instagram.com/sandhumotors37/",
  },
  hours: {
    weekdays: "Monday – Saturday, 9:00 AM – 7:00 PM",
    sunday: "Sunday: Closed",
  },
  mapsEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Khalsa Road Carrier Near Guru Gobind Singh Ji Petroleum Bondhar Tarf Haveli Kamtha Kh Bypass Nanded Airport Area Nanded Maharashtra 431605"
    ) +
    "&output=embed",
  mapsDirectionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Khalsa Road Carrier Near Guru Gobind Singh Ji Petroleum Bondhar Tarf Haveli Kamtha Kh Bypass Nanded Airport Area Nanded Maharashtra 431605"
    ),
  stats: [
    { value: 1996, label: "Established", suffix: "", isYear: true },
    { value: 1000, label: "Vehicles Repaired", suffix: "+" },
    { value: 500, label: "Happy Customers", suffix: "+" },
    { value: 4.8, label: "Customer Rating", suffix: "★" },
  ],
  brands: [
    "Tata Motors",
    "Ashok Leyland",
    "Mahindra Trucks",
    "BharatBenz",
    "Eicher",
    "Force Motors",
  ],
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  suitableFor: string[];
  estimatedTime: string;
  category: "Mechanical" | "Diagnostics" | "Electrical" | "Fleet";
};

export const services: Service[] = [
  {
    slug: "engine-repair",
    name: "Engine Repair",
    short: "Diagnosis and repair of engine faults, from minor to major.",
    description:
      "Full diagnostic teardown and repair of diesel engines for trucks and buses — covering fuel injection, cooling, timing, and compression faults using both mechanical inspection and laptop scanning.",
    benefits: ["Restores power and fuel efficiency", "Prevents cascading engine damage", "Genuine or OEM-equivalent parts"],
    suitableFor: ["Tata trucks", "Ashok Leyland trucks", "BharatBenz", "Eicher", "Buses"],
    estimatedTime: "1–3 days",
    category: "Mechanical",
  },
  {
    slug: "engine-overhaul",
    name: "Engine Overhaul",
    short: "Complete engine rebuild for high-mileage or worn-out vehicles.",
    description:
      "Ground-up rebuild of the engine block, pistons, liners, bearings, and valve train to bring an aging or heavily-used engine back to reliable working condition.",
    benefits: ["Extends vehicle life by years", "Restores factory-level performance", "Reduces long-term running cost"],
    suitableFor: ["High-mileage fleet trucks", "Buses", "Heavy haulage vehicles"],
    estimatedTime: "5–10 days",
    category: "Mechanical",
  },
  {
    slug: "truck-maintenance",
    name: "Truck Maintenance",
    short: "Routine mechanical maintenance to keep trucks road-ready.",
    description:
      "Comprehensive maintenance covering oil, filters, belts, cooling systems, and general wear items so your truck stays reliable between long hauls.",
    benefits: ["Fewer roadside breakdowns", "Longer component life", "Predictable running costs"],
    suitableFor: ["All commercial trucks", "Mini trucks", "Tankers"],
    estimatedTime: "Same day",
    category: "Mechanical",
  },
  {
    slug: "fleet-maintenance",
    name: "Fleet Maintenance",
    short: "Scheduled maintenance programs for multi-vehicle fleets.",
    description:
      "Annual maintenance contracts and scheduled servicing built around your fleet's duty cycle, with fleet health reporting to plan repairs before they cause downtime.",
    benefits: ["Reduced fleet downtime", "Priority workshop scheduling", "Consolidated billing and reporting"],
    suitableFor: ["Transport companies", "Logistics fleets", "Bus operators"],
    estimatedTime: "Ongoing contract",
    category: "Fleet",
  },
  {
    slug: "bs4-diagnostics",
    name: "BS4 Diagnostics",
    short: "Fault diagnosis for BS4 emission-compliant engines.",
    description:
      "Laptop-based scanning and sensor testing for BS4 engine management systems, covering fuel maps, sensor faults, and emission-related warning lights.",
    benefits: ["Accurate fault identification", "Avoids unnecessary part replacement", "Emission compliance maintained"],
    suitableFor: ["BS4 trucks", "BS4 buses"],
    estimatedTime: "1–2 hours",
    category: "Diagnostics",
  },
  {
    slug: "bs6-diagnostics",
    name: "BS6 Diagnostics",
    short: "Advanced diagnostics for BS6 engines, DPF, and AdBlue systems.",
    description:
      "Specialised diagnostics for BS6 vehicles including DPF regeneration issues, AdBlue/SCR system faults, NOx sensor errors, and ECU fault codes.",
    benefits: ["Resolves complex emission faults", "Prevents regeneration and derate issues", "Up-to-date diagnostic software"],
    suitableFor: ["BS6 trucks", "BS6 buses"],
    estimatedTime: "1–3 hours",
    category: "Diagnostics",
  },
  {
    slug: "laptop-scanning",
    name: "Laptop Scanning",
    short: "Computerised fault-code reading across all vehicle systems.",
    description:
      "Full-system laptop scan to pull live fault codes, freeze-frame data, and sensor readings across engine, transmission, and body control modules.",
    benefits: ["Pinpoints intermittent faults", "Live sensor data while driving", "Clear fault-code reporting"],
    suitableFor: ["All modern commercial vehicles"],
    estimatedTime: "30–60 minutes",
    category: "Diagnostics",
  },
  {
    slug: "ecu-diagnostics",
    name: "ECU Diagnostics",
    short: "Engine control unit fault-finding and programming support.",
    description:
      "Deep-level ECU diagnostics to identify software and wiring-related engine management faults, with reprogramming support where required.",
    benefits: ["Resolves power and starting issues", "Corrects fault-triggered limp modes", "Verified against manufacturer specs"],
    suitableFor: ["Tata", "Ashok Leyland", "BharatBenz", "Eicher"],
    estimatedTime: "1–2 hours",
    category: "Diagnostics",
  },
  {
    slug: "electrical-repairs",
    name: "Electrical Repairs",
    short: "Wiring, battery, alternator, and lighting system repairs.",
    description:
      "Diagnosis and repair of electrical faults across battery, charging, starter, lighting, and cabin electrical systems.",
    benefits: ["Reliable starting and charging", "Fewer intermittent electrical faults", "Safer lighting and signalling"],
    suitableFor: ["All commercial vehicles"],
    estimatedTime: "2–4 hours",
    category: "Electrical",
  },
  {
    slug: "brake-repairs",
    name: "Brake Repairs",
    short: "Brake system inspection, repair, and safety servicing.",
    description:
      "Full brake system service covering air/hydraulic lines, drums, pads, and valves — critical for heavy-vehicle stopping safety.",
    benefits: ["Restores safe stopping distance", "Reduces brake fade on long routes", "Compliance-ready condition"],
    suitableFor: ["Trucks", "Buses", "Trailers"],
    estimatedTime: "2–3 hours",
    category: "Mechanical",
  },
  {
    slug: "suspension-repairs",
    name: "Suspension Repairs",
    short: "Leaf spring, shock absorber, and axle suspension work.",
    description:
      "Repair and replacement of suspension components to restore ride stability and even load distribution for heavy cargo.",
    benefits: ["Smoother, safer ride", "Even tyre wear", "Reduced chassis stress"],
    suitableFor: ["Loaded trucks", "Tippers", "Trailers"],
    estimatedTime: "1 day",
    category: "Mechanical",
  },
  {
    slug: "air-system-repairs",
    name: "Air System Repairs",
    short: "Compressor, air brake, and pneumatic system repairs.",
    description:
      "Diagnosis and repair of air compressors, air tanks, and pneumatic brake/suspension lines to keep air-braked vehicles safe.",
    benefits: ["Consistent brake pressure", "Fewer air-leak breakdowns", "Extends compressor life"],
    suitableFor: ["Air-braked trucks and buses"],
    estimatedTime: "2–4 hours",
    category: "Mechanical",
  },
  {
    slug: "gearbox-repairs",
    name: "Gearbox Repairs",
    short: "Manual gearbox diagnosis, rebuild, and repair.",
    description:
      "Inspection and repair of gearbox synchros, bearings, and seals to resolve slipping, grinding, or hard-shifting issues.",
    benefits: ["Smooth, reliable gear changes", "Prevents further drivetrain damage", "Reduces fuel wastage from slipping gears"],
    suitableFor: ["Trucks", "Buses"],
    estimatedTime: "2–4 days",
    category: "Mechanical",
  },
  {
    slug: "transmission-repairs",
    name: "Transmission Repairs",
    short: "Full transmission and clutch system repairs.",
    description:
      "Clutch, propeller shaft, and transmission repairs to restore smooth power delivery from engine to wheels.",
    benefits: ["Restores towing and load capacity", "Eliminates clutch slip and shudder", "Longer drivetrain lifespan"],
    suitableFor: ["Heavy trucks", "Tippers", "Buses"],
    estimatedTime: "1–3 days",
    category: "Mechanical",
  },
  {
    slug: "preventive-maintenance",
    name: "Preventive Maintenance",
    short: "Scheduled checks to catch problems before breakdown.",
    description:
      "Structured inspection checklist covering fluids, filters, belts, brakes, and electrical systems to catch issues before they become breakdowns.",
    benefits: ["Fewer surprise repairs", "Lower total cost of ownership", "Documented service history"],
    suitableFor: ["All commercial vehicles", "Fleets"],
    estimatedTime: "2–3 hours",
    category: "Fleet",
  },
  {
    slug: "general-inspection",
    name: "General Inspection",
    short: "Full vehicle health check with a written report.",
    description:
      "Multi-point inspection of engine, brakes, suspension, electrical, and tyres, with a written health report and repair priority list.",
    benefits: ["Clear picture of vehicle condition", "Helps plan repair budget", "Useful before long trips"],
    suitableFor: ["All commercial vehicles"],
    estimatedTime: "1 hour",
    category: "Mechanical",
  },
  {
    slug: "emergency-repairs",
    name: "Emergency Repairs",
    short: "Breakdown support and urgent repair turnaround.",
    description:
      "Priority repair slots for breakdowns and urgent on-road failures to get your vehicle back to work with minimal downtime.",
    benefits: ["Minimises fleet downtime", "Priority workshop attention", "Direct phone support"],
    suitableFor: ["All commercial vehicles"],
    estimatedTime: "Priority / same day",
    category: "Mechanical",
  },
];

export const faqs = [
  { q: "Do you repair Tata trucks?", a: "Yes, we service and repair the full range of Tata Motors commercial trucks, from mechanical work to laptop diagnostics." },
  { q: "Do you repair BS6 engines?", a: "Yes, we specialise in BS6 diagnostics including DPF, AdBlue/SCR system, and NOx sensor faults." },
  { q: "Do you repair buses?", a: "Yes, we handle commercial bus repairs alongside truck and heavy vehicle work." },
  { q: "Do you provide laptop diagnostics?", a: "Yes, laptop-based fault-code scanning is one of our core services for both BS4 and BS6 vehicles." },
  { q: "Do you offer fleet maintenance?", a: "Yes, we offer annual maintenance contracts and scheduled servicing for transport and logistics fleets." },
  { q: "Can I book online?", a: "Yes, you can fill out the booking form on our Contact page and we'll confirm your slot by phone." },
  { q: "Do you accept UPI?", a: "Yes, UPI and other common digital payment methods are accepted at the workshop." },
  { q: "What are your working hours?", a: "We're open Monday to Saturday, 9:00 AM to 7:00 PM. We're closed on Sundays." },
  { q: "How long does servicing take?", a: "Routine maintenance is often same-day; larger repairs like engine overhauls can take several days. We'll give you a time estimate before starting." },
  { q: "Do you repair Ashok Leyland vehicles?", a: "Yes, Ashok Leyland trucks and buses are among the brands we regularly service." },
  { q: "Do you provide emergency repairs?", a: "Yes, we prioritise breakdown and urgent repair requests — call us directly for the fastest response." },
  { q: "Do you inspect commercial fleets?", a: "Yes, we provide multi-point fleet inspections and health reports to help plan maintenance." },
  { q: "Do you use genuine spare parts?", a: "We use genuine or OEM-equivalent parts and will always discuss part options with you before fitting." },
  { q: "Can I get an estimate before repair?", a: "Yes, we provide an estimate after inspection and before starting any paid repair work." },
  { q: "Where are you located?", a: "We're on Khalsa Road Carrier, near Guru Gobind Singh Ji Petroleum, Kamtha Kh Bypass, Nanded Airport Area, Nanded, Maharashtra." },
];

export const testimonials = [
  {
    name: "Ranjit S.",
    vehicle: "Tata 1613 — Fleet Owner",
    quote:
      "Our trucks are back on the road faster since we started working with Sandhu Motors. Their BS6 diagnostics saved us from a costly misdiagnosis at another garage.",
    rating: 5,
  },
  {
    name: "Manpreet K.",
    vehicle: "Ashok Leyland 3718",
    quote:
      "Straightforward explanations, fair pricing, and they actually show you the fault on the laptop before doing any work. That built a lot of trust.",
    rating: 5,
  },
  {
    name: "Suresh P.",
    vehicle: "BharatBenz 1617",
    quote:
      "Had an engine overhaul done here — the truck runs like new. Took a few days but the workmanship was worth the wait.",
    rating: 4.5,
  },
  {
    name: "Iqbal Transport Co.",
    vehicle: "8-vehicle fleet",
    quote:
      "We moved our whole fleet's preventive maintenance to Sandhu Motors. Downtime has dropped noticeably since we started scheduled servicing.",
    rating: 5,
  },
];

export const galleryCategories = [
  "Workshop",
  "Mechanics At Work",
  "Truck Repairs",
  "Before & After",
  "Engine Repairs",
  "Diagnostic Equipment",
  "Customer Deliveries",
  "Heavy Vehicles",
] as const;
