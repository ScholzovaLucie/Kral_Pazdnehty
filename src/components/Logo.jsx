export default function Logo({ size = 48, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KRÁL logo"
    >
      {/* Symbol paznehtu / kroku */}
      <path
        d="M30 20
             C20 30, 20 55, 30 65
             C40 75, 60 75, 70 65
             C80 55, 80 30, 70 20
             Z"
        stroke={color}
        strokeWidth="6"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Středová dělicí linie */}
      <line
        x1="50"
        y1="25"
        x2="50"
        y2="65"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
