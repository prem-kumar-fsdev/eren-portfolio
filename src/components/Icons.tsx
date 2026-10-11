import type { SVGProps } from "react";

const base = (p: SVGProps<SVGSVGElement>) => ({
  width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, ...p,
});

export const FolderIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
);
export const ImageIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="1.6" /><path d="m21 15-4.5-4.5L6 21" /></svg>
);
export const SmileIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M8.5 14a4 4 0 0 0 7 0M9 9.5h.01M15 9.5h.01" /></svg>
);
export const FileIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
);
export const MailIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>
);
export const LinkedInIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M6 10v8M6 6.5v.01M10.5 18v-8M10.5 13.5a3.5 3.5 0 0 1 7 0V18" /></svg>
);
export const ChevronRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base({ width: 14, height: 14, strokeWidth: 2.2, ...p })}><path d="m9 6 6 6-6 6" /></svg>
);
export const ArrowDown = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base({ width: 14, height: 14, ...p })}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
);
export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base({ width: 14, height: 14, ...p })}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
