import { Heart, Mail, Github } from "lucide-react";
import { drBlakeData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#F9FAFB] text-[#1F2937] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#50E3C2] text-white rounded-xl flex items-center justify-center text-lg font-semibold shadow-md">
                SB
              </div>
              <div>
                <h4 className="font-semibold text-lg">Dr. Serena Blake</h4>
                <p className="text-sm text-[#4B5563]">Clinical Psychologist</p>
              </div>
            </div>

            <p className="text-sm text-[#4B5563] max-w-sm leading-relaxed">
              Compassionate, evidence-based therapy designed to help you live
              with clarity, confidence, and emotional balance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#1F2937]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#4B5563] hover:text-[#4A90E2] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#1F2937]">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${drBlakeData.contact.phone}`}
                  className="text-[#4B5563] hover:text-[#4A90E2] transition-colors"
                >
                  {drBlakeData.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${drBlakeData.contact.email}`}
                  className="text-[#4B5563] hover:text-[#4A90E2] transition-colors"
                >
                  {drBlakeData.contact.email}
                </a>
              </li>
              <li className="text-[#4B5563]">{drBlakeData.location}</li>
            </ul>
          </div>
        </div>

        {/* Divider Bottom */}
        <div className="border-t border-[#E5E7EB] py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} {drBlakeData.name}. All rights
            reserved.
          </p>

          {/* Message */}
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Heart className="w-4 h-4 text-[#4A90E2]" />
            <span>Designed with care for emotional well-being.</span>
          </div>

          {/* Developer Credit */}
          <div className="flex items-center gap-4 text-sm font-medium text-[#111827]">
            <span>Developed by</span>
            <span className="text-[#4A90E2] font-semibold hover:underline">
              <a href="https://arun15dev.netlify.app/" target="_blank">Arun Kumar Bind</a>
            </span>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:developerarunwork@gmail.com"
                className="hover:text-[#4A90E2] transition-transform hover:scale-110"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://github.com/abx15"
                target="_blank"
                className="hover:text-[#4A90E2] transition-transform hover:scale-110"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
