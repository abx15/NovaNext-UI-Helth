'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Shield, Star, Users, Heart } from 'lucide-react';
import { drBlakeData } from "@/lib/data";

export function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);

  const heroPhrases = [
    "Healing & Growth",
    "Mental Wellness",
    "Personal Transformation",
    "Emotional Balance"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroPhrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-primary-200/40 to-accent-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-200/30 to-primary-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-safe max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-32">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-smooth">
              <div className="w-2 h-2 bg-accent-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-900">Accepting New Patients</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                <span className="block">Your Journey to</span>
                <span className="gradient-text animate-fade">
                  {heroPhrases[textIndex]}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                Evidence-based therapy tailored to your unique needs. Create lasting change with compassionate, professional care.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-primary-600">8+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-accent-600">500+</div>
                <div className="text-sm text-slate-600">Patients Helped</div>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-slate-600">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-lg transition-smooth flex items-center gap-2 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-smooth flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                <span>Learn More</span>
              </a>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md h-96 md:h-full md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl shadow-2xl opacity-10"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex-center">
                <div className="text-center">
                  <Heart className="w-24 h-24 text-primary-600 mx-auto mb-4 opacity-20" />
                  <p className="text-slate-500 font-medium">Professional headshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
