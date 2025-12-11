"use client";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    url: "#",
    src: "/Untitled design (5) copy copy.png",
    alt: "ADYA AI",
    title: "ADYA AI"
  },
  menuItems = [
    {
      title: "Solutions",
      links: [
        { text: "Features", url: "/#features" },
        { text: "Results", url: "/#testimonials" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2025 ADYA AI. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  const handleSolutionsClick = () => {
    const element = document.querySelector('#solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-32 bg-bg-secondary">
      <div className="container">
        <footer>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-16">
            <div className="col-span-1 mb-8 md:col-span-2 lg:mb-0">
              <div className="flex items-center gap-3 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <img
                    src="/Adobe Express - file.png"
                    alt={logo.alt}
                    title={logo.title}
                    className="h-16 w-auto"
                  />
                </a>
                <p className="text-xl font-semibold text-black">{logo.title}</p>
              </div>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                {section.title === "Solutions" ? (
                  <h3
                    className="mb-4 font-bold text-black cursor-pointer hover:text-[#ff9a00] transition-colors"
                    onClick={handleSolutionsClick}
                  >
                    {section.title}
                  </h3>
                ) : (
                  <h3 className="mb-4 font-bold text-black">{section.title}</h3>
                )}
                <ul className="space-y-4 text-black">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-black md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer2;