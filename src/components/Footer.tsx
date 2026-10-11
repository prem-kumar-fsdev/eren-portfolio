"use client";

import { useEffect, useRef, useState } from "react";
import { FileIcon, LinkedInIcon, MailIcon } from "./Icons";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

function Eyes() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const pupils = Array.from(root.querySelectorAll<HTMLElement>("[data-pupil]"));
    const onMove = (e: PointerEvent) => {
      pupils.forEach((p) => {
        const eye = p.parentElement!.getBoundingClientRect();
        const dx = e.clientX - (eye.left + eye.width / 2);
        const dy = e.clientY - (eye.top + eye.height / 2);
        const d = Math.hypot(dx, dy) || 1;
        const r = Math.min(d, 1) * 7;
        p.style.transform = `translate(${(dx / d) * r}px, ${(dy / d) * r * 1.4}px)`;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div ref={ref} className={styles.eyes} aria-hidden="true">
      <span className={styles.eye}><i data-pupil /></span>
      <span className={styles.eye}><i data-pupil /></span>
    </div>
  );
}

export function Footer() {
  const [first, ...rest] = site.name.split(" ");
  const inner = useRef<HTMLElement>(null);
  const [height, setHeight] = useState<number>();

  // The footer is fixed to the viewport bottom and revealed as the page above scrolls away;
  // this wrapper reserves the matching space in the document flow.
  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={styles.reveal} style={{ height }}>
    <footer ref={inner} className={styles.footer}>
      <div className={styles.inner}>
        <Eyes />
        <div className={styles.row}>
          <p className={styles.connect}>Let&apos;s connect.<br />I&apos;m always down for a chat.</p>
          <div className={styles.socials}>
            <a href={`mailto:${site.email}`} aria-label="Email"><MailIcon /></a>
            <a href={site.cvUrl} target="_blank" rel="noopener" aria-label="CV"><FileIcon /></a>
            <a href={site.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
        <h2 className={styles.name} aria-label={site.name}>
          <span>{first}</span>{rest.length > 0 && <span>{rest.join(" ")}</span>}
        </h2>
        <div className={styles.legal}>
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Built with love</p>
        </div>
      </div>
    </footer>
    </div>
  );
}
