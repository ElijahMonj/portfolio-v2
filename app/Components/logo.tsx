/**
 * "EM" monogram. The mark is stroked with the cyan -> violet brand gradient.
 * Accepts standard SVG props (className for sizing).
 */
const Logo = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    role="img"
    aria-label="Elijah Monjardin logo"
    {...props}
  >
    <defs>
      <linearGradient id="em-logo-gradient" x1="8" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#22D3EE" />
        <stop offset="0.55" stopColor="#3B82F6" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#em-logo-gradient)"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* E */}
      <path d="M27 16H15v32h12" />
      <path d="M15 32h9" />
      {/* M */}
      <path d="M35 48V18l7 13 7-13v30" />
    </g>
  </svg>
);

export default Logo;
