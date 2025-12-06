'use client';

import Image from "next/image";
import { drBlakeData } from "@/lib/data";
import { Award, MapPin, Calendar, Users, Star, ArrowRight, CheckCircle, Heart } from "lucide-react";

export function AboutSection() {
  const specialties = [
    "Anxiety & Depression",
    "Trauma Therapy",
    "Relationship Counseling",
    "Stress Management",
    "Mindfulness & CBT",
    "Personal Growth"
  ];

  const stats = [
    { value: "10+", label: "Years Experience", icon: Calendar },
    { value: "500+", label: "Patients Helped", icon: Users },
    { value: "4.9", label: "Patient Rating", icon: Star },
    { value: "98%", label: "Satisfaction Rate", icon: Heart }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #4A90E2 1px, transparent 1px),
                            linear-gradient(to bottom, #4A90E2 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Gradient Blobs */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-[#4A90E2]/10 to-[#50E3C2]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-bl from-[#FBBF24]/5 to-[#50E3C2]/5 rounded-full blur-3xl"></div>
        
        {/* Abstract Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#4A90E2]/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#50E3C2]/10 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Modern Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4A90E2]"></div>
            <span className="px-4 py-2 bg-gradient-to-r from-[#4A90E2]/10 to-[#50E3C2]/10 text-[#1F2937] text-sm font-medium rounded-full border border-[#E5E7EB]">
              Meet Your Guide
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#50E3C2]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-[#1F2937]">Transforming Lives</span>
              <span className="block bg-gradient-to-r from-[#4A90E2] via-[#50E3C2] to-[#4A90E2] bg-clip-text text-transparent">
                Through Compassionate Care
              </span>
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed">
              Board-certified psychiatrist dedicated to providing personalized, evidence-based treatment 
              in a supportive and confidential environment.
            </p>
          </div>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column - Image & Stats */}
          <div className="lg:col-span-5 space-y-8">
            {/* Modern Image Container */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Background Decoration */}
                <div className="absolute -inset-4">
                  <div className="absolute inset-0 border-2 border-[#4A90E2]/20 rounded-3xl rotate-3"></div>
                  <div className="absolute inset-0 border-2 border-[#50E3C2]/20 rounded-3xl -rotate-3"></div>
                </div>
                
                {/* Main Image */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={drBlakeData.headshot || "/placeholder.svg"}
                    alt={`Professional headshot of ${drBlakeData.name}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-[#E5E7EB] animate-float">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Location Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-[#E5E7EB] animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280]">Based in</div>
                      <div className="font-semibold text-[#1F2937]">{drBlakeData.location.split(',')[0]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-2xl p-4 border border-[#E5E7EB] hover:border-[#4A90E2]/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#4A90E2]/10 to-[#50E3C2]/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#4A90E2]" />
                      </div>
                      <div className="text-2xl font-bold text-[#1F2937]">{stat.value}</div>
                    </div>
                    <div className="text-sm text-[#6B7280]">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Introduction Card */}
            <div className="bg-gradient-to-br from-white to-[#F0F7FF] rounded-3xl p-8 md:p-10 border border-[#E5E7EB] shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2">
                    A Holistic Approach to Mental Wellness
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-[#4B5563] leading-relaxed">
                  {drBlakeData.about}
                </p>
                
                <div className="flex items-center gap-3 text-[#1F2937] font-medium">
                  <CheckCircle className="w-5 h-5 text-[#50E3C2]" />
                  <span>Board Certified Psychiatrist</span>
                </div>
                <div className="flex items-center gap-3 text-[#1F2937] font-medium">
                  <CheckCircle className="w-5 h-5 text-[#50E3C2]" />
                  <span>Evidence-Based Treatment Methods</span>
                </div>
                <div className="flex items-center gap-3 text-[#1F2937] font-medium">
                  <CheckCircle className="w-5 h-5 text-[#50E3C2]" />
                  <span>Personalized Care Plans</span>
                </div>
              </div>
            </div>

            {/* Specialties Grid */}
            <div>
              <h4 className="text-xl font-bold text-[#1F2937] mb-6">Areas of Specialization</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-xl border border-[#E5E7EB] hover:border-[#4A90E2] transition-all hover:shadow-md bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4A90E2]/10 to-[#50E3C2]/10 rounded-lg flex items-center justify-center group-hover:from-[#4A90E2]/20 group-hover:to-[#50E3C2]/20 transition-all">
                        <div className="w-2 h-2 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                      </div>
                      <span className="text-[#4B5563] group-hover:text-[#1F2937] transition-colors font-medium">
                        {specialty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Education Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#1F2937]">Professional Experience</h5>
                      <div className="text-sm text-[#6B7280]">Dedicated Service</div>
                    </div>
                  </div>
                  <p className="text-[#4B5563]">{drBlakeData.experience}</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-8">
              <div className="bg-gradient-to-r from-[#4A90E2]/5 via-[#50E3C2]/5 to-[#4A90E2]/5 rounded-2xl p-8 border border-[#E5E7EB]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="md:flex-1">
                    <h4 className="text-2xl font-bold text-[#1F2937] mb-3">
                      Ready to Begin Your Healing Journey?
                    </h4>
                    <p className="text-[#4B5563]">
                      Take the first step towards better mental health with a personalized consultation.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#contact"
                      className="px-8 py-3 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white font-semibold rounded-xl hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 group"
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="#services"
                      className="px-8 py-3 bg-white text-[#1F2937] font-semibold rounded-xl border border-[#E5E7EB] hover:border-[#4A90E2] transition-colors"
                    >
                      View Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite 0.5s;
        }
      `}</style>
    </section>
  );
}