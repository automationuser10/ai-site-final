"use client";

import { GetStartedButton } from "@/components/ui/get-started-button";
import { Glow } from "@/components/ui/glow";

const DemoSection = () => {
  return (
    <section id="demo" className="group bg-white py-16 sm:py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="overline mb-4" style={{ color: '#ff7a3c' }}>
            [ JOIN NOW ]
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6">
            Don't know what you want?{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
              We'll break your current system down for you.
            </span>
          </h2>
        </div>

        <div className="flex justify-center">
          <GetStartedButton />
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[-2rem] opacity-70 transition-all duration-500 ease-in-out">
        <Glow variant="bottom" className="animate-appear-zoom delay-300" />
      </div>
    </section>
  );
};

export default DemoSection;
