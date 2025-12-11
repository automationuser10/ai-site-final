"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    company: "Everest Tutoring",
    logo: "/WhatsApp Image 2025-06-11 at 19.35.19.jpeg",
    text: "Veer really helped us grow by 10 times, during the 2 week trial, he got us double the google reviews we had. Not to mention after a month of using his systems we went from 43 google reviews to 200+ for our main branch without having to worry about it. Plus through the google reviews itself we got 20% more students joining. Definitely a game changer which led us to invest in a full system.",
    results: ["7X increase in Google Reviews", "+100hrs saved per month", "Guranteed Parent Trust"]
  },
  {
    company: "NU Skin",
    logo: "/nu-skin-logo-FA8DEB0FB8-seeklogo.com_.png",
    text: "Veer at Adya AI got us setup on AI UGC ads, to be honest our teams did not know that AI could produce that realistic and production level UGC ads for our products. Definitely want to push out Veer's services to B2C companies on setting up automated UGC ads that actually convert really well at a fraction of the cost.",
    results: ["5x ads conversion", "1mil+ views on short form", "3X product sales"]
  },
  {
    company: "Visie",
    logo: "/images.png",
    text: "Adya AI reached out to us on helping us to create custom dashboards for analytics for our platform, we decided to give a shot with them for a trial. To say they did not disappoint, they had very clear communication and made great demos for us so that our teams could test it. Would highly recommend Adya AI's services.",
    results: ["60% more insights on stats", "40% cost reduction", "Full automation"]
  },
  {
    company: "Viking Security Solutions",
    logo: "/474996659_584010471087497_3571947324621174835_n.jpg",
    text: "Professional and great at communication, created an amazing chatbot for customer service on my website as well as got us tons of leads. Great service.",
    results: ["70% customer support handeled", "2X leads", "Instant responses"]
  },
  {
    company: "Nutrition Revitalised",
    logo: "/logo_transparent-01.webp",
    text: "Adya AI has amazing voice AIs, they really impressed me with a demo they sent the first time for our counselling services, the AI caller is literally a human. We were considering to implement AI into our biz for a while, and Veer's timing to reach out was perfect.",
    results: ["40% satisfaction boost", "Instant responses", "AI Receptionist"]
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-bg-primary pt-16 sm:pt-20 pb-24 sm:pb-32 scroll-mt-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="overline mb-4" style={{ color: '#ff7a3c' }}>[ TESTIMONIALS ]</p>
          <h2 className="text-4xl font-semibold tracking-tighter text-black lg:text-5xl">
            What Our Clients <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>Say</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto mb-8">
          <div className="relative h-[650px] md:h-[550px]" style={{ perspective: '1000px' }} ref={containerRef}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 md:p-12 overflow-hidden shadow-lg">
                  <motion.div
                    className="absolute top-8 right-8 opacity-10"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote className="w-16 h-16 text-gray-800" />
                  </motion.div>

                  <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0 text-center md:text-left">
                      <motion.div
                        className="relative mb-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-orange-200 relative bg-white flex items-center justify-center p-4">
                          <img
                            src={testimonials[currentIndex].logo}
                            alt={testimonials[currentIndex].company}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <motion.div
                          className="absolute inset-0 border-2 border-orange-400/30 rounded-full"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-black">
                        {testimonials[currentIndex].company}
                      </h3>
                    </div>

                    <div className="flex-1">
                      <motion.blockquote
                        className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-light italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        "{testimonials[currentIndex].text}"
                      </motion.blockquote>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {testimonials[currentIndex].results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="bg-orange-50 rounded-lg p-3 border border-orange-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                            whileHover={{ backgroundColor: "rgb(255 247 237)" }}
                          >
                            <span className="text-sm text-gray-700 font-medium">
                              {result}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;