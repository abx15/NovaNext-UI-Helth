'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, ChevronDown, Shield, Star, Users, Heart, Sparkles } from 'lucide-react';
import { drBlakeData } from "@/lib/data";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  
  const heroPhrases = [
    "Healing & Growth",
    "Mental Wellness",
    "Personal Transformation",
    "Emotional Balance"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const heroStats = [
    { value: "10+", label: "Years Experience", icon: Calendar },
    { value: "98%", label: "Satisfaction Rate", icon: Star },
    { value: "500+", label: "Patients Helped", icon: Users },
    { value: "24/7", label: "Support Available", icon: Shield }
  ];

  return (
    <>
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F9FAFB] to-white">
          {/* Animated Gradient Blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#4A90E2]/20 to-[#50E3C2]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FBBF24]/10 to-[#50E3C2]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-tr from-[#4A90E2]/15 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(to right, #4A90E2 1px, transparent 1px),
                              linear-gradient(to bottom, #4A90E2 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Abstract Lines */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A90E2]/10 to-transparent"></div>
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#50E3C2]/10 to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#E5E7EB] shadow-sm">
                <div className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#1F2937]">Accepting New Patients</span>
                <div className="w-2 h-2 bg-[#50E3C2] rounded-full animate-pulse animation-delay-1000"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block text-[#1F2937]">Healing Through</span>
                  <span className="block relative">
                    <span className="bg-gradient-to-r from-[#4A90E2] via-[#50E3C2] to-[#4A90E2] bg-clip-text text-transparent">
                      {heroPhrases[textIndex]}
                    </span>
                    <div className="absolute -bottom-2 left-0 h-1 w-48 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-[#4B5563] leading-relaxed max-w-xl">
                  Board-certified psychiatrist providing compassionate, evidence-based mental health care 
                  tailored to your unique journey toward wellness.
                </p>
              </div>

              {/* Doctor Info */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280]">Led by</div>
                    <div className="text-xl font-bold text-[#1F2937]">
                      {drBlakeData.name.split(',')[0]}
                    </div>
                  </div>
                </div>
                
                <div className="h-8 w-px bg-[#E5E7EB]"></div>
                
                <div>
                  <div className="text-sm text-[#6B7280]">Specializing in</div>
                  <div className="font-medium text-[#1F2937]">Anxiety, Depression & Trauma</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <button suppressHydrationWarning className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white font-semibold rounded-xl hover:shadow-lg transition-shadow">
                    <Calendar className="w-5 h-5" />
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                
                <a
                  href="#services"
                  className="group flex items-center gap-2 px-8 py-4 bg-white text-[#1F2937] font-semibold rounded-xl border border-[#E5E7EB] hover:border-[#4A90E2] hover:shadow-sm transition-all"
                >
                  <Sparkles className="w-5 h-5 text-[#4A90E2]" />
                  View Services
                </a>
              </div>
            </div>

            {/* Right Column - Stats & Visual */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#4A90E2] transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#4A90E2]/10 to-[#50E3C2]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-[#4A90E2]" />
                        </div>
                        <div className="text-3xl font-bold text-[#1F2937]">{stat.value}</div>
                      </div>
                      <div className="text-sm text-[#6B7280]">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-white to-[#F0F7FF] rounded-2xl p-6 border border-[#E5E7EB]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937]">Why Patients Trust Us</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#4B5563]">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                    <span>100% Confidential Sessions</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4B5563]">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                    <span>Evidence-Based Treatment Methods</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4B5563]">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                    <span>Personalized Care Plans</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4B5563]">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                    <span>Flexible Online & In-Person Sessions</span>
                  </div>
                </div>
              </div>

              {/* Patient Review Preview */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>
                  <p className="text-[#4B5563] italic mb-4">
                    "Dr. Blake's compassionate approach and expertise helped me regain control of my life. 
                    The personalized care made all the difference."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#6B7280]">— Sarah M., Patient</div>
                    <div className="text-xs px-2 py-1 bg-[#F0F7FF] text-[#4A90E2] rounded-full">
                      4.9/5 Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="group flex flex-col items-center gap-2">
            <div className="text-sm text-[#6B7280] group-hover:text-[#4A90E2] transition-colors">
              Scroll to explore
            </div>
            <div className="w-6 h-10 border-2 border-[#E5E7EB] rounded-full flex justify-center group-hover:border-[#4A90E2] transition-colors">
              <div className="w-1 h-3 bg-[#4A90E2] rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
}