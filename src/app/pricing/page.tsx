"use client";

import { Footer } from "@/components/ui/footer-section";
import { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/2ko6KwEaoxHHwtzHFaJ5GZHLqY-27.png?',
    price: '$97',
    description: 'Perfect for\nSmall businesses',
    ctaText: 'Choose Basic',
    ctaLink: '/consultation',
    features: [
      'AI Automation System',
      'Unlimited Real-Time Booking',
      'Inbuilt Calendar Integration',
      'Up to 500 contacts',
      'AI-Powered Lead Qualification',
      'Unlimited Transcripts',
      'AI-Powered Campaign Manager',
      'Auto Email Reminders',
      'Basic Support',
      'And Many More..',
    ],
    callRate: 'Starter Plan',
    isFeatured: false,
  },
  {
    name: 'Growth',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/jnDiSIShI9TKKdYxDfA0bH9Eys-28.png?',
    price: '$497',
    description: 'Perfect for\nGrowing teams',
    ctaText: 'Choose Growth',
    ctaLink: '/consultation',
    features: [
      'Everything in Basic',
      'Up to 10,000 contacts',
      'Unlimited Recordings',
      'Advanced Lead Enrichment',
      'Auto Lead Qualification',
      'Priority Support',
      'Custom Integrations',
      'And Many More..',
    ],
    callRate: 'Most Popular',
    isFeatured: true,
  },
  {
    name: 'Bespoke',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ee5a232e-7f0a-4118-9e63-39eb9e61efa5-nayaai-io/assets/images/o9irDUJ2zWeMcJONzY3RjeNUPTg-29.png?',
    price: 'Custom Pricing',
    description: 'Perfect for\nLarge businesses',
    ctaText: 'Contact Us',
    ctaLink: '/consultation',
    features: [
      'Everything in Growth',
      'Up to 50,000 contacts',
      'Unlimited Recordings',
      'Unlimited AI Campaigns',
      'Fully Whitelabelled',
      '24/7 Priority Support',
      'Dedicated Account Manager',
      'And Many More..',
    ],
    callRate: 'Enterprise Plan',
    isFeatured: false,
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <>
      <main className="min-h-screen bg-white pt-20 pb-16">
        <section className="bg-bg-primary py-24 sm:py-32">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Pricing
              </h2>
            </div>

            <div className="mt-10 flex justify-center items-center gap-4">
              <div className="relative flex items-center p-1 rounded-full bg-bg-secondary">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={cn(
                    'relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors',
                    billingCycle === 'monthly' ? 'text-primary-foreground' : 'text-black hover:text-black'
                  )}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={cn(
                    'relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors',
                    billingCycle === 'yearly' ? 'text-primary-foreground' : 'text-black hover:text-black'
                  )}
                >
                  Yearly
                </button>
                <div className={cn(
                    'absolute top-1 bottom-1 rounded-full bg-primary transition-transform duration-300 ease-in-out',
                    billingCycle === 'monthly' ? 'left-1 w-[88px] translate-x-0' : 'left-1 w-[77px] translate-x-[92px]'
                )} />
              </div>
              <div className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-light">
                -15%
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    'flex flex-col rounded-2xl border border-border bg-bg-card p-8 relative overflow-hidden',
                    plan.isFeatured ? 'border-primary ring-2 ring-primary/50 shadow-2xl shadow-orange-500/20' : ''
                  )}
                >
                  {plan.isFeatured && (
                    <>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-primary/30 rounded-full blur-3xl -z-1" />
                        <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-b from-[rgba(15,28,63,1)] to-transparent -z-10" />
                    </>
                  )}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold leading-6 text-black">{plan.name}</h3>
                      <Image src={plan.icon} width={56} height={56} alt={`${plan.name} plan icon`} />
                    </div>
                    <div className="mt-6">
                      {plan.price !== 'Custom Pricing' ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold tracking-tight text-black">{plan.price}</span>
                          <span className="text-sm font-semibold leading-6 tracking-wide text-black">/month</span>
                        </div>
                      ) : (
                        <h3 className="text-4xl font-bold tracking-tight text-black">{plan.price}</h3>
                      )}
                      <p className="mt-2 text-sm text-black whitespace-pre-line">{plan.description}</p>
                    </div>
                    <Button
                      asChild
                      className={cn(
                        'mt-8 w-full group relative',
                        plan.isFeatured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-transparent border border-primary text-primary hover:bg-primary/10'
                      )}
                    >
                      <Link href={plan.ctaLink}>
                        {plan.isFeatured && <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>}
                         {plan.isFeatured && <div className="absolute inset-0 rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.15)] group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-shadow duration-300"></div>}
                        <span className="relative">{plan.ctaText}</span>
                      </Link>
                    </Button>
                    <ul role="list" className="mt-8 space-y-4 text-sm leading-6 text-black">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-8 pt-8 border-t border-border text-center text-sm text-black">{plan.callRate}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}