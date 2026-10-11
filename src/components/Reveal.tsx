"use client";

import { motion } from "motion/react";

/** Splits text into words that rise out of a mask, staggered. */
export function WordReveal({ lines, delay = 0 }: { lines: React.ReactNode[][]; delay?: number }) {
  let i = 0;
  return (
    <>
      {lines.map((line, li) => (
        <span key={li} style={{ display: "block" }}>
          {line.map((w, wi) => {
            const n = i++;
            return (
              <span key={wi} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.12em", marginBottom: "-0.12em", paddingRight: "0.06em", marginRight: "-0.06em" }}>
                <motion.span
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                  initial={{ y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + n * 0.06 }}
                >
                  {w}{" "}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}
