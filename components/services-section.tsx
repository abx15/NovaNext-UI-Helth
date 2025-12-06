import Image from "next/image";
import { drBlakeData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, Users, Brain, Shield, Clock, Sparkles, Calendar, CheckCircle, ArrowRight, Star, Phone } from "lucide-react";

export function ServicesSection() {
  const serviceIcons = [
    { icon: Heart, color: "from-[#4A90E2] to-[#50E3C2]", bgColor: "bg-[#E8F2FF]" },
    { icon: Brain, color: "from-[#50E3C2] to-[#4A90E2]", bgColor: "bg-[#E0FFFA]" },
    { icon: Users, color: "from-[#4A90E2] to-[#3a80d2]", bgColor: "bg-[#F0F7FF]" },
    { icon: Shield, color: "from-[#FBBF24] to-[#F59E0B]", bgColor: "bg-[#FEF3C7]" },
    { icon: Clock, color: "from-[#50E3C2] to-[#40d3b2]", bgColor: "bg-[#E0FFFA]/50" },
    { icon: Sparkles, color: "from-[#4A90E2] to-[#50E3C2]", bgColor: "bg-[#E8F2FF]" },
  ];

  const benefits = [
    "Evidence-based treatment methods",
    "Personalized care plans",
    "Confidential & secure sessions",
    "Flexible scheduling options",
    "Telehealth available",
    "Progress tracking"
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #4A90E2 1px, transparent 1px),
                            linear-gradient(to bottom, #4A90E2 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Gradient Blobs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#4A90E2]/10 to-[#50E3C2]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-[#FBBF24]/5 to-[#4A90E2]/5 rounded-full blur-3xl"></div>
        
        {/* Abstract Lines */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#4A90E2]/10 to-transparent"></div>
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#50E3C2]/10 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#4A90E2]"></div>
            <span className="px-4 py-2 bg-gradient-to-r from-[#4A90E2]/10 to-[#50E3C2]/10 text-[#1F2937] text-sm font-medium rounded-full border border-[#E5E7EB]">
              Our Specialties
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#50E3C2]"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-[#1F2937]">Comprehensive</span>
            <span className="block bg-gradient-to-r from-[#4A90E2] via-[#50E3C2] to-[#4A90E2] bg-clip-text text-transparent">
              Mental Health Services
            </span>
          </h2>
          
          <p className="text-xl text-[#4B5563] leading-relaxed">
            Tailored therapeutic approaches to support your journey toward mental wellness and personal growth.
          </p>
        </div>

        {/* Services Grid - Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="space-y-8">
            {/* Feature Highlight */}
            <div className="bg-gradient-to-br from-white to-[#F0F7FF] rounded-3xl p-8 border border-[#E5E7EB]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-2xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">Why Choose Us</h3>
                  <p className="text-[#6B7280]">Evidence-based, compassionate care</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#50E3C2] flex-shrink-0" />
                    <span className="text-[#4B5563]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 border border-[#E5E7EB]">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Session Investment</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#4A90E2]/20 to-[#50E3C2]/20 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#4A90E2]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#1F2937]">Individual Therapy</div>
                        <div className="text-sm text-[#6B7280]">50-60 minute session</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#1F2937]">
                      {drBlakeData.sessionFees.individual}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FBBF24]/20 to-[#F59E0B]/20 rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-[#FBBF24]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#1F2937]">Couples Counseling</div>
                        <div className="text-sm text-[#6B7280]">75-90 minute session</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#1F2937]">
                      {drBlakeData.sessionFees.couples}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <div className="w-1.5 h-1.5 bg-[#50E3C2] rounded-full"></div>
                      <span>Most insurance plans accepted</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <div className="w-1.5 h-1.5 bg-[#50E3C2] rounded-full"></div>
                      <span>Sliding scale available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <div className="w-1.5 h-1.5 bg-[#50E3C2] rounded-full"></div>
                      <span>Free initial consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {drBlakeData.services.map((service, index) => {
              const Icon = serviceIcons[index]?.icon || Heart;
              const gradient = serviceIcons[index]?.color || "from-[#4A90E2] to-[#50E3C2]";
              const bgColor = serviceIcons[index]?.bgColor || "bg-[#E8F2FF]";
              
              return (
                <div key={index} className="group">
                  <div className="h-full bg-white rounded-2xl border border-[#E5E7EB] p-6 hover:border-[#4A90E2] hover:shadow-lg transition-all duration-300">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <div className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1F2937] group-hover:text-[#4A90E2] transition-colors">
                          {service.title}
                        </h3>
                        <div className="h-1 w-8 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#4B5563] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                        <span>Personalized approach</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                        <span>Confidential sessions</span>
                      </div>
                    </div>
                    
                    {/* Image Preview */}
                    {service.image && (
                      <div className="mt-6 rounded-xl overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={400}
                          height={200}
                          className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute -inset-4">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/5 via-[#50E3C2]/5 to-[#4A90E2]/5 rounded-3xl blur-xl"></div>
          </div>
          
          <div className="relative bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:flex-1 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Begin Your Healing Journey?
                  </h3>
                  <p className="text-white/90 text-lg">
                    Schedule your initial consultation and take the first step toward better mental health.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4A90E2] font-semibold rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href={`tel:${drBlakeData.contact.phone}`}
                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 pt-8 border-t border-white/20">
                {[
                  { label: "24/7 Response", value: "24h" },
                  { label: "Satisfaction", value: "98%" },
                  { label: "Confidential", value: "100%" },
                  { label: "Flexible", value: "Online/In-person" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{item.value}</div>
                      <div className="text-sm text-white/80">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}