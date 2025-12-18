import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const caseStudiesData = [
  {
    number: "01",
    title: "AI Lead Qualification for Marketing Agencies",
    description: "AI-driven lead scoring <span class='text-white font-medium'>boosted conversions by 45%</span> for a Marketing Agency, reducing wasted time and doubling recurring revenue.",
    category: "Digital Marketing",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/Ey33Tredxvh06TK3bENWARJISM-16.png?",
    href: "#",
  },
  {
    number: "02",
    title: "Kitchen Installer Lead Capture Automation",
    description: "Our automation system recovered <span class='text-white font-medium'>over 30% of missed leads</span> and <span class='text-white font-medium'>increased booked calls by 50%</span> for a kitchen supplier.",
    category: "Home Services",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/3GEw4tY4YwZ9Mh1xp2Fuq3gq0Y-17.png?",
    href: "#",
  },
  {
    number: "03",
    title: "AI-Powered Customer Support for E-Commerce",
    description: "BLOCKHAUS a fast-growing e-commerce apparel brand <span class='text-white font-medium'>increased conversions by 60%</span> and <span class='text-white font-medium'>3x their response speed</span> boosting online sales.",
    category: "E-Commerce",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/vhIbSYZYamJZMlwkUsy5vMei0-18.png?",
    href: "#",
  },
];

type CaseStudyCardProps = typeof caseStudiesData[0];

const CaseStudyCard = ({ number, title, description, category, imageUrl, href }: CaseStudyCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-px rounded-2xl bg-gradient-to-b from-[rgba(255,255,255,0.07)] to-transparent group transition-all duration-300 hover:from-primary/30"
    >
      <div className="relative bg-bg-card rounded-[15px] p-8 h-full flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 flex-grow lg:w-[calc(60%-1rem)]">
            <p className="font-mono text-sm text-black mb-6">[{number}]</p>
            <h3 className="text-[28px] font-semibold text-black mb-4 leading-tight">{title}</h3>
            <p
              className="text-black text-base leading-relaxed mb-8 flex-grow"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className="mt-auto">
              <span className="inline-block border border-white/10 text-black text-xs rounded-full px-4 py-1.5">
                {category}
              </span>
            </div>
          </div>
          <div className="relative w-full lg:w-[calc(40%+1rem)] self-center lg:self-auto">
             <Image
                src={imageUrl}
                alt={`Case study for ${title}`}
                width={800}
                height={600}
                className="w-full h-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
             />
          </div>
        </div>
      </div>
    </a>
  );
};

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-bg-primary text-text-primary py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-black">
            See Our Work in <span className="text-primary-light">Action</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {caseStudiesData.map((study) => (
            <CaseStudyCard key={study.number} {...study} />
          ))}
        </div>

      </div>
    </section>
  );
}