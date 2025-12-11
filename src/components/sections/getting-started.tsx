"use client";

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive into your workflows, figure out what's slowing you down, and map the exact systems that'll free your time and tighten your operations',
  },
  {
    number: '02',
    title: 'Development',
    description: 'We design, build, test, and maintain your systems so you stop babysitting tasks that should've been automated years ago. You only review and we tweak as needed.',
  },
  {
    number: '03',
    title: 'Go Live & Scale',
    description: 'Systems go live. We monitor what's running smoothly, where bottlenecks still hide, and expand the systems that are saving you the most time and money',
  },
];

const GettingStartedSection = () => {
  return (
    <section className="relative w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-black mb-4">Getting Started</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            Start in 3 Simple Steps
          </h2>
          <p className="text-base text-black max-w-2xl mx-auto">
            Get your AI automation up and running in days, not months. No technical expertise required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl relative grid grid-rows-[1fr_auto] shadow-[0_1rem_2rem_-1rem_black] p-4 gap-4 backdrop-blur-[5px] h-full w-full bg-white border-[3px] border-white"
            >
              <div className="flex flex-col h-full p-4">
                <div className="text-6xl font-bold text-[#ff9a00] mb-6 opacity-20">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-black leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/consultation" className="inline-flex items-center justify-center px-8 py-3 bg-[#ff9a00] text-white font-medium rounded-lg hover:bg-[#ff7a3c] transition-colors">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;