import React from "react";
import { RainbowButton } from "./rainbow-button";

export function CTA() {
  return (
    <section className="bg-bg-primary py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Let's discuss how our AI automation solutions can help you save time, reduce costs, and scale your operations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/consultation">
              <RainbowButton>
                Book a Free Consultation
              </RainbowButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}