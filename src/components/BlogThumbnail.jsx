// Simple, original abstract cover art for blog post cards — a tinted
// gradient block with a few decorative text-line shapes. Avoids depending
// on stock photography while still giving each post a distinct visual.

export function BlogThumbnail({ accent = "#0000cc", category }) {
  return (
    <svg
      viewBox="0 0 400 220"
      role="img"
      aria-label={`Cover art for a ${category} article`}
      className="blog-thumb-svg"
    >
      <defs>
        <linearGradient id={`grad-${accent.replace("#", "")}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill={`url(#grad-${accent.replace("#", "")})`} />
      <circle cx="350" cy="30" r="70" fill="#ffffff" opacity="0.08" />
      <circle cx="40" cy="200" r="90" fill="#000000" opacity="0.06" />

      <rect x="40" y="80" width="140" height="12" rx="6" fill="#ffffff" opacity="0.9" />
      <rect x="40" y="104" width="220" height="10" rx="5" fill="#ffffff" opacity="0.6" />
      <rect x="40" y="124" width="180" height="10" rx="5" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}
