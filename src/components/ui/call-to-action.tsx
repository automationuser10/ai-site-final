import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-card rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge className="text-white border-0" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Ready to squeeze out the extra 40% revenue that the company deserves?
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-black max-w-xl">
            See how automation can get you that extra 5X growth.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link href="/consultation">
              <Button className="gap-4 text-white border-0" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
                Book a free consultation <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };