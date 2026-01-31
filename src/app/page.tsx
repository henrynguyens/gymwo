import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import Benefits from "@/components/Benefits"; // New
import Analysis from "@/components/Analysis"; // New
import Goals from "@/components/Goals"; // New
import Nutrition from "@/components/Nutrition"; // New
import ExpertSupport from "@/components/ExpertSupport"; // New

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Analysis />
      <Goals />
      <Nutrition />
      <ExpertSupport />
      {/* <Features /> Kept for reference but likely replacing */}
      {/* <Programs /> */}
      <Footer />
    </main>
  );
}
