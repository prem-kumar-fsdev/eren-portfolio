"use client";

import { motion } from "motion/react";
import { WordReveal } from "./Reveal";
import { ChipPile } from "./ChipPile";
import { ArrowDown } from "./Icons";
import { site } from "@/lib/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <motion.div
          className={styles.hello}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Hello</span>
          <span className={styles.avatar} aria-hidden="true" />
          <span>I&apos;m {site.first}</span>
        </motion.div>

        <h1 className={styles.title}>
          <WordReveal
            delay={0.35}
            lines={[
              ["I", "design", "products"],
              ["that", <em key="e">feel</em>, "simple,", "even"],
              ["when", "they’re", "not."],
            ]}
          />
        </h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Currently designing <strong>complex B2B workflows</strong>
          <br />
          and a multi-brand <strong>design system</strong>
        </motion.p>
      </div>

      <div className={styles.label}>
        <span>PROJECTS ( 2023 - 26 )</span>
        <ArrowDown />
      </div>

      <ChipPile />
    </section>
  );
}
