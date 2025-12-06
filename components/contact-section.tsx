"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { drBlakeData } from "@/lib/data";
import { Mail, Phone, MapPin, Clock, Heart, Calendar, User, MessageSquare, ArrowRight, Shield, Star } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email address." }),
  message: z.string().min(1, { message: "Please tell us what brings you here." }),
  preferredTime: z.string().min(1, { message: "Preferred time to reach you is required." }),
  agreeToContact: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted.",
  }),
});

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: "",
      agreeToContact: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", values);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        form.reset();
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Modern Contact Section */}
      <section id="contact" suppressHydrationWarning className="relative py-24 md:py-32 bg-[#F9FAFB] overflow-hidden">
        {/* Modern Geometric Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #4A90E2 1px, transparent 1px),
                                linear-gradient(to bottom, #4A90E2 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#4A90E2]/10 to-[#50E3C2]/10 rounded-3xl rotate-12 blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-tr from-[#FBBF24]/5 to-[#4A90E2]/5 rounded-full blur-xl animate-float-delayed"></div>
          
          {/* Diagonal Lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A90E2]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#50E3C2]/20 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          {/* Modern Header with Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#E5E7EB] mb-6">
                <div className="w-2 h-2 bg-[#4A90E2] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#1F2937]">Contact Available</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-[#1F2937]">Let's Start</span>
                <br />
                <span className="bg-gradient-to-r from-[#4A90E2] via-[#50E3C2] to-[#4A90E2] bg-clip-text text-transparent">
                  Your Journey
                </span>
              </h2>
              <p className="text-xl text-[#4B5563] mb-8 leading-relaxed">
                Connect with Dr. Blake for personalized care. We're here to listen and help you find your path forward.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E5E7EB]">
                  <Shield className="w-4 h-4 text-[#4A90E2]" />
                  <span className="text-sm text-[#4B5563]">100% Confidential</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E5E7EB]">
                  <Star className="w-4 h-4 text-[#FBBF24]" />
                  <span className="text-sm text-[#4B5563]">4.9/5 Patient Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E5E7EB]">
                  <Calendar className="w-4 h-4 text-[#50E3C2]" />
                  <span className="text-sm text-[#4B5563]">Same Week Appointments</span>
                </div>
              </div>
            </div>

            {/* Contact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#4A90E2] transition-colors group">
                <div className="text-4xl font-bold text-[#1F2937] mb-2 group-hover:text-[#4A90E2] transition-colors">24h</div>
                <div className="text-[#6B7280] text-sm">Response Time</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#50E3C2] transition-colors group">
                <div className="text-4xl font-bold text-[#1F2937] mb-2 group-hover:text-[#50E3C2] transition-colors">98%</div>
                <div className="text-[#6B7280] text-sm">Satisfaction Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#FBBF24] transition-colors group">
                <div className="text-4xl font-bold text-[#1F2937] mb-2 group-hover:text-[#FBBF24] transition-colors">10+</div>
                <div className="text-[#6B7280] text-sm">Years Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#4A90E2] transition-colors group">
                <div className="text-4xl font-bold text-[#1F2937] mb-2 group-hover:text-[#4A90E2] transition-colors">500+</div>
                <div className="text-[#6B7280] text-sm">Patients Helped</div>
              </div>
            </div>
          </div>

          {/* Modern Split Layout - Contact Info & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-white to-[#F0F7FF] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2937]">Direct Contact</h3>
                    <p className="text-sm text-[#6B7280]">Quick response guaranteed</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href={`tel:${drBlakeData.contact.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[#E8F2FF] rounded-lg flex items-center justify-center group-hover:bg-[#4A90E2] transition-colors">
                      <Phone className="w-4 h-4 text-[#4A90E2] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280]">Phone</div>
                      <div className="font-medium text-[#1F2937]">{drBlakeData.contact.phone}</div>
                    </div>
                  </a>
                  
                  <a 
                    href={`mailto:${drBlakeData.contact.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[#E0FFFA] rounded-lg flex items-center justify-center group-hover:bg-[#50E3C2] transition-colors">
                      <Mail className="w-4 h-4 text-[#50E3C2] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280]">Email</div>
                      <div className="font-medium text-[#1F2937]">{drBlakeData.contact.email}</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-3 p-3 rounded-xl">
                    <div className="w-10 h-10 bg-[#FEF3C7] rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#FBBF24]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280]">Location</div>
                      <div className="font-medium text-[#1F2937]">{drBlakeData.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-white to-[#E0FFFA] rounded-2xl p-6 border border-[#E5E7EB] shadow-sm">
                <h4 className="font-bold text-[#1F2937] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#50E3C2]" />
                  Office Hours
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#4B5563]">In-person</span>
                    <span className="font-medium text-[#1F2937]">{drBlakeData.officeHours.inPerson}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#4B5563]">Virtual</span>
                    <span className="font-medium text-[#1F2937]">{drBlakeData.officeHours.virtual}</span>
                  </div>
                </div>
              </div>

              {/* Quick Action */}
              <button className="w-full bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group">
                <Calendar className="w-5 h-5" />
                Book Direct Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Modern Form - Two Columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#4A90E2]/5 via-[#50E3C2]/5 to-[#4A90E2]/5 p-6 border-b border-[#E5E7EB]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1F2937]">Send a Message</h3>
                        <p className="text-sm text-[#6B7280]">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    {formSubmitted && (
                      <div className="px-4 py-2 bg-gradient-to-r from-[#50E3C2]/10 to-[#4A90E2]/10 rounded-full border border-[#50E3C2]/20">
                        <span className="text-sm font-medium text-[#1F2937] flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#50E3C2] rounded-full animate-pulse"></div>
                          Message Sent Successfully!
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#1F2937] font-medium flex items-center gap-2">
                                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full"></div>
                                  Your Name
                                </FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                    <Input 
                                      placeholder="John Doe" 
                                      {...field} 
                                      className="h-12 pl-11 border-[#E5E7EB] focus:border-[#4A90E2] focus:ring-[#4A90E2] rounded-xl transition-all bg-white"
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#1F2937] font-medium flex items-center gap-2">
                                  <div className="w-2 h-2 bg-[#50E3C2] rounded-full"></div>
                                  Email Address
                                </FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                    <Input 
                                      type="email" 
                                      placeholder="john@example.com" 
                                      {...field} 
                                      className="h-12 pl-11 border-[#E5E7EB] focus:border-[#4A90E2] focus:ring-[#4A90E2] rounded-xl transition-all bg-white"
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="preferredTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#1F2937] font-medium flex items-center gap-2">
                                  <div className="w-2 h-2 bg-[#FBBF24] rounded-full"></div>
                                  Preferred Time
                                </FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                    <Input 
                                      placeholder="e.g., Weekdays 9AM-5PM" 
                                      {...field} 
                                      className="h-12 pl-11 border-[#E5E7EB] focus:border-[#4A90E2] focus:ring-[#4A90E2] rounded-xl transition-all bg-white"
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#1F2937] font-medium flex items-center gap-2">
                                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full"></div>
                                  Phone Number
                                </FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                                    <Input 
                                      placeholder="(123) 456-7890" 
                                      {...field} 
                                      className="h-12 pl-11 border-[#E5E7EB] focus:border-[#4A90E2] focus:ring-[#4A90E2] rounded-xl transition-all bg-white"
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem className="h-full">
                                <FormLabel className="text-[#1F2937] font-medium flex items-center gap-2">
                                  <div className="w-2 h-2 bg-[#50E3C2] rounded-full"></div>
                                  Your Message
                                </FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us about what brings you here and how we can help..." 
                                    className="min-h-[140px] border-[#E5E7EB] focus:border-[#4A90E2] focus:ring-[#4A90E2] rounded-xl transition-all resize-none bg-white" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Agreement and Submit */}
                      <div className="pt-6 border-t border-[#E5E7EB]">
                        <FormField
                          control={form.control}
                          name="agreeToContact"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="mt-1 data-[state=checked]:bg-[#4A90E2] data-[state=checked]:border-[#4A90E2]"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-[#4B5563] cursor-pointer">
                                  I agree to be contacted by Dr. Blake via the provided contact information.
                                </FormLabel>
                                <p className="text-sm text-[#6B7280]">
                                  Your information is secure and will only be used to respond to your inquiry.
                                </p>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full md:w-auto min-w-[200px] h-14 mt-8 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] hover:from-[#3a80d2] hover:to-[#40d3b2] text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 1s;
        }
      `}</style>
    </>
  );
}