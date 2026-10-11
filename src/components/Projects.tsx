"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Art } from "./Art";
import { ChevronRight, ClockIcon } from "./Icons";
import { projects, type Project } from "@/lib/site";
import styles from "./Projects.module.css";

function Card({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  // drifting strip: moves horizontally as the card scrolls
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const hasShots = p.images.length > 0;
  const tiles = hasShots ? Array.from({ length: Math.max(4, p.images.length * 2) }, (_, i) => p.images[i % p.images.length]) : Array.from({ length: 6 }, (_, i) => i);

  return (
    <section ref={ref} className={styles.stack} id={index === 0 ? "work" : undefined}>
      <article className={styles.card}>
        <motion.span className={styles.progress} style={{ scaleX: bar }} />
        <header className={styles.head}>
          <div className={styles.copy}>
            <div className={styles.meta}>
              <span className={styles.badge} style={{ background: p.badge }} />
              <p>{p.title}{p.year && !p.title.includes(p.year) ? ` — ${p.year}` : ""}</p>
            </div>
            <h5 className={styles.headline}>{p.headline}</h5>
            <p className={styles.metrics}>{p.metrics.join("  •  ")}</p>
          </div>
          {p.href ? (
            <Link href={p.href} className={styles.cta}>
              View case study <ChevronRight />
            </Link>
          ) : (
            <span className={`${styles.cta} ${styles.soon}`}>Coming soon <ClockIcon /></span>
          )}
        </header>

        <div className={styles.strip}>
          <motion.div className={styles.track} style={{ x }}>
            {tiles.map((t, i) =>
              typeof t === "string" ? (
                <div key={i} className={`${styles.tile} ${styles.shot}`} style={{ background: p.tint }}>
                  <div className={styles.browser}>
                    <div className={styles.bar}><i /><i /><i /></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t} alt={`${p.title} screenshot`} draggable={false} />
                  </div>
                </div>
              ) : (
                <div key={i} className={styles.tile} style={{ width: [440, 360, 620][i % 3], background: p.tint }}>
                  <Art hue={p.hue} tint={p.tint} variant={t + index} />
                </div>
              ),
            )}
          </motion.div>
        </div>
      </article>
    </section>
  );
}

export function Projects() {
  return (
    <div className={styles.wrap}>
      {projects.map((p, i) => <Card key={p.slug} p={p} index={i} />)}
    </div>
  );
}
