"use client";

import React from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';

export function DemoHeader() {
  const [open, setOpen] = React.useState(false);

  const links = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Results',
      href: '/#testimonials',
    },
  ];

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <img
            src="/Untitled design (5).png"
            alt="Company Logo"
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              className={buttonVariants({ variant: 'ghost' })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <a href="/consultation">
            <Button>Book a Free Consultation</Button>
          </a>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <Button size="icon" variant="outline" className="lg:hidden">
            <MenuToggle
              strokeWidth={2.5}
              open={open}
              onOpenChange={setOpen}
              className="size-6"
            />
          </Button>
          <SheetContent
            className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg [&>button]:hidden"
            side="left"
          >
            <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className={buttonVariants({
                    variant: 'ghost',
                    className: 'justify-start',
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <SheetFooter>
              <a href="/consultation">
                <Button>Book a Free Consultation</Button>
              </a>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}