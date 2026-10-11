"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import styles from "./ChipPile.module.css";

type Chip = { label?: string; color: string; w: number; h?: number; angle: number; round?: boolean; icon: string };

// Pill tags that fall into the bottom of the hero and can be dragged around.
const CHIPS: Chip[] = [
  { label: "IMPROVING UX", color: "var(--yellow)", w: 210, angle: -20, icon: "☺" },
  { label: "THINKING SYSTEMS", color: "var(--pink)", w: 252, angle: -14, icon: "◍" },
  { color: "var(--lilac)", w: 58, round: true, angle: 0, icon: "☕" },
  { label: "TESTING", color: "var(--lilac)", w: 164, angle: 0, icon: "✎" },
  { label: "REFRAMING PROBLEMS", color: "var(--green)", w: 292, angle: 36, icon: "#" },
  { color: "var(--orange)", w: 58, round: true, angle: 0, icon: "☎" },
  { color: "var(--yellow)", w: 58, round: true, angle: 0, icon: "✦" },
  { label: "MAKING IT POP", color: "var(--orange)", w: 228, angle: -10, icon: "⚑" },
  { color: "var(--sky)", w: 58, round: true, angle: 0, icon: "◔" },
  { label: "MOVING RECTANGLES", color: "var(--sky)", w: 262, angle: -18, icon: "✥" },
  { label: "ROUNDING CORNERS", color: "var(--lime)", w: 240, angle: -32, icon: "▢" },
  { color: "var(--zinc-100)", w: 58, round: true, angle: 0, icon: "✧" },
  { label: "PROTOTYPING", color: "var(--zinc-100)", w: 176, angle: 0, icon: "⇄" },
];

export function ChipPile() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Body } = Matter;

    const engine = Engine.create({ gravity: { x: 0, y: 1.2, scale: 0.001 } });
    const runner = Runner.create();
    const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-chip]"));
    let width = el.clientWidth;
    let height = el.clientHeight;
    const wallBodies: Matter.Body[] = [];

    const buildWalls = () => {
      Composite.remove(engine.world, wallBodies);
      wallBodies.length = 0;
      const t = 200;
      wallBodies.push(
        Bodies.rectangle(width / 2, height + t / 2, width * 2, t, { isStatic: true }),
        Bodies.rectangle(-t / 2, height / 2, t, height * 4, { isStatic: true }),
        Bodies.rectangle(width + t / 2, height / 2, t, height * 4, { isStatic: true }),
      );
      Composite.add(engine.world, wallBodies);
    };
    buildWalls();

    const scale = width < 810 ? 0.62 : 1;
    const bodies = nodes.map((n, i) => {
      const c = CHIPS[i];
      const w = c.w * scale;
      const h = (c.h ?? 58) * scale;
      const x = width * (0.06 + 0.88 * ((i * 0.618) % 1));
      const y = -80 - i * 90;
      const b = Bodies.rectangle(x, reduce ? height - h : y, w, h, {
        chamfer: { radius: h / 2 },
        restitution: 0.35,
        friction: 0.4,
        frictionAir: 0.01,
        angle: reduce ? 0 : (c.angle * Math.PI) / 180 + (Math.random() - 0.5) * 0.4,
      });
      n.style.width = `${w}px`;
      n.style.height = `${h}px`;
      n.style.fontSize = `${14 * scale + 1}px`;
      return b;
    });
    Composite.add(engine.world, bodies);

    const mouse = Mouse.create(el);
    // let the page scroll with the wheel while still allowing chip dragging
    // @ts-expect-error matter-js attaches wheel listeners that we do not want
    el.removeEventListener("wheel", mouse.mousewheel);
    // @ts-expect-error same as above
    el.removeEventListener("DOMMouseScroll", mouse.mousewheel);
    const drag = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, render: { visible: false } } });
    Composite.add(engine.world, drag);

    let raf = 0;
    let started = false;
    const tick = () => {
      bodies.forEach((b, i) => {
        const n = nodes[i];
        n.style.transform = `translate3d(${b.position.x - parseFloat(n.style.width) / 2}px, ${b.position.y - parseFloat(n.style.height) / 2}px, 0) rotate(${b.angle}rad)`;
      });
      raf = requestAnimationFrame(tick);
    };

    // start dropping once visible
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        if (!reduce) Runner.run(runner, engine);
      }
    });
    io.observe(el);
    tick();

    const ro = new ResizeObserver(() => {
      width = el.clientWidth;
      height = el.clientHeight;
      buildWalls();
      bodies.forEach((b) => { if (b.position.x > width) Body.setPosition(b, { x: width - 60, y: b.position.y }); });
    });
    ro.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div ref={host} className={styles.pile} aria-hidden="true">
      {CHIPS.map((c, i) => (
        <div key={i} data-chip className={styles.chip} style={{ background: c.color, justifyContent: c.round ? "center" : "space-between" }}>
          {c.label && <span>{c.label}</span>}
          <span className={styles.icon}>{c.icon}</span>
        </div>
      ))}
    </div>
  );
}
