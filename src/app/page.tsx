import Hero from "@/components/Hero";
import AspirationProof from "@/components/AspirationProof";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AspirationProof />
      <Features />
      <SocialProof />
      <Pricing />
      <FinalCTA />
    </main>
  );
}