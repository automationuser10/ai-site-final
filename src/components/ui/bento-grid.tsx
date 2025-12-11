import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  imageUrl,
}: {
  name: string;
  className?: string;
  Icon: any;
  description: string;
  imageUrl?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col overflow-hidden rounded-xl h-full",
      "bg-white border border-neutral-200 [box-shadow:0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]",
      "transform-gpu dark:bg-black dark:border-neutral-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    {imageUrl && (
      <div className="w-full flex items-center justify-center bg-gray-50">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-auto object-contain"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    )}
    <div className="z-10 flex transform-gpu flex-col gap-3 p-8 flex-grow">
      <h3 className="text-2xl font-semibold text-black dark:text-neutral-300">
        {name}
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
