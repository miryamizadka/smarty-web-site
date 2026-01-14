import Hero from "@/components/Hero";
import Launchpad from "@/components/Launchpad";
import Tracks from "@/components/Tracks";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-main">
      <Hero />
      <Tracks /> 
      <Launchpad />
    </main>
  );
}