import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function GetStartedButton() {
  return (
    <Button className="group relative overflow-hidden bg-white hover:bg-white/90 border-4 border-black text-black min-w-[320px] px-8" size="lg">
      <span className="mr-16 transition-opacity duration-500 group-hover:opacity-0">
        Book a free consultation
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-black group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" style={{ color: '#ff9a00' }} />
      </i>
    </Button>
  );
}
