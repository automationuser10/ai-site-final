import Image from "next/image";

interface SolutionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  width: number;
  height: number;
}

const solutions: SolutionCardProps[] = [
  {
    title: "Automated Growth Systems",
    description: "We automate the manual work, from the repetitive tasks to 3-hour data headaches. Our systems connect your tools, sync your data, and handle the work so nothing slips through the cracks.",
    imageUrl: "https://asd0w2qbps.ufs.sh/f/0hghLTQNcPQlE2C3NW04pQLPhWZ7yIAHqnTUB8VeOwGuKSd3",
    alt: "Automated Growth Systems dashboard interface",
    width: 1024,
    height: 1024,
  },
  {
    title: "AI Chat & Voice Agents",
    description: "Your 24/7 team that never sleeps. Our AI agents talk, listen, and act that handling support, sales, and follow-ups while you stay focused on growth.",
    imageUrl: "https://r3uagkwp4j.ufs.sh/f/or0ADnQhXzfLMEN0nZk39yHsgR5InBGpaXfijuSZLCcUEWKo",
    alt: "AI Chat and Voice Agent interface",
    width: 1536,
    height: 1024,
  },
  {
    title: "MVPS & Micro-SaaS",
    description: "Got an AI idea? We turn it into a production-level product - fast. From internal systems to customer-facing apps, all built to scale on your infrastructure.",
    imageUrl: "https://qpqnkc3pmm.ufs.sh/f/3k3s2qitHUPCGOPSiSB38xPMWcvSmTr4UwINjVfJ7BboZOkL",
    alt: "MVP and Micro-SaaS product interface",
    width: 1024,
    height: 1024,
  },
];

const SolutionsGrid = () => {
  return (
    <section id="solutions" className="bg-bg-primary py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20">
          <div className="flex flex-col gap-4">
            <p className="overline" style={{ color: '#ff7a3c' }}>
              [ OUR SOLUTIONS ]
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
              Building Automation-Powered
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
                Systems
              </span>
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-lg text-black">
              Custom AI automation that eliminates repetitve parts of operations and frees your team to close deals without additional headcount.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`bg-bg-card border border-border rounded-2xl p-8 flex flex-col group transition-all duration-300 ease-in-out hover:border-primary-light hover:shadow-[0_0_50px_rgba(255,154,0,0.3),0_0_80px_rgba(255,154,0,0.15)] ${
                index === 2 ? 'md:col-span-2 md:mx-[20%]' : ''
              }`}
            >
              <div className={`mb-6 rounded-xl ${index === 2 ? 'mx-auto max-w-sm' : ''}`}>
                <Image
                  src={solution.imageUrl}
                  alt={solution.alt}
                  width={solution.width}
                  height={solution.height}
                  unoptimized
                  className="w-full h-auto object-contain rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className={`${index === 2 ? 'text-center mx-auto max-w-xl' : ''}`}>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {solution.title}
                </h3>
                <p className="text-black">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;