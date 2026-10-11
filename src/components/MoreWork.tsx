"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ImageIcon } from "./Icons";
import styles from "./MoreWork.module.css";

export function MoreWork() {
  return (
    <section className={styles.section}>
      <Link href="/playground" className={styles.link} aria-label="More Work">
        <motion.h3 className={styles.word} variants={{ rest: { x: 0 }, hover: { x: -14 } }}>More</motion.h3>
        <motion.div className={styles.folder} initial="rest" whileHover="hover" animate="rest">
          <div className={styles.back} />
          <motion.div className={`${styles.paper} ${styles.p1}`} variants={{ rest: { y: 0, rotate: -3 }, hover: { y: -34, rotate: -9 } }} />
          <motion.div className={`${styles.paper} ${styles.p2}`} variants={{ rest: { y: 0, rotate: 2 }, hover: { y: -44, rotate: 7 } }} />
          <motion.div className={styles.front} variants={{ rest: { rotateX: 0 }, hover: { rotateX: -22 } }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
            <ImageIcon width={30} height={30} />
          </motion.div>
        </motion.div>
        <motion.h3 className={styles.word} variants={{ rest: { x: 0 }, hover: { x: 14 } }}>Work</motion.h3>
      </Link>
    </section>
  );
}
