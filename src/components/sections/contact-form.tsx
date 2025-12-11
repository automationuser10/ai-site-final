"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-bg-primary py-32">
      <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/6bNJec7GNi7B6OCxqnTKRxeLU.png?"
            alt=""
            width={1868}
            height={1838}
            className="absolute -top-[400px] -left-[400px] opacity-25"
            aria-hidden="true"
          />
      </div>
      
      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <p className="overline">
              [ CONTACT US ]
            </p>
            <h2>
              Ready to <span className="text-primary">Automate</span> Your Business?
            </h2>
            <p className="text-lg text-text-secondary">
              Let AI handle the hard work while you focus on growth. Book a free AI strategy session today.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-md p-10 rounded-2xl border border-border">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-input border-border rounded-lg h-14 px-4 text-base placeholder:text-muted"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mail@site.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input border-border rounded-lg h-14 px-4 text-base placeholder:text-muted"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-input border-border rounded-lg min-h-[128px] p-4 text-base placeholder:text-muted"
                  required
                />
              </div>
              
              <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-6 pt-2">
                <p className="text-xs text-text-muted text-center lg:text-left">
                  By submitting, you agree to our{' '}
                  <Link href="/legal/terms-and-conditions" className="underline hover:text-text-secondary transition-colors">
                    Terms
                  </Link>
                  {' and '}
                  <Link href="/legal/privacy-policy" className="underline hover:text-text-secondary transition-colors">
                    Privacy Policy
                  </Link>.
                </p>
                <Button type="submit" size="lg" className="bg-primary-dark hover:bg-primary transition-colors text-base font-medium rounded-lg px-8 h-auto w-full lg:w-auto">
                    Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;