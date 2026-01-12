import AIAgentsHero from "@/components/AIAgentsHero";
import AIAgentFeatures from "@/components/AIAgentFeatures";
import WaitlistForm from "@/components/WaitlistForm";

export default function AIAgentsPage() {
  return (
    <div>
      <AIAgentsHero />
      <AIAgentFeatures />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}