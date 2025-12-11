import React from "react";
import Link from "next/link";
import { RainbowButton } from "./rainbow-button";

export function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-6 text-lg text-black">
            Let's discuss how our AI automation solutions can help you save time, reduce costs, and scale faster.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/consultation">
              <RainbowButton>Book a Free Consultation</RainbowButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}