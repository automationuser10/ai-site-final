"use client";
import React from 'react';
import Image from 'next/image';

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/XCZCKBnaMobs9YBDuliWPmNQY-3.png?", alt: 'Half Price Kitchens', width: 140, height: 40 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/uaHFbUCKpmeM5jWhwaExPAtk0Y-4.png?", alt: 'AgencyHub', width: 140, height: 28 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/CdZ9V5QDjHGqS5awSnZIqyQ7ZH4-5.png?", alt: 'InstallPros', width: 140, height: 26 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/XqJ8uln7tm0u9vSOdcUM9KDIZ4-6.png?", alt: 'Approved Roofers', width: 180, height: 24 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/M7KMFi65un4P6adQ76b1dZO5k-7.png?", alt: 'Clientech', width: 120, height: 32 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/PvevnUg6drQPdrNLoKBITdUXqRc-8.png?", alt: 'Blockhaus', width: 153, height: 67 },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

const LogoTicker = () => {
  const animationStyles = `
    @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-25%); }
    }
    .animate-scroll {
      animation: scroll 30s linear infinite;
    }
  `;

  return (
    <section className="bg-background py-8 dark">
      <style>{animationStyles}</style>
      <div
        className="w-full max-w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 128px, black calc(100% - 128px), transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 128px, black calc(100% - 128px), transparent)',
        }}
      >
        <div className="flex w-max animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-10 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto filter grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;