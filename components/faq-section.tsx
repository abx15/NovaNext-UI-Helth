'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { drBlakeData } from "@/lib/data";
import { HelpCircle, MessageCircle, Phone, Mail, ChevronDown, Sparkles, Shield, Clock, CheckCircle, Users } from 'lucide-react';

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const faqCategories = [
    { id: 'all', label: 'All Questions', count: drBlakeData.faq.length },
    { id: 'getting-started', label: 'Getting Started', icon: Sparkles },
    { id: 'sessions', label: 'Sessions & Fees', icon: Clock },
    { id: 'confidentiality', label: 'Confidentiality', icon: Shield },
    { id: 'results', label: 'Results & Expectations', icon: CheckCircle },
  ];

  const getCategoryIcon = (categoryId: string) => {
    const category = faqCategories.find(cat => cat.id === categoryId);
    return category?.icon || HelpCircle;
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4A90E2]/10 to-[#50E3C2]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FBBF24]/5 to-[#4A90E2]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #4A90E2 1px, transparent 1px),
                            linear-gradient(to bottom, #4A90E2 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#4A90E2]"></div>
            <span className="px-4 py-2 bg-gradient-to-r from-[#4A90E2]/10 to-[#50E3C2]/10 text-[#1F2937] text-sm font-medium rounded-full border border-[#E5E7EB]">
              Common Questions
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#50E3C2]"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-[#1F2937]">Answers to</span>
            <span className="block bg-gradient-to-r from-[#4A90E2] via-[#50E3C2] to-[#4A90E2] bg-clip-text text-transparent">
              Your Questions
            </span>
          </h2>
          
          <p className="text-xl text-[#4B5563] leading-relaxed">
            Everything you need to know about starting your therapeutic journey with confidence and clarity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category) => {
            const Icon = category.icon || HelpCircle;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white border-transparent shadow-md'
                    : 'bg-white text-[#4B5563] border-[#E5E7EB] hover:border-[#4A90E2] hover:shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-white' : 'text-[#4A90E2]'}`} />
                <span className="font-medium">{category.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-[#F9FAFB] text-[#6B7280]'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {drBlakeData.faq.map((item, index) => (
            <div key={index} className="group">
              <div className="h-full bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden hover:border-[#4A90E2] hover:shadow-lg transition-all duration-300">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-[#F9FAFB] transition-colors">
                      <div className="flex items-start gap-4 w-full text-left">
                        <div className={`w-10 h-10 bg-gradient-to-br from-[#4A90E2]/10 to-[#50E3C2]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#4A90E2]/20 group-hover:to-[#50E3C2]/20 transition-all`}>
                          <div className="w-6 h-6 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-md flex items-center justify-center">
                            <HelpCircle className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#1F2937] pr-8">
                            {item.question}
                          </h3>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-16 h-1 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                            <div className="text-xs text-[#6B7280]">
                              Click to expand
                            </div>
                          </div>
                        </div>
                        <ChevronDown className="w-5 h-5 text-[#6B7280] transition-transform duration-300 flex-shrink-0 ml-2" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="pl-14">
                        <div className="relative">
                          <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4A90E2] to-[#50E3C2] rounded-full"></div>
                          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl p-5 border border-[#E5E7EB]">
                            <p className="text-[#4B5563] leading-relaxed whitespace-pre-line">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute -inset-4">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/5 via-[#50E3C2]/5 to-[#4A90E2]/5 rounded-3xl blur-xl"></div>
          </div>
          
          <div className="relative bg-gradient-to-r from-white to-[#F0F7FF] rounded-3xl p-8 md:p-12 border border-[#E5E7EB] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #4A90E2 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1F2937]">Still Have Questions?</h3>
                      <p className="text-[#6B7280]">We're here to help 24/7</p>
                    </div>
                  </div>
                  
                  <p className="text-[#4B5563] mb-8">
                    Can't find what you're looking for? Our team is ready to provide 
                    personalized answers and guidance for your specific situation.
                  </p>
                  
                  {/* Contact Methods */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#4A90E2] transition-colors">
                      <div className="w-10 h-10 bg-[#E8F2FF] rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#4A90E2]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#6B7280]">Call us directly</div>
                        <a 
                          href={`tel:${drBlakeData.contact.phone}`}
                          className="font-medium text-[#1F2937] hover:text-[#4A90E2] transition-colors"
                        >
                          {drBlakeData.contact.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#4A90E2] transition-colors">
                      <div className="w-10 h-10 bg-[#E0FFFA] rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#50E3C2]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#6B7280]">Send us an email</div>
                        <a 
                          href={`mailto:${drBlakeData.contact.email}`}
                          className="font-medium text-[#1F2937] hover:text-[#50E3C2] transition-colors"
                        >
                          {drBlakeData.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right CTA */}
                <div className="bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-2xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
                  <p className="mb-6 opacity-90">
                    Book your free initial consultation and take the first step 
                    toward better mental health today.
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href="#contact"
                      className="block w-full text-center py-3 bg-white text-[#4A90E2] font-semibold rounded-xl hover:shadow-lg transition-shadow"
                    >
                      Book Free Consultation
                    </a>
                    
                    <div className="flex items-center justify-center gap-2 text-sm opacity-80">
                      <Users className="w-4 h-4" />
                      <span>Limited spots available this week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
     
    </section>
  );
}