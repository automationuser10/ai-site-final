"use client";

import { Footer } from "@/components/ui/footer-section";
import { DemoHeader } from "@/components/layout/DemoHeader";
import * as React from "react";

export default function ConsultationPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadError, setLoadError] = React.useState(false);
  const initAttempted = React.useRef(false);

  React.useEffect(() => {
    // Prevent double initialization in development mode
    if (initAttempted.current) return;
    initAttempted.current = true;

    const initializeCal = () => {
      try {
        if (typeof window === 'undefined') return;

        // Clear any existing Cal instance
        if ((window as any).Cal) {
          delete (window as any).Cal;
        }

        // Initialize Cal.com
        (function (C: any, A: string, L: string) {
          let p = function (a: any, ar: any) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              const script = d.createElement("script");
              script.src = A;
              script.async = true;
              script.onload = () => {
                setIsLoading(false);
              };
              script.onerror = () => {
                setLoadError(true);
                setIsLoading(false);
              };
              d.head.appendChild(script);
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api: any = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        // Wait a bit for script to load before initializing
        setTimeout(() => {
          if ((window as any).Cal) {
            (window as any).Cal("init", "strategy-call", { origin: "https://app.cal.com" });

            (window as any).Cal.ns["strategy-call"]("inline", {
              elementOrSelector: "#my-cal-inline-strategy-call",
              config: { "layout": "month_view" },
              calLink: "githmi-official-dyxxn3/strategy-call",
            });

            (window as any).Cal.ns["strategy-call"]("ui", { 
              "hideEventTypeDetails": false, 
              "layout": "month_view" 
            });
          }
        }, 500);
      } catch (error) {
        console.error("Error initializing Cal.com:", error);
        setLoadError(true);
        setIsLoading(false);
      }
    };

    initializeCal();

    // Cleanup function
    return () => {
      // Remove Cal script if it exists
      const calScripts = document.querySelectorAll('script[src*="cal.com"]');
      calScripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      <DemoHeader />
      <main className="min-h-screen bg-white pt-20 pb-16">
        <section className="relative overflow-hidden bg-bg-primary py-8">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03] blur-3xl" />
          
          <div className="relative container">
            {isLoading && !loadError && (
              <div className="flex items-center justify-center" style={{ height: '800px' }}>
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff9a00]"></div>
                  <p className="mt-4 text-black">Loading calendar...</p>
                </div>
              </div>
            )}
            
            {loadError && (
              <div className="flex items-center justify-center" style={{ height: '800px' }}>
                <div className="text-center">
                  <p className="text-red-600 mb-4">Failed to load calendar. Please refresh page.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="px-6 py-2 bg-[#ff9a00] text-white rounded-lg hover:bg-[#ff7a3c] transition-colors"
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
            )}
            
            <div 
              style={{ 
                width: '100%', 
                height: '800px', 
                overflow: 'scroll',
                display: isLoading || loadError ? 'none' : 'block'
              }} 
              id="my-cal-inline-strategy-call"
            ></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}