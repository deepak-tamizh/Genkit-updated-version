// Original vector "browser window" mockups used as placeholder screenshots
// for portfolio cards. Swap these out for real project screenshots whenever
// they're ready — each ProjectCard just needs an <img> instead of this
// component passed in the same spot.

function Chrome() {
  return (
    <>
      <rect x="0" y="0" width="400" height="230" rx="10" fill="#ffffff" stroke="#e5e7eb" />
      <rect x="0" y="0" width="400" height="24" rx="10" fill="#f3f4f6" />
      <rect x="0" y="14" width="400" height="10" fill="#f3f4f6" />
      <circle cx="16" cy="12" r="3.2" fill="#e5e7eb" />
      <circle cx="27" cy="12" r="3.2" fill="#e5e7eb" />
      <circle cx="38" cy="12" r="3.2" fill="#e5e7eb" />
      <rect x="55" y="7" width="120" height="10" rx="5" fill="#e9ecef" />
    </>
  );
}

function ContentLayout({ accent }) {
  return (
    <>
      {/* nav */}
      <circle cx="24" cy="42" r="5" fill={accent} />
      <rect x="36" y="39" width="34" height="6" rx="3" fill="#d1d5db" />
      <rect x="300" y="35" width="80" height="14" rx="4" fill={accent} opacity="0.15" />

      {/* hero */}
      <rect x="20" y="66" width="150" height="10" rx="3" fill="#374151" opacity="0.8" />
      <rect x="20" y="82" width="120" height="8" rx="3" fill="#9ca3af" />
      <rect x="20" y="96" width="150" height="8" rx="3" fill="#d1d5db" />
      <rect x="20" y="112" width="70" height="18" rx="5" fill={accent} />

      <rect x="200" y="60" width="180" height="80" rx="8" fill={accent} opacity="0.16" />
      <rect x="200" y="60" width="180" height="80" rx="8" fill="none" stroke={accent} strokeOpacity="0.3" />

      {/* cards row */}
      {[20, 148, 276].map((x, i) => (
        <g key={i}>
          <rect x={x} y="156" width="108" height="58" rx="6" fill="#f9fafb" stroke="#eef0f2" />
          <circle cx={x + 16} cy="172" r="6" fill={accent} opacity="0.7" />
          <rect x={x + 30} y="168" width="60" height="6" rx="3" fill="#d1d5db" />
          <rect x={x + 12} y="186" width="84" height="5" rx="2.5" fill="#e5e7eb" />
          <rect x={x + 12} y="196" width="60" height="5" rx="2.5" fill="#e5e7eb" />
        </g>
      ))}
    </>
  );
}

function ShopLayout({ accent }) {
  return (
    <>
      <circle cx="24" cy="42" r="5" fill={accent} />
      <rect x="36" y="39" width="34" height="6" rx="3" fill="#d1d5db" />
      <rect x="320" y="36" width="60" height="14" rx="7" fill={accent} opacity="0.15" />

      {[
        [20, 62],
        [206, 62],
        [20, 148],
        [206, 148],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="174" height="72" rx="7" fill="#f9fafb" stroke="#eef0f2" />
          <rect x={x + 10} y={y + 10} width="70" height="52" rx="5" fill={accent} opacity={0.18 + i * 0.05} />
          <rect x={x + 90} y={y + 16} width="70" height="7" rx="3" fill="#9ca3af" />
          <rect x={x + 90} y={y + 30} width="50" height="6" rx="3" fill="#d1d5db" />
          <rect x={x + 90} y={y + 46} width="36" height="12" rx="6" fill={accent} />
        </g>
      ))}
    </>
  );
}

function SplitLayout({ accent }) {
  return (
    <>
      <circle cx="24" cy="42" r="5" fill={accent} />
      <rect x="36" y="39" width="34" height="6" rx="3" fill="#d1d5db" />

      <rect x="20" y="60" width="150" height="154" rx="8" fill={accent} opacity="0.18" />
      <rect x="20" y="60" width="150" height="154" rx="8" fill="none" stroke={accent} strokeOpacity="0.3" />

      <rect x="188" y="66" width="130" height="10" rx="3" fill="#374151" opacity="0.8" />
      <rect x="188" y="84" width="180" height="7" rx="3" fill="#d1d5db" />
      <rect x="188" y="98" width="150" height="7" rx="3" fill="#e5e7eb" />

      {[122, 152, 182].map((y, i) => (
        <g key={i}>
          <circle cx="196" cy={y + 4} r="5" fill={accent} />
          <rect x="210" y={y} width="158" height="8" rx="3" fill="#d1d5db" />
        </g>
      ))}

      <rect x="188" y="196" width="90" height="18" rx="5" fill={accent} />
    </>
  );
}

const LAYOUTS = {
  content: ContentLayout,
  shop: ShopLayout,
  split: SplitLayout,
};

export function ProjectThumbnail({ layout = "content", accent = "#0000cc", title }) {
  const Layout = LAYOUTS[layout] || ContentLayout;
  return (
    <svg
      viewBox="0 0 400 230"
      role="img"
      aria-label={`Preview mockup of the ${title} website`}
      className="project-thumb-svg"
    >
      <Chrome />
      <Layout accent={accent} />
    </svg>
  );
}
