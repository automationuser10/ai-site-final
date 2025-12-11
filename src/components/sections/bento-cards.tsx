import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Zap, Target, TrendingUp, MessageSquare } from "lucide-react";

const features = [
  {
    Icon: Zap,
    name: "Live in weeks, not months",
    description: "Systems setup & live in less than 2 weeks. No endless waiting.",
    imageUrl: "https://r3uagkwp4j.ufs.sh/f/or0ADnQhXzfLHGOTyvQzGewgIlShK7ZoJtRWBcbAnq3NCTry",
  },
  {
    Icon: Target,
    name: "Fast ROI, Measurable Wins",
    description: "See time saved and work completed live from day one - not some vague 'transformation'.",
    imageUrl: "https://asd0w2qbps.ufs.sh/f/0hghLTQNcPQlEtIA4c04pQLPhWZ7yIAHqnTUB8VeOwGuKSd3",
  },
  {
    Icon: MessageSquare,
    name: "No dev team required",
    description: "We scope, build and support your tools, all without needing engineers on your side.",
    imageUrl: "https://hifio5z61s.ufs.sh/f/UmL4PiAnirXaHk56UDdk9sUwrcGRmOKWD2PZbx7g15zFMSiA",
  },
  {
    Icon: TrendingUp,
    name: "No need to switch systems",
    description: "Everything connects to what you already use - ERPs, spreadsheets, databases.",
    imageUrl: "https://hifio5z61s.ufs.sh/f/UmL4PiAnirXaqerzaoNyLGrbzkwUxE9KRfSP3AZq627imHas",
  },
];

const BentoCardsSection = () => {
  return (
    <section id="features" className="bg-white py-16 sm:py-20 scroll-mt-20">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="overline mb-4" style={{ color: '#ff7a3c' }}>
            [ FEATURES ]
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-4">
            Everything You Need to{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
             Get Results
            </span>
          </h2>
          <p className="text-lg text-black">
            Powerful features to cut the busywork, speed up workflows, and actually get adopted by your team.
          </p>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default BentoCardsSection;
