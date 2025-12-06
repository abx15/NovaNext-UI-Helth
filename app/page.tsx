'use client';

import dynamic from 'next/dynamic';
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const FAQSection = dynamic(
  () => import('@/components/faq-section').then((mod) => mod.FAQSection),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="font-sans text-dark-text" suppressHydrationWarning>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
