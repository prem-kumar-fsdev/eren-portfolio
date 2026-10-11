import type { CSSProperties } from "react";

/** Generated stand-in for project screenshots: soft tile with abstract UI blocks. */
export function Art({ hue, variant = 0, tint }: { hue: number; variant?: number; tint: string }) {
  const bar = `hsl(${hue} 80% 55%)`;
  const soft = `hsl(${hue} 70% 92%)`;
  const s: CSSProperties = { background: tint };
  return (
    <svg viewBox="0 0 480 560" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", ...s }} aria-hidden="true">
      {variant % 3 === 0 && (
        <g>
          <rect x="60" y="70" width="360" height="420" rx="26" fill="#fff" />
          <rect x="90" y="104" width="140" height="16" rx="8" fill={bar} />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <rect x="90" y={150 + i * 62} width="300" height="46" rx="12" fill={soft} />
              <circle cx="116" cy={173 + i * 62} r="10" fill={bar} opacity={0.35 + i * 0.12} />
              <rect x="140" y={166 + i * 62} width={120 + ((i * 37) % 80)} height="12" rx="6" fill="#d4d4d8" />
            </g>
          ))}
        </g>
      )}
      {variant % 3 === 1 && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${52 + i * 130} 110)`}>
              <rect width="116" height="340" rx="20" fill="#fff" />
              <rect x="12" y="14" width="92" height="120" rx="12" fill={soft} />
              <rect x="12" y="148" width="64" height="10" rx="5" fill="#a1a1aa" />
              <rect x="12" y="170" width="92" height="8" rx="4" fill="#e4e4e7" />
              <rect x="12" y="276" width="92" height="40" rx="20" fill={bar} />
            </g>
          ))}
        </g>
      )}
      {variant % 3 === 2 && (
        <g>
          <rect x="70" y="90" width="340" height="170" rx="22" fill="#fff" />
          <rect x="70" y="284" width="160" height="176" rx="22" fill="#fff" />
          <rect x="250" y="284" width="160" height="176" rx="22" fill={bar} opacity="0.9" />
          <polyline points="94,230 150,190 200,208 260,150 320,176 386,118" fill="none" stroke={bar} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="330" cy="372" r="42" fill="#fff" opacity="0.85" />
        </g>
      )}
    </svg>
  );
}
