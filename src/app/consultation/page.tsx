"use client";

import { DemoHeader } from "@/components/layout/DemoHeader";
import DemoFooter from "@/components/sections/demo-footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users } from "lucide-react";

export default function ConsultationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation form submitted:", { name, email, company, message });
  };

  return (
    <>
      <DemoHeader />
      <main className="min-h-screen bg-white pt-20 pb-16">
        <section className="relative overflow-hidden bg-bg-primary py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03] blur-3xl" />
          
          <div className="relative container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left side - Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="overline mb-4" style={{ color: '#ff9a00' }}>
                    [ BOOK A CONSULTATION ]
                  </p>
                  <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6">
                    Let's Build Your{" "}
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
                      Automation System
                    </span>
                  </h1>
                  <p className="text-lg text-black leading-relaxed">
                    Schedule a free 30-minute consultation with our team. We'll analyze your current workflows, identify automation opportunities, and show you exactly how we can save you time and money.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[#ff9a00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Free Strategy Session</h3>
                      <p className="text-black">
                        No sales pitch. Just a genuine conversation about your business challenges and how automation can help.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#ff9a00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Quick Turnaround</h3>
                      <p className="text-black">
                        We'll respond within 24 hours and schedule a call at your convenience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#ff9a00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Expert Guidance</h3>
                      <p className="text-black">
                        Talk directly with our automation specialists who have helped 200+ businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl border border-border shadow-xl">
                <h2 className="text-2xl font-semibold text-black mb-6">Get Started Today</h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-text-secondary">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-input border-border rounded-lg h-14 px-4 text-base placeholder:text-muted"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-text-secondary">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-input border-border rounded-lg h-14 px-4 text-base placeholder:text-muted"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-text-secondary">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-input border-border rounded-lg h-14 px-4 text-base placeholder:text-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-text-secondary">Tell us about your business *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What challenges are you facing? What processes take up most of your time?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-input border-border rounded-lg min-h-[128px] p-4 text-base placeholder:text-muted"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark transition-colors text-base font-medium rounded-lg px-8 h-auto w-full mt-4"
                  >
                    Book Free Consultation
                  </Button>

                  <p className="text-xs text-text-muted text-center">
                    By submitting, you agree to our Terms and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DemoFooter />
    </>
  );
}