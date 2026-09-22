// Sample blog content — one post per requested topic category. Written as
// original editorial content (not sourced from elsewhere), so it's safe to
// publish as-is or use as a starting template for real posts later.

export const BLOG_CATEGORIES = [
  "Web Development",
  "SEO",
  "UI/UX",
  "Digital Marketing",
  "Business Tips",
  "Website Performance",
  "Security",
  "AI in Web Development",
];

export const BLOG_POSTS = [
  {
    slug: "signs-your-website-needs-a-rebuild",
    title: "5 Signs Your Website Needs a Rebuild, Not Just a Redesign",
    category: "Web Development",
    accent: "#0000cc",
    author: "Priya Nandakumar",
    date: "2026-05-12",
    readTime: "5 min read",
    excerpt:
      "A fresh coat of paint won't fix a site with structural problems. Here's how to tell which one you actually have.",
    sections: [
      {
        heading: "A redesign changes how it looks. A rebuild changes how it works.",
        paragraphs: [
          "It's tempting to assume every website problem is a design problem — new colors, new fonts, a trendier layout. Sometimes that's true. But if your site is slow, hard to update, or breaks on half the phones that visit it, no amount of visual polish will fix the underlying issue.",
        ],
      },
      {
        heading: "1. Every content update needs a developer",
        paragraphs: [
          "If adding a blog post or changing a price means emailing your developer and waiting a week, the problem isn't the design — it's the lack of a proper content system underneath it.",
        ],
      },
      {
        heading: "2. It wasn't built to be responsive",
        paragraphs: [
          "Sites built more than a few years ago were often 'made mobile-friendly' after the fact with patchwork fixes. That usually shows up as broken layouts, tiny tap targets, or horizontal scrolling on phones — no redesign fixes that without touching the code underneath.",
        ],
      },
      {
        heading: "3. Load times are consistently over 4 seconds",
        paragraphs: [
          "Bloated legacy code, unoptimized images, and outdated hosting all compound over time. If your load time is already high, adding new design elements on top will only make it worse.",
        ],
      },
      {
        heading: "4. It can't do what your business needs now",
        paragraphs: [
          "A site built for a five-page brochure site can't gracefully grow into a booking system, a store, or a multi-location business. That's an architecture limitation, not a visual one.",
        ],
      },
      {
        heading: "5. Your developer has stopped returning your calls",
        paragraphs: [
          "If the original site was built on a platform, plugin, or custom framework nobody currently maintains, you're one server update away from the whole thing breaking with nobody able to fix it.",
        ],
      },
      {
        heading: "The honest test",
        paragraphs: [
          "If your issues are purely visual — dated fonts, cluttered layout, inconsistent branding — a redesign on the existing foundation can work well. If any of the five signs above sound familiar, it's worth having an honest conversation about a rebuild before spending money on paint.",
        ],
      },
    ],
  },
  {
    slug: "on-page-seo-basics-small-business",
    title: "On-Page SEO Basics Every Small Business Website Needs",
    category: "SEO",
    accent: "#0d9488",
    author: "Arjun Mehta",
    date: "2026-04-28",
    readTime: "6 min read",
    excerpt:
      "You don't need an agency retainer to get the fundamentals right. Start with these five things.",
    sections: [
      {
        heading: "SEO doesn't start with keywords — it starts with structure",
        paragraphs: [
          "Before worrying about keyword density or backlinks, most small business sites benefit more from getting the basics right: clear titles, sensible headings, and pages that actually answer what someone searched for.",
        ],
      },
      {
        heading: "1. One clear H1 per page",
        paragraphs: [
          "Every page should have exactly one main heading that describes what the page is about, in language your customer would actually use — not internal jargon.",
        ],
      },
      {
        heading: "2. Unique title tags and meta descriptions",
        paragraphs: [
          "If every page on your site has the same title tag, search engines (and searchers) can't tell them apart. Each page needs its own short, honest description of what's on it.",
        ],
      },
      {
        heading: "3. Fast load times",
        paragraphs: [
          "Page speed is a ranking factor, but more importantly, it's a visitor-retention factor. A site that loads in under 2-3 seconds keeps more of the traffic it earns.",
        ],
      },
      {
        heading: "4. Local signals, if you're a local business",
        paragraphs: [
          "Your city or service area mentioned naturally in page content, a consistent business name/address/phone number, and a claimed Google Business Profile do more for local visibility than most paid tactics.",
        ],
      },
      {
        heading: "5. Alt text on real content images",
        paragraphs: [
          "Descriptive alt text helps search engines understand your images and helps visitors using screen readers understand your site — it's one of the few SEO tasks that's also a straightforward accessibility win.",
        ],
      },
      {
        heading: "Where to actually start",
        paragraphs: [
          "If you can only do one thing this month, audit your five most important pages for unique titles and a clear H1. It's unglamorous, but it's the foundation everything else builds on.",
        ],
      },
    ],
  },
  {
    slug: "first-impressions-in-three-seconds",
    title: "Why First Impressions Are Made in the First 3 Seconds",
    category: "UI/UX",
    accent: "#7c3aed",
    author: "Sana Ibrahim",
    date: "2026-04-15",
    readTime: "4 min read",
    excerpt:
      "Visitors decide whether to trust your business before they've read a single word. Here's what they're actually reacting to.",
    sections: [
      {
        heading: "Trust is a feeling before it's a decision",
        paragraphs: [
          "Research on first impressions consistently shows people form an opinion about a website within the first few seconds — long before they've read your value proposition or scanned your services.",
        ],
      },
      {
        heading: "Visual clarity beats visual complexity",
        paragraphs: [
          "A clean layout with obvious hierarchy reads as competent. A crowded one, even with great content underneath, reads as chaotic — and chaotic doesn't inspire trust.",
        ],
      },
      {
        heading: "Consistency signals credibility",
        paragraphs: [
          "Mismatched fonts, inconsistent spacing, or buttons that all look slightly different quietly tell a visitor that nobody's paying close attention — which makes them wonder what else isn't being paid attention to.",
        ],
      },
      {
        heading: "The fold still matters, just not literally",
        paragraphs: [
          "Nobody thinks in terms of a literal 'fold' anymore, but the principle holds: what's visible without scrolling should make it obvious what you do and why someone should care.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Good UI/UX isn't about trends — it's about removing every small thing that makes a visitor pause and wonder if they're in the right place. Every reduction in friction is a small increase in trust.",
        ],
      },
    ],
  },
  {
    slug: "website-and-marketing-working-together",
    title: "How Your Website and Marketing Should Actually Work Together",
    category: "Digital Marketing",
    accent: "#b91c1c",
    author: "Priya Nandakumar",
    date: "2026-04-02",
    readTime: "5 min read",
    excerpt:
      "Running ads to a website that isn't ready for them is the fastest way to waste a marketing budget.",
    sections: [
      {
        heading: "Traffic isn't the goal — conversion is",
        paragraphs: [
          "It's easy to treat 'more visitors' as success. But if your website can't convert that attention into an inquiry, a sale, or a booking, the marketing spend that brought them there was wasted.",
        ],
      },
      {
        heading: "Match the landing page to the ad",
        paragraphs: [
          "If your ad promises a specific offer or service, the page it lands on should be about that exact thing — not your generic homepage. Mismatched expectations are one of the biggest silent conversion killers.",
        ],
      },
      {
        heading: "Make the next step obvious",
        paragraphs: [
          "Every page a marketing campaign points to should have one clear next action — book, call, request a quote — not three competing options that dilute the decision.",
        ],
      },
      {
        heading: "Track what actually happens after the click",
        paragraphs: [
          "Ad platforms report clicks. Your website's analytics should report what those clicks actually did — because that's the number that tells you whether the campaign is working.",
        ],
      },
      {
        heading: "The short version",
        paragraphs: [
          "Marketing gets people to your door. Your website decides whether they walk in. It's worth treating both halves of that equation with equal seriousness.",
        ],
      },
    ],
  },
  {
    slug: "how-to-brief-a-web-development-agency",
    title: "How to Brief a Web Development Agency (So You Get What You Actually Want)",
    category: "Business Tips",
    accent: "#4338ca",
    author: "Arjun Mehta",
    date: "2026-03-20",
    readTime: "6 min read",
    excerpt:
      "The quality of a website project is decided in the first conversation, before a single design is made.",
    sections: [
      {
        heading: "A vague brief gets a generic result",
        paragraphs: [
          "\"Make it modern and clean\" is the most common brief agencies hear, and it's the least useful one — because it could describe almost anything. The more specific you can be, the closer the first draft lands to what you actually want.",
        ],
      },
      {
        heading: "Bring examples, not just adjectives",
        paragraphs: [
          "Two or three websites you genuinely like — even outside your industry — communicate more than a page of descriptive words. Point out what specifically you like about each one.",
        ],
      },
      {
        heading: "Know your must-haves versus nice-to-haves",
        paragraphs: [
          "Separating 'the site cannot launch without this' from 'it would be nice if' helps an agency prioritize scope and budget correctly instead of guessing which features actually matter.",
        ],
      },
      {
        heading: "Share the business context, not just the page list",
        paragraphs: [
          "Telling an agency who your customers are and what you want them to do is more useful than a list of pages you think you need — a good agency can often suggest a better structure once they understand the goal.",
        ],
      },
      {
        heading: "Set a realistic timeline early",
        paragraphs: [
          "If there's a hard deadline — an event, a launch, a season — say so at the start. Timelines shape scope, and it's much easier to plan around a deadline than to discover it halfway through.",
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "A good brief isn't about having all the answers — it's about giving your agency enough real context to ask the right questions.",
        ],
      },
    ],
  },
  {
    slug: "slow-website-costing-you-more",
    title: "Why a Slow Website Is Costing You More Than You Think",
    category: "Website Performance",
    accent: "#c2410c",
    author: "Sana Ibrahim",
    date: "2026-03-08",
    readTime: "5 min read",
    excerpt:
      "A few extra seconds of load time doesn't just annoy visitors — it quietly erodes revenue you never see.",
    sections: [
      {
        heading: "The cost is invisible because it's a non-event",
        paragraphs: [
          "Nobody emails you to say 'your site was too slow so I left.' They just leave, silently, and show up in your analytics as a bounce — which is exactly why performance problems go unnoticed for so long.",
        ],
      },
      {
        heading: "Every second delays or loses a decision",
        paragraphs: [
          "Studies on page speed consistently show conversion rates drop as load time increases past the first couple of seconds. On mobile, where connections are less predictable, the effect is even more pronounced.",
        ],
      },
      {
        heading: "It compounds with your ad spend",
        paragraphs: [
          "If you're paying for clicks and a slow site is losing a meaningful share of them before the page even finishes loading, you're effectively paying full price for partial traffic.",
        ],
      },
      {
        heading: "Common, fixable causes",
        paragraphs: [
          "Unoptimized images, too many render-blocking scripts, and cheap or oversold hosting account for the majority of slow-loading business websites — all fixable without a full rebuild in most cases.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Run your homepage through a free page-speed testing tool. If your score or load time is in the red, that's not a minor technical detail — it's a revenue conversation.",
        ],
      },
    ],
  },
  {
    slug: "website-security-basics-business-owners",
    title: "Website Security Basics Every Business Owner Should Know",
    category: "Security",
    accent: "#111827",
    author: "Arjun Mehta",
    date: "2026-02-22",
    readTime: "6 min read",
    excerpt:
      "You don't need to be a security expert to avoid the mistakes that cause most small business breaches.",
    sections: [
      {
        heading: "Most breaches aren't sophisticated — they're preventable",
        paragraphs: [
          "The majority of small business website compromises come from outdated software, weak credentials, or misconfigured basics — not from advanced, targeted attacks.",
        ],
      },
      {
        heading: "Keep everything updated, always",
        paragraphs: [
          "Outdated plugins, themes, and frameworks are the single most common entry point for automated attacks that scan the web looking for known vulnerabilities. Updates aren't optional maintenance — they're active defense.",
        ],
      },
      {
        heading: "HTTPS is non-negotiable",
        paragraphs: [
          "An SSL certificate isn't just a padlock icon — it encrypts data between your visitor and your server. Browsers now actively warn visitors away from sites that don't have one.",
        ],
      },
      {
        heading: "Limit who has access, and how",
        paragraphs: [
          "Every admin account is a potential entry point. Use strong, unique passwords, enable two-factor authentication where possible, and remove access for anyone who no longer needs it.",
        ],
      },
      {
        heading: "Back up before you need to",
        paragraphs: [
          "A recent, tested backup is the difference between a bad afternoon and a business crisis if something does go wrong. Backups should be automatic, regular, and stored somewhere separate from the live site.",
        ],
      },
      {
        heading: "The practical minimum",
        paragraphs: [
          "If you do nothing else: keep software updated, use HTTPS, enforce strong access controls, and keep working backups. That combination alone prevents the overwhelming majority of real-world incidents.",
        ],
      },
    ],
  },
  {
    slug: "ai-changing-web-development",
    title: "How AI Is Actually Changing Web Development (And What Hasn't Changed)",
    category: "AI in Web Development",
    accent: "#18181b",
    author: "Sana Ibrahim",
    date: "2026-01-30",
    readTime: "7 min read",
    excerpt:
      "AI tools have genuinely changed how sites get built. They haven't changed what makes a website actually work for the people using it.",
    sections: [
      {
        heading: "What's genuinely different now",
        paragraphs: [
          "AI-assisted coding tools have measurably sped up routine development work — boilerplate, repetitive components, first-draft content — freeing up more time for the harder problems: structure, strategy, and genuinely understanding a client's business.",
        ],
      },
      {
        heading: "Faster first drafts, same amount of judgment needed",
        paragraphs: [
          "Generating a first pass of a layout or a block of code is faster than ever. Knowing whether that first pass is actually right for this business, this audience, and this goal still requires the same human judgment it always did.",
        ],
      },
      {
        heading: "AI features are becoming a real client request",
        paragraphs: [
          "Chat-based support, personalized recommendations, and content tools are increasingly common asks — and increasingly, they're feasible to add well, rather than as a gimmick bolted on for its own sake.",
        ],
      },
      {
        heading: "What hasn't changed at all",
        paragraphs: [
          "The fundamentals of a good website — clear structure, fast performance, genuine usability, accurate content — matter exactly as much as they did before. AI can help build faster; it can't decide what's actually right for your business.",
        ],
      },
      {
        heading: "The practical takeaway",
        paragraphs: [
          "Treat AI as a tool that speeds up the how, not a replacement for figuring out the what and why. The agencies and teams getting real value from it are using it to move faster on fundamentals, not to skip them.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
