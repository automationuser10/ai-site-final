import Image from "next/image";

interface TechCardData {
  number: string;
  logo: string;
  title: string;
  alt: string;
  transformClass: string;
}

const techCards: TechCardData[] = [
  {
    number: "[04]",
    title: "PYTHON",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/RTZYnC9sP7zj8eW0b5taC0ljk-23.png?",
    alt: "Python Logo",
    transformClass: "[transform:translateX(180px)_translateZ(-60px)_rotateY(-15deg)_rotateZ(-3deg)]",
  },
  {
    number: "[03]",
    title: "LANGCHAIN",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/QTDwH2lZxjpLxApTT0I51RgasxA-24.png?",
    alt: "LangChain Logo",
    transformClass: "[transform:translateX(120px)_translateZ(-40px)_rotateY(-15deg)_rotateZ(-2deg)]",
  },
  {
    number: "[02]",
    title: "GOOGLE CLOUD",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/Tk2FbCtQngREZBT4BKdo6xVus-25.png?",
    alt: "Google Cloud Logo",
    transformClass: "[transform:translateX(60px)_translateZ(-20px)_rotateY(-15deg)_rotateZ(-1deg)]",
  },
  {
    number: "[01]",
    title: "OPEN AI",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/UY5cvt3UpKPtTw0LR4YP5yNdSo-26.png?",
    alt: "OpenAI Logo",
    transformClass: "[transform:translateX(0px)_translateZ(0px)_rotateY(-15deg)]",
  },
];

const TechCard = ({
  number,
  logo,
  title,
  alt,
  transformClass,
}: TechCardData) => (
  <div
    className={`absolute left-0 top-0 flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-[rgba(41,98,178,0.4)] to-[rgba(22,42,74,0.6)] p-8 backdrop-blur-sm ${transformClass}`}
    style={{ backfaceVisibility: "hidden" }}
  >
    <p className="font-mono text-sm font-medium text-white/80">
      {number}
    </p>
    <div className="my-6 flex flex-grow items-center justify-center opacity-40">
      <Image
        src={logo}
        alt={alt}
        width={140}
        height={140}
        className="object-contain"
        unoptimized
      />
    </div>
    <h4 className="text-center font-sans text-base font-semibold uppercase tracking-widest text-white">
      {title}
    </h4>
  </div>
);

const TechStackSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0f1e] to-[#0d1829] px-5 py-24 md:px-20 md:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-24">
          {/* Left: Heading */}
          <div className="flex-shrink-0 lg:w-1/3">
            <h2 className="text-left text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Our{" "}
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
                Tech
              </span>
              <br />
              Stack
            </h2>
          </div>

          {/* Right: 3D Card Stack */}
          <div className="flex w-full items-center justify-center lg:w-2/3 lg:justify-end [perspective:1500px]">
            <div className="relative h-[400px] w-[340px] md:h-[480px] md:w-[400px] [transform-style:preserve-3d]">
              {techCards.map((card) => (
                <TechCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;