import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { MoreWork } from "@/components/MoreWork";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <MoreWork />
      <Footer />
    </main>
  );
}
