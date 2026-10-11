"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckIcon, FolderIcon, MailIcon, SmileIcon } from "./Icons";
import { site } from "@/lib/site";
import styles from "./Nav.module.css";

const links = [
  { href: "/#work", label: "Work", Icon: FolderIcon },
  { href: "/about", label: "About", Icon: SmileIcon },
];

export function Nav() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = useCallback(async () => {
    try { await navigator.clipboard.writeText(site.email); } catch { /* clipboard blocked */ }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <motion.header
      className={styles.nav}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <Link href="/" className={styles.logo} aria-label="Home">
        <span className={styles.mark}>{site.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
      </Link>
      <nav className={styles.pill} aria-label="Primary">
        {links.map(({ href, label, Icon }) => (
          <Link key={label} href={href} className={styles.link}>
            <Icon />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <button className={styles.mail} onClick={copy} aria-label={`Copy ${site.email}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "ok" : "mail"}
            initial={{ scale: 0.4, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className={styles.mailIcon}
          >
            {copied ? <CheckIcon /> : <MailIcon />}
          </motion.span>
        </AnimatePresence>
        <AnimatePresence>
          {copied && (
            <motion.span
              className={styles.toast}
              initial={{ opacity: 0, y: -6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6 }}
            >
              Email copied
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.header>
  );
}
