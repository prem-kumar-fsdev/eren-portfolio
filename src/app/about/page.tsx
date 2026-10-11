import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <main>
      <section style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "120px 64px" }}>
        <div style={{ maxWidth: 640 }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 64, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            About <em>me</em>
          </h1>
          <p style={{ marginTop: 24, color: "var(--zinc-600)" }}>Placeholder page — add your story here.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
