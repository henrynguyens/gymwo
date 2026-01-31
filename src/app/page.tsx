import Hero from "@/components/Hero";
// import Programs from "@/components/Programs";
import Benefits from "@/components/Benefits"; // New
import Analysis from "@/components/Analysis"; // New
import Goals from "@/components/Goals"; // New
import Nutrition from "@/components/Nutrition"; // New
import ExpertSupport from "@/components/ExpertSupport"; // New
import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Analysis />
      <Goals />
      <Nutrition />
      <ExpertSupport />
      <Features />
      {/* <Programs /> */}
    </main>

  );
}
