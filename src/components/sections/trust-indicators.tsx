import Image from 'next/image';

const trustFeatures = [
  {
    overline: '[ PROVEN RESULTS ]',
    title: '200+ businesses automated',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/kXZT4t6H0beC9WgLvlT9k91Jw-19.png?',
  },
  {
    overline: '[ SEAMLESS SALES INTEGRATION ]',
    title: 'Integrates with your sales stack',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/rcYOAEXuYVXqJUev4mUTenXtFfg-20.png?',
  },
  {
    overline: '[ TAILORED FOR YOU ]',
    title: 'Custom voice & tone',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/M7FVrPZwcqMYUUe1gtwKA5c-21.png?',
  },
  {
    overline: '[ ONGOING SUPPORT ]',
    title: 'Detailed tutorials and support',
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/HHasXFreNfwnPAqOseaSnPUEkI-22.png?',
  },
];

const logos = [
  { src: 'https://framerusercontent.com/images/XCZCKBnaMobs9YBDuliWPmNQY.png?width=500&height=500', alt: 'Half Price Kitchens logo' },
  { src: 'https://framerusercontent.com/images/uaHFbUCKpmeM5jWhwaExPAtk0Y.png?width=500&height=500', alt: 'AgencyHub logo' },
  { src: 'https://framerusercontent.com/images/CdZ9V5QDjHGqS5awSnZIqyQ7ZH4.png?width=500&height=500', alt: 'InstallPros logo' },
  { src: 'https://framerusercontent.com/images/XqJ8uln7tm0u9vSOdcUM9KDIZ4.png?width=500&height=500', alt: 'ApprovedRoofers logo' },
  { src: 'https://framerusercontent.com/images/M7KMFi65un4P6adQ76b1dZO5k.png?width=500&height=500', alt: 'Naya logo' },
  { src: 'https://framerusercontent.com/images/PvevnUg6drQPdrNLoKBITdUXqRc.png?width=431&height=188', alt: 'Partner logo' },
];

const TrustIndicators = () => {
  return (
    <section className="bg-bg-primary py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl" style={{ fontSize: '40px', lineHeight: '1.2', letterSpacing: '-0.01em' }}>
            Why Top Brands Trust Us
          </h2>
        </div>

        <div className="mt-16 mx-auto grid max-w-none grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((feature) => (
            <div key={feature.title} className="bg-bg-card rounded-2xl p-8 flex flex-col items-center border border-white/10">
              <p className="overline" style={{ color: '#ff7a3c' }}>{feature.overline}</p>
              <div className="mt-6">
                <Image
                  src={feature.iconSrc}
                  alt=""
                  width={140}
                  height={140}
                  className="mx-auto"
                  style={{
                    filter: 'hue-rotate(180deg) saturate(1.8) brightness(1.15) contrast(1.05) drop-shadow(0 4px 12px rgba(255, 154, 0, 0.4)) drop-shadow(0 0 20px rgba(255, 154, 0, 0.3))'
                  }}
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-tight text-text-primary" style={{ fontSize: '24px' }}>
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-24 text-center text-text-secondary">
          Trusted by leading companies in marketing, home services and e-commerce
        </p>
        
        <div
          className="mt-10 w-full inline-flex flex-nowrap overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 128px, black calc(100% - 128px), transparent)' }}
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
            {logos.map((logo, index) => (
              <li key={index}>
                <Image src={logo.src} alt={logo.alt} width={158} height={48} className="max-h-12 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
            {logos.map((logo, index) => (
              <li key={index}>
                <Image src={logo.src} alt={logo.alt} width={158} height={48} className="max-h-12 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;