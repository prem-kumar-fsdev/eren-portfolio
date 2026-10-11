import { Footer } from "@/components/Footer";
import { Art } from "@/components/Art";

export default function Playground() {
  return (
    <main>
      <section style={{ background: "var(--white)", position: "relative", zIndex: 1, minHeight: "100vh", padding: "140px 64px 80px" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 64, letterSpacing: "-0.03em" }}>
          Play<em>ground</em>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12, marginTop: 40 }}>
          {[210, 160, 20, 280, 340, 45].map((h, i) => (
            <div key={i} style={{ aspectRatio: "4/5", borderRadius: 24, overflow: "hidden" }}>
              <Art hue={h} tint={`hsl(${h} 80% 94%)`} variant={i} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
