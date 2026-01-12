import AboutHero from "@/components/AboutHero";
import WhoWeAre from "@/components/WhoWeAre";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
    </div>
  );
}