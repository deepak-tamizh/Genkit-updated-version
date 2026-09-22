// Shared project data used by the Portfolio page (/portfolio) and the
// Case Studies pages (/case-studies, /case-studies/:slug). Keeping one
// source of truth means a project only needs to be added/edited once.
//
// NOTE: names, quotes, and metrics below are illustrative sample content
// standing in for real client work — swap in real details as projects and
// case studies become available.

export const CATEGORIES = [
  "Business Websites",
  "E-commerce",
  "Construction",
  "Healthcare",
  "Education",
  "Portfolio",
  "Restaurant",
  "Real Estate",
];

export const PROJECTS = [
  {
    id: "meridian-consulting",
    name: "Meridian Consulting Group",
    category: "Business Websites",
    industry: "Professional Services",
    layout: "content",
    accent: "#0000cc",
    timeline: "5 weeks",
    problem:
      "Their outdated site failed to reflect the firm's expertise, so strong leads were bouncing before making contact.",
    features: [
      "Service-specific landing pages tailored to each practice area",
      "Client testimonial carousel with rotating case highlights",
      "Fast-loading, SEO-optimized architecture built for organic growth",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: [
      "62% increase in inbound inquiries within the first quarter",
      "2.1s average load time, down from 6.4s",
      "40% lower bounce rate on service pages",
    ],
    headlineResult: "62% more inbound inquiries",
    liveUrl: "#",

    challenge:
      "Meridian had grown mostly through referrals, but their five-year-old site undersold the depth of their advisory work. Visitors couldn't tell which practice areas the firm actually specialized in, load times stretched past six seconds on mobile, and the contact form routed to a shared inbox nobody monitored closely. Qualified leads were finding the site, getting confused, and leaving.",
    solution:
      "We rebuilt the site around each practice area as its own destination, not a shared paragraph on one crowded services page. Every section got a dedicated landing page with proof points, relevant case highlights, and a direct path to booking a consultation. We rebuilt the front end for speed first, then layered in the content — not the other way around.",
    process: [
      { phase: "Discovery", detail: "Interviewed partners to map how each practice area actually wins clients." },
      { phase: "Wireframing", detail: "Structured a dedicated template for practice-area pages before any visual design." },
      { phase: "Design & Build", detail: "Built the front end in React with performance budgets set from day one." },
      { phase: "Testing", detail: "Ran load-time and cross-device QA against the 2-second target." },
      { phase: "Launch & Handoff", detail: "Migrated content, redirected old URLs, and trained staff on the new inquiry routing." },
    ],
    before: [
      "6.4s average mobile load time",
      "One generic services page for 5 practice areas",
      "Contact form routed to a shared, unmonitored inbox",
    ],
    after: [
      "2.1s average mobile load time",
      "5 dedicated, SEO-optimized practice-area pages",
      "Inquiries routed directly to the right partner",
    ],
    feedback: {
      quote:
        "We finally have a site that explains what we do as clearly as we explain it in the room. The team asked sharper questions about our business than most consultants we've hired.",
      name: "R. Ahlawat",
      role: "Managing Partner, Meridian Consulting Group",
    },
  },
  {
    id: "luna-boutique",
    name: "Luna & Co. Boutique",
    category: "E-commerce",
    industry: "Fashion Retail",
    layout: "shop",
    accent: "#7c3aed",
    timeline: "7 weeks",
    problem:
      "Their legacy store couldn't handle a growing catalog, and mobile shoppers were abandoning checkout in droves.",
    features: [
      "Custom product filtering by size, color, and collection",
      "Streamlined one-page mobile checkout flow",
      "Automated abandoned-cart recovery emails",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "AWS"],
    results: [
      "3.2x improvement in mobile conversion rate",
      "28% higher average order value",
      "99.9% uptime maintained through seasonal sale spikes",
    ],
    headlineResult: "3.2x mobile conversions",
    liveUrl: "#",

    challenge:
      "Luna & Co. had outgrown their original storefront platform. Adding a new collection meant manually re-tagging dozens of products, filtering barely worked on mobile, and checkout required four separate screens — most mobile shoppers dropped off before finishing. Their busiest sales weekend of the previous year had actually seen the site go down twice.",
    solution:
      "We moved the catalog onto a structure that scales with collections instead of fighting them, rebuilt filtering to actually work with one thumb on a phone, and collapsed checkout into a single page. We also added cart-recovery emails so a distracted shopper wasn't a lost sale.",
    process: [
      { phase: "Discovery", detail: "Audited checkout analytics to find the exact screens shoppers abandoned." },
      { phase: "Research", detail: "Benchmarked mobile filtering patterns against top-performing fashion retailers." },
      { phase: "Design & Build", detail: "Built the catalog and one-page checkout in Next.js with MongoDB behind it." },
      { phase: "Testing", detail: "Load-tested against last year's peak sale traffic before going live." },
      { phase: "Launch", detail: "Phased rollout during a quieter week, then monitored the first live sale event closely." },
    ],
    before: [
      "4-step mobile checkout with high drop-off",
      "Manual re-tagging for every new collection",
      "Site downtime during peak sale traffic",
    ],
    after: [
      "Single-page mobile checkout",
      "Filtering that scales automatically with new collections",
      "99.9% uptime through the next seasonal sale",
    ],
    feedback: {
      quote:
        "Our last big sale used to mean crossed fingers. This time we watched the orders come in on our phones the whole weekend and the site didn't blink.",
      name: "S. Okafor",
      role: "Founder, Luna & Co. Boutique",
    },
  },
  {
    id: "buildright-contractors",
    name: "BuildRight Contractors",
    category: "Construction",
    industry: "Construction & Contracting",
    layout: "split",
    accent: "#c2410c",
    timeline: "6 weeks",
    problem:
      "There was no way to showcase completed projects or capture qualified estimate requests online, so leads went to competitors with better web presence.",
    features: [
      "Interactive project gallery with before-and-after sliders",
      "Instant quote-request form routed straight to the sales team",
      "Service-area map so homeowners know coverage at a glance",
    ],
    tech: ["React", "Django", "PostgreSQL", "Google Cloud"],
    results: [
      "4x more quote requests per month",
      "55% shorter average sales cycle",
      "Ranked #1 locally for 3 priority search terms",
    ],
    headlineResult: "4x more quote requests",
    liveUrl: "#",

    challenge:
      "BuildRight had a strong reputation built entirely on word of mouth, but their site was a single page with a phone number and a handful of low-resolution photos. Homeowners doing research before hiring a contractor had no way to see the quality of past work or understand which neighborhoods BuildRight actually served.",
    solution:
      "We built the site around proof: a real project gallery with before-and-after sliders so homeowners could see actual outcomes, a service-area map so people knew instantly if BuildRight covered them, and a quote form that skipped the phone tag entirely by routing straight to the estimating team.",
    process: [
      { phase: "Discovery", detail: "Reviewed past project photos and organized them into a presentable gallery structure." },
      { phase: "Wireframing", detail: "Mapped the homeowner's research journey from search to quote request." },
      { phase: "Design & Build", detail: "Built the gallery, map, and quote form in React with a Django backend." },
      { phase: "Client Review", detail: "Walked the estimating team through the new lead-routing workflow." },
      { phase: "Deployment", detail: "Launched alongside a local SEO cleanup targeting priority service areas." },
    ],
    before: [
      "Single page with a phone number and no project photos",
      "No visibility into which areas were served",
      "Leads relied entirely on phone calls during business hours",
    ],
    after: [
      "Full project gallery with before/after sliders",
      "Interactive service-area map",
      "Quote requests routed instantly to the estimating team",
    ],
    feedback: {
      quote:
        "People show up to the first estimate already knowing our work. That never happened before — it used to take a whole conversation just to earn that trust.",
      name: "D. Marsh",
      role: "Owner, BuildRight Contractors",
    },
  },
  {
    id: "wellspring-clinic",
    name: "Wellspring Family Clinic",
    category: "Healthcare",
    industry: "Healthcare & Wellness",
    layout: "content",
    accent: "#0d9488",
    timeline: "6 weeks",
    problem:
      "Patients struggled to find appointment information and didn't trust the practice enough online to book ahead of time.",
    features: [
      "Online appointment request with instant confirmation email",
      "Provider bios highlighting specialties and credentials",
      "Privacy-conscious contact handling built into every form",
    ],
    tech: ["React", "Flask", "MySQL", "Azure"],
    results: [
      "70% of new patients now book through the site",
      "45% fewer phone-only bookings, freeing up front-desk time",
      "Average review rating climbed to 4.9 stars",
    ],
    headlineResult: "70% of bookings now online",
    liveUrl: "#",

    challenge:
      "Wellspring's front desk was buried in phone calls just to answer basic questions — which providers took new patients, what insurance was accepted, where to park. The old site had none of it, and prospective patients had no way to request an appointment without calling during business hours.",
    solution:
      "We gave every provider a real profile with specialties and credentials, added an appointment request flow that confirms instantly by email, and made sure every form on the site handled patient information carefully by design, not as an afterthought.",
    process: [
      { phase: "Requirement Discussion", detail: "Sat with front-desk staff to log the questions patients called in about most." },
      { phase: "Research", detail: "Reviewed healthcare accessibility and privacy-conscious form standards." },
      { phase: "Design & Build", detail: "Built provider profiles and the appointment flow in React with a Flask backend." },
      { phase: "Testing", detail: "Tested the booking flow with actual front-desk staff before launch." },
      { phase: "Maintenance", detail: "Set up ongoing monitoring for form delivery and uptime." },
    ],
    before: [
      "Phone-only appointment requests",
      "No information on providers or specialties",
      "Front desk fielding routine questions all day",
    ],
    after: [
      "Online appointment requests with instant confirmation",
      "Full provider bios with specialties and credentials",
      "Front desk freed up for higher-value patient care",
    ],
    feedback: {
      quote:
        "Our staff finally has time to focus on patients instead of the phone. And new patients tell us the site is the reason they picked us over other clinics nearby.",
      name: "Dr. N. Fenwick",
      role: "Practice Director, Wellspring Family Clinic",
    },
  },
  {
    id: "brightpath-academy",
    name: "BrightPath Learning Academy",
    category: "Education",
    industry: "K-12 Education",
    layout: "content",
    accent: "#4338ca",
    timeline: "8 weeks",
    problem:
      "Their admissions process was entirely manual on paper forms, and prospective families were dropping off before ever touring the school.",
    features: [
      "Online admissions inquiry form with automatic staff routing",
      "Side-by-side program comparison pages for parents",
      "Events calendar synced with open-house scheduling",
    ],
    tech: ["Next.js", "Node.js", "Supabase", "AWS"],
    results: [
      "3x admissions inquiries in the first enrollment term",
      "50% reduction in administrative follow-up time",
      "Parent satisfaction score up 35% in post-enrollment surveys",
    ],
    headlineResult: "3x admissions inquiries",
    liveUrl: "#",

    challenge:
      "Prospective families had to request a paper packet by phone just to compare BrightPath's programs, and staff manually re-entered every inquiry into a spreadsheet. By the time a follow-up call happened, many parents had already toured a competing school.",
    solution:
      "We built an admissions inquiry form that routes straight to the right staff member automatically, laid out program comparisons side-by-side so parents could self-serve the basics, and synced open-house dates to a real calendar instead of a static PDF.",
    process: [
      { phase: "Requirement Discussion", detail: "Mapped the full admissions funnel from first inquiry to enrollment." },
      { phase: "Wireframing", detail: "Designed program comparison pages parents could scan in under a minute." },
      { phase: "Development", detail: "Built the site in Next.js with Supabase handling inquiry data and routing." },
      { phase: "Client Review", detail: "Walked the admissions team through the new automatic routing rules." },
      { phase: "Deployment", detail: "Launched ahead of the next enrollment cycle's open-house season." },
    ],
    before: [
      "Paper-only admissions packets requested by phone",
      "Manual spreadsheet entry for every inquiry",
      "Static open-house dates buried in a PDF",
    ],
    after: [
      "Online inquiry form with automatic staff routing",
      "Self-serve program comparison pages",
      "Live events calendar synced to open-house scheduling",
    ],
    feedback: {
      quote:
        "We used to lose families in the gap between their first phone call and our follow-up. That gap barely exists anymore.",
      name: "M. Delacroix",
      role: "Admissions Director, BrightPath Learning Academy",
    },
  },
  {
    id: "aiden-ross-photography",
    name: "Aiden Ross Photography",
    category: "Portfolio",
    industry: "Creative & Personal Brand",
    layout: "split",
    accent: "#18181b",
    timeline: "4 weeks",
    problem:
      "An Instagram-only presence made it hard to be taken seriously for higher-value shoots and full-day bookings.",
    features: [
      "Full-bleed gallery with lazy-loaded, high-resolution images",
      "Category-based portfolio filtering by shoot type",
      "Direct booking link connected to a live calendar",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    results: [
      "2.5x more booking inquiries within 60 days of launch",
      "Average project value up 30%",
      "Sub-1.5s load time despite large, high-resolution galleries",
    ],
    headlineResult: "2.5x booking inquiries",
    liveUrl: "#",

    challenge:
      "Aiden's work spoke for itself, but an algorithm-fed Instagram grid buried his best full-day shoots under whatever posted most recently. Potential clients booking weddings and brand campaigns wanted a real portfolio they could browse by category, not a scroll.",
    solution:
      "We built a full-bleed gallery that lets the photography lead, organized by shoot type so a bride and a brand manager both find what they came for immediately, with lazy loading so image-heavy pages still load fast, and a direct link into his real booking calendar.",
    process: [
      { phase: "Discovery", detail: "Sorted his full portfolio into categories based on actual booking demand." },
      { phase: "UI Design", detail: "Designed a full-bleed gallery template that keeps images the hero, not decoration." },
      { phase: "Development", detail: "Built the gallery in React with lazy-loaded, optimized image delivery." },
      { phase: "Testing", detail: "Benchmarked load times on high-resolution galleries against a 1.5s target." },
      { phase: "Deployment", detail: "Launched with a direct calendar booking link replacing DM-only inquiries." },
    ],
    before: [
      "Instagram-only presence with no way to browse by category",
      "Booking inquiries handled entirely through DMs",
      "Best full-day work buried under recent posts",
    ],
    after: [
      "Standalone portfolio site organized by shoot type",
      "Direct calendar booking link",
      "Sub-1.5s load time on high-resolution galleries",
    ],
    feedback: {
      quote:
        "Clients now show up already knowing which shoot they want. I spend way less time explaining my own work and way more time actually shooting it.",
      name: "A. Ross",
      role: "Photographer, Aiden Ross Photography",
    },
  },
  {
    id: "copper-leaf-kitchen",
    name: "Copper Leaf Kitchen",
    category: "Restaurant",
    industry: "Restaurant & Hospitality",
    layout: "split",
    accent: "#b91c1c",
    timeline: "5 weeks",
    problem:
      "An outdated PDF menu and no reservation option was costing them walk-ins and weekend bookings alike.",
    features: [
      "Live digital menu with dietary and allergen tags",
      "Built-in table reservation widget",
      "Google Maps, hours, and directions front and center",
    ],
    tech: ["React", "Flask", "MySQL", "Google Cloud"],
    results: [
      "80% drop in \"are you open\" phone calls",
      "65% of reservations now made directly online",
      "Weekend bookings up 25%",
    ],
    headlineResult: "65% of reservations online",
    liveUrl: "#",

    challenge:
      "Copper Leaf's menu lived in a PDF that was months out of date, hours weren't listed anywhere reliable, and the only way to book a table was calling during dinner service — which meant calls went unanswered during the busiest hours.",
    solution:
      "We built a live menu the kitchen can update directly, complete with dietary and allergen tags, added a real reservation widget so tables can be booked without tying up the phone line, and put hours, directions, and map front and center on the homepage.",
    process: [
      { phase: "Requirement Discussion", detail: "Confirmed which dietary tags and reservation rules mattered most to the kitchen." },
      { phase: "Wireframing", detail: "Designed the homepage around the three things guests search for most: menu, hours, and booking." },
      { phase: "Development", detail: "Built the menu and reservation system in React with a Flask backend." },
      { phase: "Testing", detail: "Ran the reservation flow through a live weekend service before full rollout." },
      { phase: "Launch", detail: "Trained staff to update the live menu directly without developer help." },
    ],
    before: [
      "Outdated PDF menu with no dietary information",
      "Reservations by phone only, often missed during service",
      "Hours and directions not reliably listed anywhere",
    ],
    after: [
      "Live, staff-editable menu with dietary and allergen tags",
      "Built-in online table reservations",
      "Hours, map, and directions front and center",
    ],
    feedback: {
      quote:
        "Friday nights used to mean someone standing by the phone instead of the pass. Now the tables just fill up on their own.",
      name: "J. Alvarez",
      role: "Owner, Copper Leaf Kitchen",
    },
  },
  {
    id: "harborview-realty",
    name: "Harborview Realty",
    category: "Real Estate",
    industry: "Real Estate",
    layout: "shop",
    accent: "#334155",
    timeline: "7 weeks",
    problem:
      "Listings were scattered across third-party portals, which diluted the agency's own brand and buried their best listings.",
    features: [
      "Searchable property listings with location and price filters",
      "Built-in mortgage calculator widget",
      "Individual agent profile pages with direct contact",
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "AWS"],
    results: [
      "90% of listings now viewed on the agency's own site first",
      "38% more buyer inquiries month over month",
      "Average listing page engagement up by 3 minutes",
    ],
    headlineResult: "38% more buyer inquiries",
    liveUrl: "#",

    challenge:
      "Harborview's listings performed well on third-party portals, but every one of those clicks went to a competitor's brand, not theirs. There was no central place for buyers to search listings directly with Harborview, and individual agents had no online presence of their own to point clients to.",
    solution:
      "We built a searchable listings hub with real location and price filtering, added a mortgage calculator so buyers could self-serve early questions, and gave every agent their own profile page so referrals had somewhere real to land.",
    process: [
      { phase: "Discovery", detail: "Audited how much listing traffic was being lost to third-party portals." },
      { phase: "Research", detail: "Benchmarked filtering and search patterns against leading real-estate platforms." },
      { phase: "Development", detail: "Built the listings hub in Next.js with a Django backend and PostgreSQL." },
      { phase: "Testing", detail: "Validated search and filter accuracy against the full live listings feed." },
      { phase: "Deployment", detail: "Migrated listings and rolled out individual agent pages ahead of a new campaign." },
    ],
    before: [
      "Listings scattered across third-party portals only",
      "No agency-branded search experience",
      "Agents with no individual online presence",
    ],
    after: [
      "Centralized, filterable listings hub on Harborview's own site",
      "Built-in mortgage calculator for early-stage buyers",
      "Individual agent profile pages driving direct contact",
    ],
    feedback: {
      quote:
        "For the first time, buyers find us before they find the portals. That changes who gets credit for the sale — and who the client actually remembers.",
      name: "T. Whitfield",
      role: "Broker, Harborview Realty",
    },
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
